---
layout: post
title:  "Bounty - ICDevs.org Signing Tree and DER Encoding - Motoko"
date:   2023-01-09 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Signing Tree and DER Encoding - Motoko - #36

## Current Status: Discussion

* Discussion (01/09/2023)
* Ratification: (01/09/2023) 
* Open for application: (01/09/2023)
* Assigned 
* In Review 
* Closed 

[Forum Link - Discussion](https://forum.dfinity.org/t/open-icdev-org-bounty-36-signing-tree-and-der-encoding-motoko-10-000/17889)

## Bounty Details

* Bounty Amount: $10,000 USD of ICP at award date.
* ICDevs.org Bounty Acceleration: For each 1 ICP sent to 25a63a3dfafde9da5ca73e63b66e6a5912cc61e8cb3581e9df8cd96ca5faa6ab, ICDevs.org will add  .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives.
* Project Type: Individual
* Opened: 01/09/2023
* Time Commitment: Weeks
* Project Type: Library
* Experience Type: Advanced - Motoko; Advanced - Crypto;

## Description

IC Subnets are able to sign a set of data and provide certified variables to applications outside of the IC.  This functionality can also be used have the subnet sign messages and transactions from the IC.

Reference Material:

[Canister signatures available to canisters on all subnets ](https://forum.dfinity.org/t/canister-signatures-available-to-canisters-on-all-subnets/11240)
[Certified Data API](https://smartcontracts.org/docs/base-libraries/certifieddata)
[Haskell example](https://github.com/dfinity/ic-hs/blob/master/src/IC/Crypto/CanisterSig.hs)
[Signature Spec](https://internetcomputer.org/docs/current/references/ic-interface-spec#signatures)
[There was an attempt](https://m7sm4-2iaaa-aaaab-qabra-cai.raw.ic0.app/?tag=2473530532)
[Structure of transactions for signing](https://internetcomputer.org/docs/current/references/ic-interface-spec/#hash-of-map)
[Haskell DER Encoding](https://github.com/dfinity/ic-hs/blob/master/src/IC/Crypto/DER.hs#L45)
[Tree Example](https://gist.github.com/nomeata/f325fcd2a6692df06e38adedf9ca1877)
[Asset Cert Example](https://github.com/nomeata/motoko-certified-http)
[Video walking through some of it](https://www.youtube.com/watch?v=gaVuMaTP2lQ)

This bounty has three parts

1. Produce a DER encoding library and make it compatible with Vessel and MOPS
2. Produce a Merkle Tree library that will integrate well with the Certified Data API. Nometa has an example of a one level tree, but we need one that has many levels and allows the creation and verification of witnesses.
3. Create an example of a canister signing a DER Encoded transaction that can be queried later to find the bytes needed to submit a request to IC.

The developer that completes this bounty will qualify to pursue bounty [23a - Metacalls - Motoko](https://forum.dfinity.org/t/icdevs-org-bounty-23a-metacalls-motoko-up-to-10k/15422)

The following library may be a good starter. https://github.com/icdevs/motoko-merkle-tree. Likely a number of things need to be added such as deleting values from tree.  Please evaluate and update the library if it is missing something.

This bounty gives the opportunity to

* learn about certified data and variables
* learn about DER Encoding
* learn how IC transactions are structured

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

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to 25a63a3dfafde9da5ca73e63b66e6a5912cc61e8cb3581e9df8cd96ca5faa6ab.  ICDevs will add .25 for every 1 token donated to the bounty.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


## FYI: General Bounty Process

### Discussion

The draft bounty is posted to the DFINITY developer's forum for discussion

### Ratification: (01/09/2023)

The developer advisor's board will propose a bounty be ratified and a vote will take place to ratify the bounty.  Until a bounty is ratified by the Dev it hasn't been officially adopted. Please take this into consideration if you are considering starting early.

### Open for application

Developers can submit applications to the Dev Forum post.  The council will consider these as they come in and propose a vote to award the bounty to one of the applicants.  If you would like to apply anonymously you can send an email to austin at icdevs dot org or sending a PM on the dev forum.

### Assigned

A developer is currently working on this bounty, you are free to contribute, but any splitting of the award will need to be discussed with the currently assigned developer.

### In Review

The Dev Council is reviewing the submission

### Awarded

The award has been given and the bounty is closed.



[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

