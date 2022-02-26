---
layout: post
title:  "Bounty - ICDevs.org CBOR and Candid Motoko Parser"
date:   2022-02-22 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# CBOR and Candid Motoko Parser - #19

## Current Status: Discussion

* Discussion (02/27/2022)
* Ratification 
* Open for application
* Assigned 
* In Review 
* Closed 

[Forum Link - Discussion]()

## Bounty Details

* Bounty Amount: $3,000 USD of ICP at award date - $3000 USD of ICP Match Available
* ICDevs.org DFINITY Bounty Accelerator Grant Match Available: $3000 USD of ICP at award time - (For every ICP sent to d0e3be904a939ff752979aaa53cfb66fac8d75b85ce4fa878e147d60706be6ed, ICDevs.org will add $125 USD of ICP at award date to the bounty, up to the first 24 ICP donated, After 24 ICP, donations to the above address will add .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives)
* Project Type: Single Contributor
* Opened: 02/20/2021
* Time Commitment: Days
* Project Type: Library
* Experience Type: Intermediate - Motoko
* Issue Type: Motoko Library

## Description

This bounty gives the opportunity to

* learn how CBOR encoding works
* learn how candid works
* learn how call_raw works in motoko

The goal of this bounty is to produce two motoko libraries.

More info about CBOR can be found at:

https://cbor.io/

An example of cbor library can be found at:

https://github.com/hildjj/node-cbor/tree/main/packages/cbor/lib

DFINITY uses CBOR in the agent-js library as well. The implementation can be found at https://github.com/dfinity/agent-js/blob/main/packages/agent/src/cbor.ts

We need a CBOR library in motoko because the new call_raw functionality allows a motoko canister to receive Binary Represented data from a server.  A wallet may want to filter this call and decide if it wants to pass it on to another IC service by data inside the encoded representation.  The cbor plug in will allow a wallet author to inspect the payload and make decisions about the call.

The opposite is also possible, where a wallet may want to be able to construct a payload for call raw using an uploaded candid definition for a service that did not exist when the wallet was minted.

Once CBOR is decoded it needs to be synced with the cadid representation of the service it was encoded for. If you want to be able to tell what property is what in your function call package you need to know the candid that was used to encode the package.  

The Candid parsing logic can be found for the agent-js library at: https://github.com/dfinity/agent-js/blob/main/packages/candid/src/candid-core.ts

These libraries will often be used together to parse and encode binary data.

The developer is welcome to attempt to refactor the Candy Library at https://github.com/aramakme/candy_library to host the candid parser as that was one of the initial intents of that library.

A full set of tests should be implemented.

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

The bounty was generously funded by the DFINITY Foundation Accelerator. If you would like to turbocharge this bounty you can seed additional donations of ICP to d0e3be904a939ff752979aaa53cfb66fac8d75b85ce4fa878e147d60706be6ed.  ICDevs will match the bounty 5:1 for the first 24 ICP out of the DFINITY grant and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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

DFINITY Accelerator Grant: - $3000 USD of ICP at award date


[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

