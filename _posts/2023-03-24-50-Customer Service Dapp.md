---
layout: post
title:  "Bounty -  ICDevs.org Customer Service Dapp - Svelte/React"
date:   2023-03-24 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Customer Service Dapp - Svelte/React - #50

## Current Status: Awarded

* Discussion (03/24/2023)
* Ratification: (TBD)
* Open for application: (TBD)
* Assigned (TBD)
* In Review 
* **Closed** https://github.com/dfinity/dfn-components/pull/13 

[Forum Link - Discussion](https://forum.dfinity.org/t/open-icdevs-org-bounty-50/19446)

## Bounty Details

* Bounty Amount: $6,000 USD of ICP at award date.
* ICDevs.org Bounty Acceleration: For each 1 ICP sent to 801581b2c8f3303eaeb91892784b2eac99e1128115b0fadf739576d6c94f3c8e, ICDevs.org will add  .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives.
* Developer Type: Team
* Opened: TBD
* Time Commitment: Days/Weeks
* Project Type: Web Application
* Experience Type: Intermediate - Svelte or React;

## Description

The Customer Service Dapp is a proposed web application that would make it easier for dapps on the Internet Computer (IC) to provide customer service to their users. The dapp will be written in Svelte or React and will allow customer service reps to create links that can be sent to users to call specific functions from their principal, even if the current front end dapp does not expose the function or if the integration is broken.

This is particularly important because when using Internet Identity because users cannot go to ICScan and call the function from the correct principal. The Customer Service Dapp will be a self-contained dapp that is deployable to the asset canister at a non-linked URL. It should look nice and can be customized with dapp branding.

The dapp should act much like Candid UI and should accept query string parameters that can prefill in the canister ID and default values for calling a function. For security reasons, the user may want to add a hard-coded list of canisters and function pairs that are allowed to be called.

You may wish to use existing functionality exposed by Axon and/or Candid UI for data input.

The primary goals of this bounty include:

* Build a web application in Svelte or React that allows customer service reps to create links to call specific functions from their principal.
* Provide a self-contained dapp that is deployable to the asset canister to a non-linked URL.
* Allow customization of the dapp with dapp branding.
* Accept query string parameters that can prefill in the canister ID and default values for calling a function.
* Allow the user to add a hard-coded list of canisters and function pairs that are allowed to be called for security reasons.

You should use this library as the base for your applictaion as it has most of what you will need built in: https://github.com/dfinity/dfn-components/tree/main/packages/candid-ui

This bounty gives the opportunity to

* learn about Candid
* learn about IC Transactions
* learn about Dapp development


## To apply for this bounty you should:

* Include links to previous work building web applications and any other open-source contributions (i.e., your Github).
* Provide a brief overview of how you will complete the task. This can include things like which dependencies you will use, how you will make it self-contained, the sacrifices you would have to make to achieve that, or how you will make it simple. Anything that can convince us you are taking a thoughtful and expert approach to this design.
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

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to 801581b2c8f3303eaeb91892784b2eac99e1128115b0fadf739576d6c94f3c8e.  ICDevs will add .25 for every 1 token donated to the bounty.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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

