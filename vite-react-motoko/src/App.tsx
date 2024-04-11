import React, { useState, useEffect } from 'react';
import { idlFactory as icdvFactory, canisterId as icdvCanisterID } from './declarations/prodtoken';
import { _SERVICE as icdvService } from './declarations/prodtoken/index.d';
import { idlFactory as icpFactory, canisterId as icpCanisterID } from './declarations/nns-ledger';
import { _SERVICE as icpService } from './declarations/nns-ledger/index.d';
import { Principal } from '@dfinity/principal';

function bigintToFloatString(bigintValue : bigint, decimals = 8) {
  const stringValue = bigintValue.toString();
  // Ensure the string is long enough by padding with leading zeros if necessary
  const paddedStringValue = stringValue.padStart(decimals + 1, '0');
  // Insert decimal point decimals places from the end
  const beforeDecimal = paddedStringValue.slice(0, -decimals);
  const afterDecimal = paddedStringValue.slice(-decimals);
  // Combine and trim any trailing zeros after the decimal point for display
  const result = `${beforeDecimal}.${afterDecimal}`.replace(/\.?0+$/, '');
  return result;
}

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [icpBalance, setIcpBalance] = useState<bigint>(0n);
  const [icdvBalance, setIcdvBalance] = useState<bigint>(0n);

  const [icdvActor, setIcdvActor] = useState<icdvService |null>(null);
  const [icpActor, setIcpActor] = useState<icpService | null>(null);
  const [yourPrincipal, setYourPrincipal] = useState<string>("null");


  useEffect(() => {
    const checkConnection = async () => {
      try {
        // Assuming window.ic?.plug?.isConnected() is a Promise-based method
        
        const connected = await window.ic.plug.isConnected();
        if(connected){
          await handleLogin();
        
        } else {
          
        }
        
      } catch (error) {
        console.error("Error checking connection status:", error);
        // Handle any errors, for example, by setting an error state
      }
    };

    console.log("first time", isConnected);

    checkConnection();
  }, []); // Dependency array remains empty if you only want this effect to run once on component mount

  useEffect(() => {
    // This code runs after `icpActor` and `icdvActor` have been updated.
    console.log("actors updated", icpActor, icdvActor);
  
    fetchBalances();
    // Note: If `fetchBalances` depends on `icpActor` or `icdvActor`, you should ensure it's capable of handling null values or wait until these values are not null.
  }, [icpActor, icdvActor]);

  useEffect(() => {
    // This code runs after `icpActor` and `icdvActor` have been updated.
    if (isConnected) {
      
      fetchPrincipal();
      // Ensure fetchBalances is defined and correctly handles asynchronous operations
      setUpActors();
    };

    console.log("isConnected", isConnected);

    // Note: If `fetchBalances` depends on `icpActor` or `icdvActor`, you should ensure it's capable of handling null values or wait until these values are not null.
  }, [isConnected]);

  const fetchPrincipal = async () => {
    if(!(await window.ic.plug.agent)) return;
    setYourPrincipal((await window.ic.plug.agent.getPrincipal()).toString());
  };


  const fetchBalances = async () => {
    // Assuming icdvFactory and icpFactory are your actor factories
    // You'd need to replace this with actual logic to instantiate your actors and fetch balances
    // This is a placeholder for actor creation and balance fetching
    
    if(icdvActor === null || icpActor === null) return;
    // Fetch balances (assuming these functions return balances in a suitable format)
    const icdvBalance = await icdvActor.icrc1_balance_of({
      owner: await window.ic.plug.agent.getPrincipal(),
      subaccount:[]
    });
    const icpBalance = await icpActor.icrc1_balance_of({
      owner: await window.ic.plug.agent.getPrincipal(),
      subaccount:[]
    });

    await setIcdvBalance(icdvBalance);
    await setIcpBalance(icpBalance);
  };

  const setUpActors = async () => {

    const getICPActor = await window.ic.plug.createActor({
      canisterId: icpCanisterID,
      interfaceFactory:icpFactory,
    })

    await setIcpActor(getICPActor);

    await setIcdvActor(await window.ic.plug.createActor({
      canisterId: icdvCanisterID,
      interfaceFactory:icdvFactory,
    }));
    

    console.log("actors", icpActor, icdvActor);
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      let pubkey = await window.ic.plug.requestConnect({
        // whitelist, host, and onConnectionUpdate need to be defined or imported appropriately
        whitelist: [icdvCanisterID, icpCanisterID],
        host: "https://ic0.app",
        onConnectionUpdate: async () => {
          console.log("Connection updated", await window.ic.plug.isConnected());
          await setIsConnected(!!await window.ic.plug.isConnected());
        },
      });
      console.log("Connected with pubkey:", pubkey);
      await setIsConnected(true);
    } catch (error) {
      console.error('Login failed:', error);
      setIsConnected(false);
    } finally {
      setLoading(false);
    }
  };

  const handleMint = async () => {
    if (!isConnected) {
      alert("Please connect your wallet first.");
      return;
    }

    const amountToMint = prompt("Enter the amount of ICP to use to mint ICDV:");
    const amountInE8s = BigInt(Number(amountToMint) * 100000000);

    if (amountInE8s > icpBalance) {
      alert("You do not have enough ICP.");
      return;
    }

    if(!icpActor || !icdvActor) return;

    setLoading(true);
    try {
      // Assuming icpActor and icdvActor are already initialized actors
      const approvalResult  = await icpActor.icrc2_approve({
        amount: amountInE8s,
        // Adjust with your canister ID and parameters
        spender: {
          owner: await Principal.fromText("agtsn-xyaaa-aaaag-ak3kq-cai"),
          subaccount: [],
        },
        memo: [],
        fee: [10000n],
        created_at_time: [],
        expires_at: [],
        expected_allowance: [],
        from_subaccount: [],
      });

      if ("Ok" in approvalResult) {
        alert("Your ICP has been authorized for minting. Please click ok and wait for the transaction to complete. A message box should appear after a few seconds.");
        let result = await icdvActor.mintFromICP({
          amount: amountInE8s,
          source_subaccount: [], // Adjust according to your needs
          target: [], // Adjust according to your needs
        });
        if("Ok" in result){
          alert("Mint successful! Block: " + result.Ok.toString() + ".");
        } else {  
          alert("Mint failed! " + result.Err.toString());
        };
        fetchBalances();
      } else {
        alert("Mint failed.");
      }
    } catch (error) {
      console.error('Minting failed:', error);
      alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      {!isConnected ? (
        <button onClick={handleLogin} disabled={loading}>Login with Plug</button>
      ) : (
        <>
          <h1>Your current $ICDV Balance: {bigintToFloatString(icdvBalance)}</h1>
          <h1>Your current $ICP Balance: {bigintToFloatString(icpBalance)}</h1>
          <div className="card">
            {icpBalance > 0 ? (
              <div>
                <button onClick={handleMint} disabled={loading}>
                  {"Click here to mint $ICDV"}
                </button>
                <p>You need ICP to mint $ICDV. Your principal is {yourPrincipal}</p>
              </div>
            ) : (
              <p>You need ICP to mint $ICDV. Your principal is {yourPrincipal}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
