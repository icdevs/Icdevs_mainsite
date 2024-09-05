import React, { useState, useEffect, ReactElement } from 'react';
import { idlFactory as icdvFactory, canisterId as icdvCanisterID } from './declarations/prodtoken';
import { _SERVICE as icdvService } from './declarations/prodtoken/index.d';
import { idlFactory as icpFactory, canisterId as icpCanisterID } from './declarations/nns-ledger';
import { _SERVICE as icpService } from './declarations/nns-ledger/index.d';
import { idlFactory as subsFactory, canisterId as subsCanisterID } from './declarations/subs';
import { _SERVICE as subsService } from './declarations/subs/index.d';
import {  Subscription, PaymentRecord, TokenInfo, SubStatus } from './declarations/subs/subs.did.d';
import { Principal } from '@dfinity/principal';
import { J } from 'vitest/dist/types-198fd1d9';

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

  const [subs, setSubs] = useState<Subscription[]>([]);
  const [subsPayments, setSubsPayments] = useState<PaymentRecord[]>([]);
  const [subsTokens, setSubsTokens] = useState<TokenInfo[]>([]);

  const [icdvActor, setIcdvActor] = useState<icdvService |null>(null);
  const [icpActor, setIcpActor] = useState<icpService | null>(null);
  const [subsActor, setSubsActor] = useState<subsService | null>(null);
  const [yourPrincipal, setYourPrincipal] = useState<string>("null");


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

  useEffect(() => {
    
    console.log("Component mounted, waiting for user to log in...");
    //console.log("first time", isConnected);

    //checkConnection();
  }, []); // Dependency array remains empty if you only want this effect to run once on component mount

  useEffect(() => {
    // This code runs after `icpActor` and `icdvActor` have been updated.
    console.log("actors updated", icpActor, icdvActor);
  
    fetchBalances();
    fetchSubs();
    // Note: If `fetchBalances` depends on `icpActor` or `icdvActor`, you should ensure it's capable of handling null values or wait until these values are not null.
  }, [icpActor, icdvActor,subsActor]);

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

  const fetchSubs = async () => {
    // Assuming icdvFactory and icpFactory are your actor factories
    // You'd need to replace this with actual logic to instantiate your actors and fetch balances
    // This is a placeholder for actor creation and balance fetching
    
    if(subsActor === null) return;
    // Fetch balances (assuming these functions return balances in a suitable format)
    const subsList = await subsActor.icrc79_get_user_subscriptions([],[],[]);
    const paymentList = await subsActor.icrc79_get_user_payments([],[],[]);
    const subsTokens = await subsActor.get_token_info();
    
    await setSubs(subsList);
    await setSubsPayments(paymentList);
    await setSubsTokens(subsTokens);
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

    await setSubsActor(await window.ic.plug.createActor({
      canisterId: subsCanisterID,
      interfaceFactory:subsFactory,
    }));
    
    console.log("actors", icpActor, icdvActor);
  };

  const handleLogin = async () => {
    setLoading(true);
      try {
        const connected = await window.ic.plug.isConnected();
        if (!connected) {
          let pubkey = await window.ic.plug.requestConnect({
            // whitelist, host, and onConnectionUpdate need to be defined or imported appropriately
            whitelist: [icdvCanisterID, icpCanisterID, subsCanisterID],
            host: "https://ic0.app",
            onConnectionUpdate: async () => {
              console.log("Connection updated", await window.ic.plug.isConnected());
              await setIsConnected(!!await window.ic.plug.isConnected());
            },
          });
          console.log("Connected with pubkey:", pubkey);
          await setIsConnected(true);
        } else {
          setIsConnected(true);
          //await handleLogin();
        };
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

  function stringToNumberHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    if(hash < 0){
      hash = hash * -1;
    };
    return hash;
}

  const handleSubscribe = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!isConnected) {
      alert("Please connect your wallet first.");
      return;
    }

    if (!selectedToken) {
      alert("Please select a token.");
      return;
    }

    let symbol = getTokenSymbol(selectedToken);

    const amountToMint = prompt("Enter the amount of " + symbol + " you would like to donate per month");
    const amountInE8s = BigInt(Number(amountToMint) * (10 ** getTokenDecimals(selectedToken))) ;
    const allowanceAmount = amountInE8s * BigInt(12) * BigInt(30);
    alert("You will now approve 30 years worth of payments. The contract is governed by the NNS and cannot take more than you have approved per month. You can cancel at any time.");

    if(selectedToken.toString() != icpCanisterID.toString() && selectedToken.toString() != icdvCanisterID.toString()){
      let pubkey = await window.ic.plug.requestConnect({
        // whitelist, host, and onConnectionUpdate need to be defined or imported appropriately
        whitelist: [icdvCanisterID, icpCanisterID, subsCanisterID, selectedToken.toString()],
        host: "https://ic0.app",
      });
    };
   
    setLoading(true);
    try {


      let ICRC2Actor = await window.ic.plug.createActor({
        canisterId: selectedToken,
        interfaceFactory: icdvFactory,
      });

      const approvalResult  = await ICRC2Actor.icrc2_approve({
        amount: allowanceAmount,
        // Adjust with your canister ID and parameters
        spender: {
          owner: await Principal.fromText(subsCanisterID),
          subaccount: [],
        },
        memo: [],
        fee: getTokenFee(selectedToken),
        created_at_time: [],
        expires_at: [],
        expected_allowance: [],
        from_subaccount: [],
      });

      if ("Ok" in approvalResult) {
        alert("Your ICP has been authorized for subscription. Please click ok and wait for the subscription to be completed complete. A message box should appear after a few seconds.");
        let result = await subsActor?.icrc79_subscribe([
          [
            {interval : {Monthly: null}},
            {amountPerInterval: amountInE8s},
            {tokenCanister: selectedToken},
            {productId: BigInt(stringToNumberHash(selectedToken.toString()))},
            {serviceCanister: Principal.fromText("agtsn-xyaaa-aaaag-ak3kq-cai")}, //send to the ICDV canister
            {targetAccount: {owner : Principal.fromText("ifoh3-ksock-kdg2i-274hs-z3x7e-irgfv-eyqzv-esrlt-2qywt-jbocu-gae"),subaccount: []}},
          ]
        ]);

        if(result && result.length > 0 && result[0][0] && "Ok" in result[0][0]){
          alert("Subscription successful! SubscriptionID: " + (result[0][0].Ok.subscriptionId as bigint).toString() + ".");
        } else if (result && result.length > 0 && result[0][0] && "Err" in result[0][0]) {  
          console.log("error", result[0][0].Err);
          alert("Subscription failed! " + JSON.stringify(result[0][0].Err));
        } else {
          alert("Subscription failed! Unknown error.");
        };
        fetchSubs();
        fetchBalances();
      } else {
        console.log("error", approvalResult);
        alert("Subscribe failed." + JSON.stringify(approvalResult));
      }
    } catch (error) {
      console.error('Subscribe failed:', error);
      alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleUnSubscribe = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Assuming subsActor is your subscription actor
    if (!subsActor) return;
  
    setLoading(true);
    try {
      const subscriptionId = (event.target as HTMLButtonElement).value;
      const result = await subsActor.icrc79_cancel_subscription([{subscriptionId: BigInt(subscriptionId), reason: "User unsubscribed"}]);
      if (result && result.length == 1 && result[0] && result[0].length == 1 && "Ok" in result[0][0]) {
        alert("Subscription canceled successfully.");
        fetchSubs();
      } else {
        alert("Failed to cancel subscription.");
      }
    } catch (error) {
      console.error('Unsubscribing failed:', error);
      alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const getTokenSymbol = (tokenCanister: Principal) => {
    const token = subsTokens.find(token => token.tokenCanister.toString() === tokenCanister.toString());
    return token ? token.tokenSymbol : "";
  };

  const getTokenDecimals = (tokenCanister: Principal) => {
    const token = subsTokens.find(token => token.tokenCanister.toString() === tokenCanister.toString());
    return token ? token.tokenDecimals : 8;
  };

  const getTokenFee = (tokenCanister: Principal) => {
    const token = subsTokens.find(token => token.tokenCanister.toString() === tokenCanister.toString());
    return token ? token.tokenFee : [100000000n];
  };

  const getSubscriptionTokenCanister = (subscriptionId: bigint) => {
    const subscription = subs.find(sub => sub.subscriptionId === subscriptionId);
    return subscription ? subscription.tokenCanister : Principal.fromText("aaaaa-aa");
  };

  const [selectedToken, setSelectedToken] = useState<Principal | null>(null);

  const handleTokenChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTokenCanister = event.target.value;
    setSelectedToken(Principal.fromText(selectedTokenCanister));
  };

  function parseSubStatus(subStatus: SubStatus): string {
    if (subStatus.hasOwnProperty("Active")) {
      return "Active";
    } else if (subStatus.hasOwnProperty("Cancelled")) {
      return "Cancelled";
    } else if (subStatus.hasOwnProperty("Paused")) {
      return "Paused";
    } else if (subStatus.hasOwnProperty("WillCancel")) {
      return "WillCancel";
    }else {
      return "Unknown";
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
          <div className="card">
            <h2>Subscribe to ICDevs.org</h2>
            <span>Pick a Token</span>
            <select value={selectedToken?.toString() || ""} onChange={handleTokenChange}>
              <option value="">Select a token</option>
              {subsTokens
                .sort((a, b) => a.tokenSymbol.localeCompare(b.tokenSymbol))
                .map((token) => (
                  <option key={token.tokenCanister.toString()} value={token.tokenCanister.toString()}>
                    {token.tokenSymbol}
                  </option>
                ))}
            </select>
            <button onClick={handleSubscribe} disabled={loading}>
              {"Click here to donate monthly to ICDevs.org"}
            </button>
          </div>
          {subs.length > 0 ? (
            // iterate through the subscriptions and list the details
            <div>
              <h2>Your Subscriptions</h2>
              <ul>
              {subs.map((sub) => (
                <li key={sub.subscriptionId.toString()}>
                <p>Subscription ID: {sub.subscriptionId.toString()}</p>
                <p>Token: {getTokenSymbol(sub.tokenCanister)}</p>
                <p>Amount: {bigintToFloatString(sub.amountPerInterval, getTokenDecimals(sub.tokenCanister))}</p>
                <p>Interval: Monthly</p>
                <p>End: {sub.endDate && sub.endDate.length > 0 && sub.endDate[0]  ? new Date(Number(sub.endDate) / 1000000).toLocaleString() : "No end date"}</p>
                {sub.status.hasOwnProperty("Active") ? (
                  <button value={sub.subscriptionId.toString()} onClick={handleUnSubscribe}>Cancel Subscription</button>
                ) : (
                  <p>Status: {parseSubStatus(sub.status)}</p>
                )}
                </li>
              ))}
              </ul>
            </div>
            ) : (
            <div>
              <p>No subscriptions for {yourPrincipal}</p>
            </div>
            )}
            {subsPayments.length > 0 ? (
            // iterate through the payments and list the details
            <div>
              <h2>Past Payments - Thank you!</h2>
              <ul>
                {subsPayments.map((payment) => (
                  <li key={payment.paymentId.toString()}>
                    <p>Subscription ID: {payment.subscriptionId.toString()}</p>
                    <p>Token: {getTokenSymbol(getSubscriptionTokenCanister(payment.subscriptionId))}</p>
                    <p>Donation: {bigintToFloatString(payment.amount + (payment.fee && payment.fee[0] ? payment.fee[0] : 0n) + (payment.brokerFee && payment.brokerFee[0] ? payment.brokerFee[0] : 0n), getTokenDecimals(getSubscriptionTokenCanister(payment.subscriptionId)))}</p>
                    <p>Payment Date: {payment.date ? new Date(Number(payment.date) / 1000000).toLocaleString() : "No payment date"}</p>
                    <p>Ledger Transaction IDs: {payment.ledgerTransactionId ? payment.ledgerTransactionId[0]?.toString() + "," : "-,"}{payment.feeTransactionId ? payment.feeTransactionId[0]?.toString() + "," : "-,"}{payment.brokerTransactionId ? payment.brokerTransactionId[0]?.toString() : "-"}</p>
                    <p>Ledger: {getSubscriptionTokenCanister(payment.subscriptionId).toString()}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <p>No payments for {yourPrincipal}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
