---
layout: post
title:  "Bounty - ICDevs.org Bitcoin on the IC Reference Implementation"
date:   2022-02-26 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Bitcoin on the IC Reference Implementation - #18

## Current Status: Discussion

* Discussion (02/26/2022)
* Ratification 
* Open for application
* Assigned 
* In Review 
* Closed 

[Forum Link - Discussion]()

## Bounty Details

* Bounty Amount: $10,000 USD of ICP at award date 
* ICDevs.org DFINITY Foundation Grant Match Available: $10000 USD of ICP at award time. If you would like to accelerate this bounty, donations to 76aeadf2a9cfa62c3b8543360f18d90cff46e03e39afaf8d9604d3f2c46ec069 will add .75 ICP to this issue and .25 ICP to fund other ICDevs.org initiatives.
* Project Type: Team
* Opened: 02/26/2021
* Time Commitment: Weeks
* Project Type: Library
* Experience Type: Intermediate - Motoko; Advanced - EVM/Ethereum
* Issue Type: Motoko Library

## Description

This bounty gives the opportunity to

* learn motoko
* learn how Bitcoin works.
* learn about cryptographic libraries
* learn about utxo models(how bitcoin stores tokens)
* experiment with DAOs
* agitate bitcoin maximalists

## NOTE: This is supposed to be a fun bounty to help us all learn the internet computer and maybe experiment with DAOs.  It is not an attempt to create significant value and you should be skeptical of anyone promising significant rewards beyond education.  If this turns into something cooler then we will readdress it in the future.

### Implement the Bitcoin Blockchain on the internet computer.

Bitcoin uses a utxo model. You will build the utxo model, including the opcodes, specified in the Bitcoin spec: https://en.bitcoin.it/wiki/Protocol_documentation

The utxos are unlocked via a signed script and new outputs are specified in the transaction.

Your canister should be scalable. You will be required to come up with a scaling solution, present the positives and negatives to the development advisory board, and to implement the solution.

The following library may have some functions that are helpful in constructing the system:  https://github.com/timohanke/motoko-bitcoin

You will need to analyze the Bitcoin blockchain and propose a set of functions for the canister that will support the functioning of the system as intended.


### Two modes: 

#### External transaction mode

Transactions are tracked and verified via an external protocol and blocks are only submitted by hash solvers when they solve the hash. Block submitters are rewarded as they are today in Bitcoin. Longest chain wins. Chains are pruned when they fall 100 blocks behind. Rewards are split equally between verifiers and random draw from $icBTCDAO token holders. 1% of block rewards and transaction fees go to the icBTC DAO general fund.

#### Implicit transaction mode:

Each set of transactions is verified by the chain and added as a single block at a regular time interval. Since there is no hash to solve there is no block reward. Transactions are sorted by transaction fee and a set number of transactions are processed at each block. Verification of transactions is done on chain. Transaction fees are distributed are regular intervals(10mins) to the icBTC DAO.

### Forks:

Once the system is tested and ready to deploy you will create two canisters, one for each chain mode, load in the existing BTC state, and "fork" the bitcoin network.  One chain will be for dBTC (dirty BTC because it still used PoW) and one cBTC(clean - uses IC PoS).

Both forks should use the upcoming native BTC integration to stay abreast of actual transactions and do their best to keep up with the current chain.  Eventually, the chains will diverge and invalid transactions should be dropped.

For both chains, the tokens held in Satoshi's accounts(You will need to investigate the Patoshi pattern to find these [see here](https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/)) should be repurposed to be owned by the icBTC DAO.  This DAO will receive Satoshi's funds and future transaction fees on cBTC and part of the block rewards on dBTC to fund the development of the ecosystem and to continue to improve the code.  Funds may also be used to fund cycles for the system canisters. (Please keep in mind that this is a reference implementation and unlikely to ever be worth any kind of real value. This is an experiment.  And if satoshi sends ICDevs a [donation](https://icdevs.org/donations.html) from a mainnet patoshi UTXO we'll be happy to leave them where they are!)

### icBTC DAO

This DAO should be a functional dao that takes votes to distribute the distributions and treasury of the DAO to advance the platform. Additional tokens should be distributed to users when they contribute cycles to a dBTC or cBTC canister.  The dev should work with the developers of the "A Dao for Cycles" bounty to construct management of the dao.  The DAO should mint tokens for ICDevs.org according to the following schedule(est. ~14 years...we will use the funds...if there is ever any value...to fund IC Development around the BTC integration):

* 1:0.75 Until the BTC Reward is Halved to 3.125 BTC per block
* 1:0.5 Until the BTC Reward is Halved to 1.5625 BTC per block
* 1:0.25 Until the BTC Reward is Halved to 0.78125 BTC per block
* 1:0.125 Until the BTC Reward is Halved to 0.390625 BTC per block
* 1:0 after the BTC Reward is Halved to 0.1953125 BTC per block

### An environmental note:

We'd love to get rid of POW.  The point of doing both dBTC and cBTC is to show that the BTC model runs on the IC with 'good enough' security guarantees that even if you just really love the BTC model, we don't need POW any more.

This bounty is part of a series of bounties to try to prove the conjecture that "All suitably interesting consensus mechanisms can and will be built on or ported to the Internet Computer – while enjoying sufficient security and performance that is equal or superior to other consensus platforms."

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

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to 76aeadf2a9cfa62c3b8543360f18d90cff46e03e39afaf8d9604d3f2c46ec069.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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

The award has be been given and the bounty is closed.

# Matches

DFINITY Foundation Grant: - $10000 USD of ICP at award date


[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

