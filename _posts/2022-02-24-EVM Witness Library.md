---
layout: post
title:  "Bounty - ICDevs.org EVM Witness Library"
date:   2022-02-24 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# EVM Witness Library - #16

## Current Status: Discussion

* Discussion (02/24/2022)
* Ratification 
* Open for application
* Assigned 
* In Review 
* Closed 

[Forum Link - Discussion](https://forum.dfinity.org/t/icdevs-org-bounty-16-evm-witness-library-8-000)

## Bounty Details

* Bounty Amount: $8,000 USD of ICP at award date - $2000 USD of ICP Match Available
* ICDevs.org DFINITY Foundation Grant Match Available: $2000 USD of ICP at award time - (For every ICP sent to 7e80ab2726e15ae1818cdce7a1e09c1523f1cfec09a12871ec40ef6f7e5c4563, ICDevs.org will add $125 USD of ICP at award date to the bounty, up to the first 8 ICP donated, After 8 ICP, donations to the above address will add .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives)
* Project Type: Team
* Opened: 02/24/2021
* Time Commitment: Weeks
* Project Type: Library
* Experience Type: Intermediate - Motoko; Advanced - EVM/Ethereum
* Issue Type: Motoko Library

## Description

This bounty gives the opportunity to

* learn how the EVM, and EVM works.
* learn about cryptographic libraries
* learn about Merkle trees and witnesses
* learn about RLP encoding

The goal of this bounty is to create a set of motoko libraries that can be used to validate Ethereum/evm transactions, storage variables in etheEthereumrum/evm contracts, and Ethereum/evm events.

The developer must create a set of motoko functions that prove transactions, storage, and state data are part of an Evm blockchain given a particular root. 

Transactions proofs - takes an Evm root and a transaction witness and will return a Boolean true/false as to if the transaction is a part of the data set.

State proof - take a state root and a state witness that proves the state of an address(nonce, balance, code hash, storage hash and returns true if the state is part of the dataset.

Storage proof - take a storage witness and a storage hash and return true if that data is a part of the dataset.

Transaction receipt proof - create a function that takes an event/log proof and confirms that event/log is part of the data set.

Data in a storage root is RLP encoded so you will need to create or use a motoko RLP encoding library to decide the value of the witness.

Storage keys are stored as a keccak hash of the variable name so you will need to develop or use a motoko library that performs that hash.

Receipt proofs contain a bloom filter and you will need to create/use a motoko library that processes those.

[https://medium.com/hackernoon/getting-deep-into-ethereum-how-data-is-stored-in-ethereum-e3f669d96033](https://medium.com/hackernoon/getting-deep-into-ethereum-how-data-is-stored-in-ethereum-e3f669d96033)

[https://ethereum.stackexchange.com/questions/5888/relationship-between-transaction-trie-and-receipts-trie](https://ethereum.stackexchange.com/questions/5888/relationship-between-transaction-trie-and-receipts-trie)

The package should be deployed as a vessel package.


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

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to 7e80ab2726e15ae1818cdce7a1e09c1523f1cfec09a12871ec40ef6f7e5c4563.  ICDevs will match the bounty 5:1 for the first 40 ICP out of the DFINITY grant and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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

DFINITY Foundation Grant: - $8000 USD of ICP at award date


[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

