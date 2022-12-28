---
layout: post
title:  "Bounty - Merkle Patricia Tree Motoko"
date:   2023-02-01 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Merkle Patricia Tree - Motoko - #31

## Current Status: Discussion

* Discussion (02/01/2023)
* Ratification 
* Open for application
* Assigned 
* In Review 
* Closed 

[Forum Link - Discussion]()

## Bounty Details

* Bounty Amount: $3,000 USD of ICP at award date - $3,000 USD of ICP Match Available
* ICDevs.org DFINITY Foundation Grant Match Available: $3,000 USD of ICP at award time - (For every ICP sent to 596b5cdecdae9a8ba967d3bdc448d829f353c40c40a284b5f51a6ca283249e02, ICDevs.org will add $40 USD of ICP at award date to the bounty, up to the first 75 ICP donated, After 75 ICP, donations to the above address will add .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives)
* Project Type: Team
* Opened: 02/01/2023
* Time Commitment: Weeks
* Project Type: Library
* Experience Type: Intermediate - Rust;

## Description

As we make progress to further integrating EVM based blockchains with motoko, we need more EVM based tools.  While Bounty #29 seeks a short term solution, this bounty seeks to implement the fundamental libraries needed to build and verify transactions and data on motoko canisters without having make an async call to a utility canister.

To execute this bounty you need to implement the creation, encoding, and decoding of EVM based transactions in Motoko. This work has been replicated in RUST at https://github.com/nikolas-con/ic-evm-sign and you should generally follow the candid structures used in this project and replicate the functionality in motoko. The library should be set up to work with vessel and MOPS.

The library should support multiple network ids and transaction types like Legacy, EIP1559, EIP2930.

Completing this bounty will give the developer the chance to tackle [Bounty 27a - No Key Wallet Motoko](/bounties/2022/09/14/NoKey-Wallet-Motoko.html) which will finalize the functionality and use t-ecdsa to sign and manage these transactions.

This bounty gives the opportunity to:

* learn motoko
* learn about evms and Merkle Patricia Trees
* learn about witnesses

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

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to 6e8afebab59f703356e189297e3f49fbe18ace5150ccc43f74f30ceb3f6b5ece.  ICDevs will match the bounty $40:1 ICP for the first 125 ICP out of the DFINITY grant and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


## FYI: General Bounty Process

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

DFINITY Foundation Grant: - $2000 USD of ICP at award date


[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

