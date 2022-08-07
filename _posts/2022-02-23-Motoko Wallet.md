---
layout: post
title:  "Bounty - ICDevs.org Motoko Wallet"
date:   2022-02-23 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Motoko Wallet - #15

## Current Status: Discussion

* Discussion (02/23/2022)
* Ratification 
* Open for application
* Assigned 
* In Review 
* Closed 

[Forum Link - Discussion](https://forum.dfinity.org/t/icdevs-org-bounty-15-motoko-wallet-5-000/11282)

## Bounty Details

* Bounty Amount: $5,000 USD of ICP at award date - $5000 USD of ICP Match Available
* ICDevs.org DFINITY Foundation Grant Match Available: $5000 USD of ICP at award time - (For every ICP sent to 29a3cf0c087e14a17c44770cb4ed01cc6d70e394f685ada03ea74a30835a70e8, ICDevs.org will add $125 USD of ICP at award date to the bounty, up to the first 40 ICP donated, After 40 ICP, donations to the above address will add .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives)
* Project Type: Single Contributor
* Opened: 02/20/2022
* Time Commitment: Weeks
* Project Type: Library
* Experience Type: Intermediate - Motoko
* Issue Type: Motoko Library

## Description

This bounty gives the opportunity to

* learn how candid works
* learn about the security model of the IC
* learn about token standards
* learn about the cycle model
* learn about the agent-js library used to connect the web to the IC

The goal of this bounty is to create an on-chain wallet written in Motoko.

The [call_raw](https://smartcontracts.org/docs/base-libraries/ExperimentalInternetComputer.html) function is being added to motoko in DFX 0.9.1. You can try it out now by downloading 0.9.1-beta.0.  See [instructions](https://forum.dfinity.org/t/how-to-upgrade-dfx-to-version-other-than-latest-via-the-cli/10719/2) on installing a specific version.  This functionality allows the creation of on-chain wallets written in Motoko.  With call_raw your wallet users will be able to call remote canisters from their wallet without the wallet having to upgrade your wallet with the known types of new services.

The wallet the developer will create will be both a ready-to-deploy wallet and a template for others to use to create custom wallets with unique properties and signature schemes.

## Definitions

Wallet - a wallet can hold assets on the Internet Computer. In our case our wallet is itself a canister.  It can hold tokens, NFTs, and other assets.  It can also make function calls on behalf of the user.

Multi-sig - sometimes you want more than one person to sign for a transaction.  n-of-m means that n number of valid signatures out of m are required to have the wallet call a function on another canister or transfer assets.

Proposal - when a function is "in flight" and waiting for enough signatures it is a proposal.

Allow-List - a wallet needs to put canisters that are valid for the wallet to interact with on a list.  If the canister is not on this list then the wallet will not call the function.

## Wallet API

```
    // request the cycle balance of the canister
    // must be an owner of the canister
    query cycle_balance() -> async Nat;

    // returns the default account for the wallet that can be used with some ledger based tokens
    query default_account() -> async Text;

    // returns a list of tokens that have been added to the wallet
    // the wallet should natively know how to handle EXT, DIP20, and Ledger(ICP) based tokens
    query token_list() -> async [{principal: principal; standard: Text; symbol: Text}];

    // returns a list of NFT canisters that have been added to the wallet
    query nft_list() -> [{principal: Principal; standard: Text, collection: Text}];

    // returns a list of allowed functions for the wallet
    query allow_list() -> [{principal: Principal; function: Text, service: Text}];

    // returns a list of functions that were called by the wallet
    query function_log(page: Nat; skip: Nat, count: Nat);

    //keeps a running list of config changes
    query config_log(page: Nat; skip: Nat, count: Nat);

    //returns proposals in reverse order
    query proposals(page: Nat; skip: Nat, count: Nat) -> [{proposal: Nat; proposalResult: ProposalStatus; principal: Principal; function: Text; data: Blob, timestamp: Nat;}];

    //returns config proposals in reverse order
    query config_proposals(page: Nat; skip: Nat, count: Nat) -> [{proposal: Nat; proposalResult: ProposalStatus; command: ConfigureWalletCommand; timestamp: Nat;}];

    //can be called by an owner or signer to change the way the wallet behaves.  If the wallet is in multi-sig mode a proposal will be created.
    configure_wallet(command: ConfigureWalletCommand) -> Result<ConfigureWalletResponse, Error>;

    //calls the function and either executes the function or creates a proposal to execute the function;
    call(principal: Principal, function: Text, data: Blob) -> async CallResult;

    // signs an open proposal.  Must be called by a signer
    sign_propsal(proposal: Nat, {#sign; #reject}) -> Result<ProposalStatus, Error>;

    // signs config proposals, Must be called by a signer
    sign_config_proposal(proposal: Nat, {#sign; #reject}) -> Result<ProposalStatus, Error>;

    // receives cycles
    // should be logged to the token transaction log
    wallet_receive() : async () 

    type CallResult: {
        #reply: Blob;
        #proposal: Nat; //sha256 of ["wallet_proposal"] + [Principal of self] + ["nonce"] + [stable Nonce]
    };

    type ConfigureWalletCommand = {
        #addToken: {
            principal: principal; 
            standard: Text, 
            symbol: Text};
        #removeToken: Principal;
        #addNNSNeuron: NeuronIdOrSubaccount = variant {
            Subaccount : vec nat8;
            NeuronId : NeuronId;
            };
        #removeNNSNeuron: NeuronIdOrSubaccount = variant {
            Subaccount : vec nat8;
            NeuronId : NeuronId;
        };
         #addSNSNeuron: NeuronIdOrSubaccount = variant {
            Subaccount : vec nat8;
            NeuronId : NeuronId;
            };
        #removeSNSNeuron: NeuronIdOrSubaccount = variant {
            Subaccount : vec nat8;
            NeuronId : NeuronId;
        };
        #addNFT: {
            principal: Principal; 
            standard: Text, 
            collection: Text};
        #removeNFT: Principal;
        #addAllow: { [
            principal: Principal; 
            function: Text, 
            service: Text}; //candid
        ]};
        #removeAllow: {
            [
            principal: Principal;
            function: Text; ]
        }
        #setDebug: Bool;
        #purgeDebug;
        #purgeFunctionLog;
        #purgeConfigLog;
        #sendCycles: {
            principal: Principal;
            amount: Nat;
        }
        #setMultiSig: {
            #owner: [Principal];
            #multisig: {
                owner: ?[Principal]; //null sets the owner to self so that only a proposal can change the participants
                n: Nat; //number of signatures needed
                m: [[Principal];
                private: Bool; //if private is true, do not return who voted for what.
            };
            #remote: {
                owner: ?[Principal]; //null sets the owner to self so that only a proposal can change the participants
                principal: Principal; //calls actor.proposal_status(Nat) -> async Result<{ProposalStatus}> and actor.sign_proposal(caller: Principal, proposal: Nat) -> aync Result<{ProposalStatus} for signatures
            };
            #local: {
                owner: ?[Principal]; //null sets the owner to self so that only a proposal can change the participants
                principal: Principal; //calls self.proposal_status(Nat) -> async Result<{ProposalStatus}> for status and self.sign_proposal(caller: Principal) -> aync Result<{ProposalStatus} for signatures
            };

        }
    };

    type ProposalStatus {
        status: {
            #pass; 
            #open; 
            #reject; 
            #error: Error
        };
        votes: ?{
            accept: [Principal];
            reject: [Principal];
            outstanding: ?[[Principal]]
        }
    }




```

## Wallet UI

The wallet will need to use the http_request function to return a web application that exposes the following information and functions.

We suggest constructing wireframes and submitting them for public content before building the interfaces.  You may consider enlisting the help of a designer as well.  Design is not a priority for this bounty, but an unusable interface will not be accepted.  The interface should use a minimalist responsive template and look and operate on both a desktop and mobile.

* Balance of Cycles in the Canister
    * query cycle_balance();
* Balance of ICP in the Canister
    * query the ICP ledger canister directly for the default sub account of the wallet principal
* Add tokens by supplying a principal and token standard
    * Support DIP20, EXT, Ledger
    * obtain registered tokens using query token_list
    * allow for the sending of tokens
        * this interface should be loadable via querystring so that applications open it in a pop up/tab for payment sending.
        * keep a history of transactions initiated via the wallet interface
* Add NFTs by supplying a principal and NFT standard
    * Support DIP721, EXT
    * obtain registered nfts using query nft_list()
    * allow for the transfer of nfts
    * this interface should be loadable via querystring so that applications open it in a pop up/tab for payment sending.
    * keep a history of transactions initiated via the wallet interface
* Add NNS Neurons to a list to be managed.  The wallet will need to be added as a hotkey for those neurons
    * Interface to issue hotkey enabled neuron functions.
* Add SNS Neurons to a list to be managed.  The wallet will need to be added as a hotkey for those neurons
    * Interface to issue hotkey enabled sns neuron functions.
* Add canisters/function name pairs to a allow list.
    * This interface should be loadable via the query string so that remote applications can open a pop up window/tab requesting to allow the application.
    * keep a history of transactions initiated via the wallet interface -> canister, function, timestamp, parameters and results should only be saved if the wallet is in 'debug' mode.
* ability to purge the params and returns of the function transaction log
* ability to purge the entire token, NFT, or function transaction log.
* a canister in debug mode should only keep 1 GB of debug logs. once the size limit is hit it should run a clean up function and remove the oldest 10% of the log.
* ability to put the canister in debug mode
* UI form manually loading a DID File, pointing at a canister, and running a function as the wallet canister. You may be able to use [candid-ui](https://github.com/dfinity/candid/tree/master/tools/ui)
* List of open proposals
    * ability to sign/reject an open proposal
* Ability to log in with Plug, II, and StoicWallet
* Ability to add a principal to the owner list in owner mode.
* Ability to start a proposal to modify the principal list in multi-sig mode;

## Proposals

* Proposals should auto execute once a pass is found.
* Errors should be captured and reported.
* Changes in signing members should not change the signers for existing proposals

## Agent Js

You will need to find a way to use [agent-js](https://github.com/dfinity/agent-js) to take a candid input and return the binary representation of the input parameters of a call and return it to the web app so that it can pass it to wallet.call(function_name: Text, params: Blob).  Further, when you have the results you will need to use agent-js to decode the binary encoded result.

Bonus:  Use DAB to load in known service names.


## To apply for this bounty you should:

* Include links to previous work writing tutorials and any other open-source contributions(ie. your github).
* Include a brief overview of how you will complete the task. This can include things like which dependencies you will use, how you will make it self-contained, the sacrifices you would have to make to achieve that, or how you will make it simple. Anything that can convince us you are taking a thoughtful and expert approach to this design.
* Give an estimated timeline on completing the task.
* Post your application text to the Bounty Thread

## Selection Process

The ICDevs.org developer's advisors will propose a vote to award the bounty and the Developer Advisors will vote.

## Bounty Completion

Please keep your ongoing code in a public repository(fork or branch is ok). Please provide regular (at least weekly) updates.  Code commits count as updates if you link to your branch/fork from the bounty thread.  We just need to be able to see that you are making progress.

The balance of the bounty will be paid out at completion.

Once you have finished, please alert the dev forum thread that you have completed work and where we can find that work.  We will review and award the bounty reward if the terms have been met.  If there is any coordination work(like a pull request) or additional documentation needed we will inform you of what is needed before we can award the reward.

## Bounty Abandonment and Re-awarding

If you cease work on the bounty for a prolonged(at the Developer Advisory Board's discretion) or if the quality of work degrades to the point that we think someone else should be working on the bounty we may re-award it.  We will be transparent about this and try to work with you to push through and complete the project, but sometimes, it may be necessary to move on or to augment your contribution with another resource which would result in a split bounty.

## Funding

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to 29a3cf0c087e14a17c44770cb4ed01cc6d70e394f685ada03ea74a30835a70e8.  ICDevs will match the bounty 5:1 for the first 40 ICP out of the DFINITY grant and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


## General Bounty Process

### Discussion

The draft bounty is posted to the DFINITY developer's forum for discussion

### Ratification

The developer advisor's board will propose a bounty be ratified and a vote will take place to ratify the bounty.  Until a bounty is ratified by the Dev it hasn't been officially adopted. Please take this into consideration if you are considering starting early.

### Open for application

Developers can submit applications to the Dev Forum post.  The council will consider these as they come in and propose a vote to award the bounty to one of the applicants.  If you would like to apply anonymously you can send an email to austin at icdevs dot org or sending a PM on the dev forum.

### Assigned

A developer is currently working on this bounty, you are free to contribute, but any splitting of the award will need to be discussed with the currently assigned developer.

### In Review

The Dev Council is reviewing the submission

### Awarded

The award has been given and the bounty is closed.

# Matches

DFINITY Foundation Grant: - $5000 USD of ICP at award date


[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

