---
layout: post
title:  "Bounty - ICDevs.org Generic DAO - Axon Fork"
date:   2021-11-01 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Add generic dao functions and interface to Axon - #2

## Current Status: Discussion

* **Discussion** (11/02/2021) <- We are here
* Ratification
* Open for application
* Assigned
* In Review
* Closed

[Issue Link - Discussion Forum](https://forum.dfinity.org/t/icdevs-org-bounty-1-basic-tutorial-and-site/8136/2)

## Bounty Details

* Current Bounty Amount: 10 ICP
* ICDevs.org Match Available: 10 ICP - (For every ICP sent to fca3c36aad1afdb8482670b4e644b73696155f18e02d12150ba997a628487abe, ICDevs.org will add one more ICP to the bounty, up to 10 ICP, After 10 ICP, Donations to the above address will add .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives)
* Time Left: Expires 12/31/2022
* Project Type: Single Contributor
* Opened: 11/01/2021
* Time Commitment: Days
* Project Type: Traditional
* Experience Type: Intermediate - Motoko; Intermediate - Web Dev
* Issue Type: Application Development

## Description

This bounty gives the opportunity to

* learn how motoko works
* learn how the nns works
* learn about DAOs and how governance works.
* learn about building IC applications with next.js

ICDevs needs some DAO like features for our Developer Advisory Board and Developer Advisors to interact and lead the funding of ICDevs projects.

We want to use [axon](https://github.com/FloorLamp/axon) for "motion" votes, but currently the application submits those to the NNS for everyone to vote on.  This, and a couple more features will need to be added to satisfy this bounty.

To claim this bounty you will need to do the following:

* Add the following features to the back end of axon
    * Add an Axon level "manage axon" option that is a "Motion".  If this motion passes or fails, there does not need to be an action taken, it just needs to be recorded as part of the app.  The Motion should have a URL Field and a Text Field.
    * Add an administrator role that can be used to limit the ability to create new axons.(we will be deploying a new instance and only ICDevs will be able to create axons on our server...this is due to cycle issues with the public instance)
    * Add the ability for a proposer to burn a members token.
    * Add "the ability for a proposer to burn a member's token"  as a flag on set policy.
    * Add the ability for transfers  of governance tokens to be restricted.
    * Add "the ability to restrict token transfers" as a flag on set policy.
* Update the axon user interface(a next.js app)
    * Add the new flags to the Manage Neuron dialog
    * Add a burn token button and function that is only available to a proposer
    * Remove the transfer button on the ledger if restricted
    * Add a screen to view a motion
    * update the logo and theme to focus on ICDevs.org powered by Axon
    * add an about link that links to an anchor at the bottom of the page where we can add informational html to the page.


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

The bounty was generously funded by the community. If you would like to turbocharge this bounty you can seed additional donations of ICP to fca3c36aad1afdb8482670b4e644b73696155f18e02d12150ba997a628487abe.  ICDevs will match the bounty 1:1 for the first 10 ICP and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).

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

We are waiting on our first community match.


[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

