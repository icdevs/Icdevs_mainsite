---
layout: post
title:  "Bounty - ICDevs.org A DAO for Cycles"
date:   2022-02-25 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# A DAO for Cycles - #17

## Current Status: Discussion

* Discussion (02/25/2022)
* Ratification 
* Open for application
* Assigned to sardariuss
* In Review 
* Closed (8/15/2022)

[Forum Link - Discussion](https://forum.dfinity.org/t/icdevs-org-bounty-17-a-dao-for-cycles-10-000-ht-cycle-dao/11427)

## Bounty Details

* Bounty Amount: $10,000 USD of ICP at award date - Standard ICP Match Available
* ICDevs.org DFINITY Foundation Grant Match: This grant was accelerated with by [Arthur Falls](https://twitter.com/arthurfalls?lang=en) and the [cycle_dao](https://cycledao.xyz/) for an additional $5,000. For every ICP sent to 596b5cdecdae9a8ba967d3bdc448d829f353c40c40a284b5f51a6ca283249e02 we will add .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives.
* Project Type: Team
* Opened: 02/24/2022
* Closed: 08/15/2022
* Time Commitment: Days
* Project Type: Library
* Experience Type: Beginer - Motoko;
* Issue Type: Motoko Canister

## Description

This bounty gives the opportunity to

* learn about DAOs and how they work
* learn about cycles on the IC
* learn about governance on the IC

The goal of this bounty is to create a DAO that collects cycles for a particular application's canisters and rewards users that supply those cycles with DAO tokens that can be used to manage the DAO.

Functions:

wallet_recieve()-> async () - must be called from a cycle wallet that can pass cycles. Use the experimental_cycles functionality to deposit the cycles and mint new DAOTokens according to the following schedule:

* If the Canister has more than MAX_CYCLES, refund all cycles.
* Consult the CYCLE_EXCHANGE_CONFIG and reward enough cycles to get to MAX_CYCLES and reward with minted tokens according to the menu levls.  If MAX_CYCLES is greater than the highest configuration should use the highest configuration as max_cycles. Default Config:

```
MAX_CYCLES = 150_000_000_000_000;

[
    {min:0; max:2_000_000_000_000; rate_per_T: 1: float;}
    {min:2_000_000_000_000; max:10_000_000_000_000; rate_per_T: 0.8: float;}
    {min:10_000_000_000_000; max:50_000_000_000_000; rate_per_T: 0.4: float;}
    {min:50_000_000_000_000; max:150_000_000_000_000; rate_per_T: 0.2: float;}
]
```

The canister should support calling the DIP20, EXT(Fungible), and Ledger canister standards for the issued DAOToken for fungible tokens and DIP721, EXT(non-fungible), and the nft_origyn standard for NFTs.  The canister should be a minting canister for the DAO token canister and call mint on the DAO token canister passing in the determined value as the token value(fungible) or the meta_data variable if an NFT.

The canister should implement:

configure_dao(command: ConfigureDAOCommand) -> async Nat;

Each command must be submitted to the configured governance canister for approval.  The governance canister should return a Nat that is a unique proposal id.  The governance canister is free to implement any approval or voting scheme that it would like.

```
type ConfigureDAOCommand:{
    #UpdateMaxCycles: Nat;
    #UpdateMintConfig: [ExchangeLevel];
    #DistributeBalance: { //sends any balance of a token/NFT to the provided principal;
        to: Principal
        token_principal: Principal;
        amount: Nat; //1 for NFT
        id: ?{#Text: Text; #Nat: Nat}; //used for nfts
        standard: Text;
    };
    #DistributeCycles; //cycle through the allow list and distributes cycles to bring tokens up to the required balance
    #DistributeRequestedCycles; //cycle through the request list and distributes cycles to bring tokens up to the required balance
    #ConfigureDAOToken: {
        principal: Principal;
    };
    #AddAllowList: {
        principal: Principal;
        min_cycles: Nat;
    };
    #RequestTopUp: { //lets canister pull cycles
        principal: Principal;
    };
    #RemoveAllowList: {
        principal: Principal;
    }
    #ConfigureGovernanceCanister: {
        principal: Principal;
    };
};

type ExchangeLevel {
    min: Nat;
    max: Nat;
    rate_per_T: Float;
};
```

The canister should implement execute_proposal(Nat) -> Result<Bool, Error> that runs a proposal and should only be callable by the governance canister.

As an implementation detail of DistributeCycles, it should likely be wired up via timer function and automatically approved and executed by the governance canister.  The internal logic should keep it from running too often.

The canister should implement query cycle_balance() -> Nat that returns the current number of cycles in the canister.

The inspiration for this kind of generic infrastructure was inspired by Max and the InfinitySwap team that is implementing something similar to support their canisters.


## Funding

The bounty was generously funded by the DFINITY Foundation and cycle_dao. If you would like to turbocharge this bounty you can seed additional donations of ICP to 596b5cdecdae9a8ba967d3bdc448d829f353c40c40a284b5f51a6ca283249e02.  ICDevs will match the bounty 0.25:1.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).

## Awarded

The award has been given and the bounty is closed.

Awarded to sardariuss for [CyclesDAO](https://github.com/sardariuss/CyclesDAO)

[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

