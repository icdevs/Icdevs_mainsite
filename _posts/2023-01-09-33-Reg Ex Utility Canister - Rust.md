---
layout: post
title:  "Bounty - Reg Ex Utility Canister - Rust"
date:   2023-01-09 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Reg Ex Utility Canister - Rust - #33

## Current Status: Discussion

* Discussion (01/09/2023)
* Ratification 
* Open for application
* Assigned 
* In Review 
* Closed 

[Forum Link - Discussion]()

## Bounty Details

* Bounty Amount: $4,000 USD of ICP at award date.
* ICDevs.org Bounty Acceleration: For each 1 ICP sent to 6e8afebab59f703356e189297e3f49fbe18ace5150ccc43f74f30ceb3f6b5ece, ICDevs.org will add  .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives.
* Project Type: Individual
* Opened: 01/09/2023
* Time Commitment: Days
* Project Type: Canister
* Experience Type: Intermediate - Rust;

## Description

This rust canister allows motoko canister to query it with data to receive EVM compliant transactions that can be signed via t-ECDSA and submitted to EVM networks.

This bounty gives the opportunity to

* learn rust
* learn about regEx
* learn about intercanister calls and their restrictions

Motoko currently is missing a RegEx library.  Until RegEx is integrated into Motoko, it would be nice to have a utility canister that does most of this work for a motoko canister.  This will involve async communication and may incur long transaction times, but it will at least let motoko devs get started with RegEx based searches while those motoko libraries are being developed.

* Create a proper candid type for passing a single or set of strings and regEx expressions to the utility canister.
* Expose the RegEx crate with public methods as found at https://docs.rs/regex/latest/regex/
* Analyze the Performance features and make a recommendation for the canister.
* Analyze the Unicode options and provide optional parameters to drive the selection at run time if possible.
* Analyze the performance of the library and provide guidance on limits of its use(We expect that with the 2MB cap on inter-canister calls that it will be unlikely to hit cycle limits, but we need you to test and report.)


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

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to 6e8afebab59f703356e189297e3f49fbe18ace5150ccc43f74f30ceb3f6b5ece.  ICDevs will match the bounty $40:1 ICP for the first 50 ICP out of the DFINITY grant and then 0.25:1.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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



[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

