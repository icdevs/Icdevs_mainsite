---
layout: post
title:  "Bounty - ICDevs.org PDF Utility Canister - Rust"
date:   2023-01-09 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# PDF Utility Canister - Rust - #37

## Current Status: Discussion

* Discussion (01/09/2023)
* Ratification: (01/09/2023) 
* Open for application: (01/09/2023)
* Assigned (1/19/2021) - fyrex
* In Review 
* Closed 

[Forum Link - Discussion](https://forum.dfinity.org/t/open-icdevs-org-bounty-37-pdf-utility-canister-rust-6-000/17890/3)

## Bounty Details

* Bounty Amount: $6,000 USD of ICP at award date.
* ICDevs.org Bounty Acceleration: For each 1 ICP sent to 860bd56f4c8a9d40f26462e51e2a4dd4e27cf0e1463372a1179df089695bfd63, ICDevs.org will add  .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives.
* Project Type: Team
* Opened: 01/09/2023
* Time Commitment: Weeks
* Project Type: Canister
* Experience Type: Intermediate - Rust;

## Description

The PDF Utility canister will allow other canisters on the IC to generate PDF documents.

Requirements:

1. Use https://github.com/dabega/genpdf-rs to expose PDF generation functionality.
2. Allow a canister to push images/fonts/text blocks into the canister(Must support >2MB files, perhaps implement pipelinify schema - https://github.com/skilesare/pipelinify.mo)
3. Create a candid object notation for describing a PDF using the features supported by genpdf-rs.
4. Ability to references named, pushed files/fonts.
5. Provide performance tests and explanations of the limits of the canister's ability to generate a PDF given cycle limits.
6. If the library requires multiple rounds to generate a reasonable PDF, consider implementing pipelinify with timers to automate the task across multiple rounds.

The canister should be created such that it can be deployed and assigned an allow list of callers.

It should also work as a library for other rust canisters that want to include the functionality as a part of another canister without compile errors.

With this version of a the canister, the user that wants PDF generation should deploy their own Utility canister so that they can manage their own cycles. 

Upon completion of this bounty the developer will be auto qualified to implement any future bounty that may include an attempt to wrap the service as a broader utility complete with its own tokenomincs and potentially and eventual deployment via SNS or other DAO structure.


This bounty gives the opportunity to

* learn about pdf generation
* learn about pipelinify.mo
* learn how Implement a Utility canister on the IC.

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

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to 860bd56f4c8a9d40f26462e51e2a4dd4e27cf0e1463372a1179df089695bfd63.  ICDevs will add .25 for every 1 token donated to the bounty.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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

