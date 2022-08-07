---
layout: post
title:  "Bounty - ICDevs.org DAB and Stoic Integration"
date:   2021-12-17 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Integrate DAB with Stoic Wallet - #6

## Current Status: Discussion

* Discussion (12/17/2021)
* Ratification (12/20/2021)
* Open for application (12/20/2021)
* Assigned (12/22/2021)
* In Review
* Closed (12/1/2021)

[Issue Link - Discussion Forum](https://forum.dfinity.org/t/icdevs-org-bounty-integrate-dab-with-stoic-wallet-6-100-icp/9824)

## Bounty Details

* Bounty Amount: 100 ICP
* Project Type: Single Contributor
* Opened: 12/17/2021
* Time Commitment: Days
* Project Type: Traditional
* Experience Type: Intermediate - Web Dev; Intermediate - API Integration
* Issue Type: Application Development

## Description

This bounty gives the opportunity to

* learn how DAB works
* learn how Stoic wallet works
* learn how to cross call different services and standards on the IC


[DAB](https://docs.dab.ooo/nft-list/getting-started) is a service that allows NFT developers to register their canister and type of standard used with a central repository. Once submitted to DAB, a simple interface can be used to retrieve all of a user's NFT, send NFTs, and to get token details.

[Stoic wallet](https://stoicwallet.com) is a popular wallet used to interact with Etrepot and other Toniq labs based applications. The current process for adding new NFTs to Stoic wallet is to submit a pull request at github(https://github.com/Toniq-Labs/stoic-wallet) that specifically handles the NFT canister's NFT implementation or to implement a number of Stoic specific functions into the canister and add the canister manually by principle ID.

This integration would allow the stoic wallet to query DAB for existing collections that are in the registry and display the NFTs without having to submit a pull request or to manually add the canister and hope the get_tokens function is defined.

Requirements:

1.  Have stoic wallet query getAllgetUserTokens in DAB and append those items to the ones that stoic already finds.  Search for duplicates and remove them.
2.  Keep track of if the NFT is in DAB and use DAB's transfer function to call transfer if it is a DAB listed token.
3.  Use DAB's details function to get info and show it when a user clicks on an NFT in stoic wallet and wants to see details.

To claim the award you must produce a pull request for stoic wallet that adds this functionality and is accepted by the Toniq labs team.  Reach out to Bob or Easy Steve if you have any questions.

## Results

https://github.com/Toniq-Labs/stoic-wallet/pull/13

## Funding

The bounty was generously funded by DAB/Psycadelic(40 ICP), Toniq Labs(40 ICP), and a Foundation Match of 20 more ICP. If you would like to turbocharge this bounty you can seed additional donations of ICP to 66083bb3c940c7de2a70aa127ec771da75d60deadc10f5f66b280f203d8f6e73.  ICDevs will match the bounty 1:1 for the first 40 ICP out of the DFINITY grant and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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

DAB - 40 ICP
Toniq Labs - 40 ICP
Foundation Fund: - 20 ICP Direct, 60 ICP General Fund


[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

