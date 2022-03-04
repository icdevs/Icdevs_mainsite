---
layout: post
title:  "Bounty - ICDevs.org Basic tutorials and site"
date:   2021-10-25 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Basic tutorials and site - #1

## Current Status: Discussion

* Discussion (10/25/2021)
* Ratification (11/1/2021)
* ** Open for application ** (11/2/2021) <- We are here
* Assigned
* In Review
* Closed

[Issue Link - Discussion Forum](https://forum.dfinity.org/t/icdevs-org-bounty-1-basic-tutorial-and-site/8136/2)

## Bounty Details

* Current Bounty Amount: 20 ICP + $1000 USD of ICP on award date
* ICDevs.org Match Available: 20 ICP - (For every ICP sent to 9f65a13064f16d444af9975ee1bca01eded559d6f753b58a43cfeb8a9617436d, ICDevs.org will add $50 USD of ICP at award date to the bounty, up to 10 ICP, After 10 ICP, Donations to the above address will add .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives)
* Time Left: Expires 12/31/2022
* Project Type: Single Contributor
* Opened: 10/18/2021
* Time Commitment: Days
* Project Type: Traditional
* Experience Type: Beginner
* Issue Type: Education

## Description

This bounty gives the opportunity to

* write some basic IC tutorials
* understand how to deploy a static site on the IC using Fleek
* get to know google codelab
* help onboard thousands of developers onto the IC

ICDevs would like help setting up our tutorials site and seeding it with an initial set of tutorials for developing on the IC.

We will use retype(https://retype.com/) to create a site that will live at https://tutorials.icdevs.org. Retype is a tool that lets you easily author and publish tutorials. Here is a [tutorial on how to build a tutorial using retype](https://tutorials.icdevs.org/contribute/how-to/)

This site will use Austin Griffith's Speed Run Ethereum article as a guide for what we want the first 1.0 version of this site to contain [https://speedrunethereum.com/](https://speedrunethereum.com/). Obviously, at this point, we don't have anything as robust as scaffold.eth to piggyback off of, but hopefully we can use a combination of the motoko playground(https://m7sm4-2iaaa-aaaab-qabra-cai.raw.ic0.app/) and other resources to get people started.

Ultimately this repository will be an open repo where any community member can build a tutorial for something they think is important to communicate to developers trying to level up their IC development skills.

To claim this bounty you will need to complete 5 of the following topics:

* The following tutorials can be selected from, and you should create easy to understand, instructional content
    * Getting to know the motoko playground
    * Primitive Data Types in motoko
    * Understanding Types
    * Understanding null, variants, and the switch statement
    * The basics of Actors and Actor Classes
    * Managing upgrades and the difference between shared and non-shared Types
    * Sending and Receiving Cycles
    * Intercanister communication
    * Creating a simple Token
    * Serving a simple nft from http
    * Decentralized Staking App
    * Token Vendor
    * Multisig Wallet
    * Build a DEX
    * SVG NFTs
    * Oracles

Some of this content may already exist. You are free to reach out to those authors and ask if you can reproduce their content in this repo. Please credit and link to them and the original content if and only if you receive permission.

Finally, the site will need to be deployable via Fleek. See the documentation on their website here:  https://docs.fleek.co/internet-computer-hosting/site-deployment/.  Using code lab you should be able to generate the static html locally and check that into the repo.  We can work with Fleek to figure this out, but ideally fleek won't be needing to run any build scripts and can just deploy the source files.

FAQ:

Will you host rust tutorials - Absolutely. We're starting with motoko, but as soon as the site is up we'd love contributions from rust devs.  With enough demand we'll look at an additional rust bounty, but that will depend on funding.  We will keep funding tutorials as long as we have the resources, but ideally we'd love some passionate programmers with a teacher's soul to start producing these for the good of the community.

Will you give authors credit - Absolutely.  Our goal will be to feature, link to, and drive attention to any authors that contribute to this repository.

Will you ever sell this content - This content will be completely free and open-sourced on github and tutorials.icdevs.org. If we come up with a creative way to fundraise off the back of it in some other medium we may do so, but all proceeds will go straight back into ICDevs.org.

## To apply for this bounty you should:

This bounty is currently assigned to dfinity dev forum user @efe

## Selection Process

The ICDevs.org developer's advisors will propose a vote to award the bounty and the Developer Advisors will vote.

## Bounty Completion

Please keep your ongoing code in a public repository(fork or branch is ok). Please provide regular (at least weekly) updates.  Code commits count as updates if you link to your branch/fork from the bounty thread.  We just need to be able to see that you are making progress.

This bounty can be shared among authors.  The goal is to produce 5 starter tutorials.

The balance will be paid out at completion.

If you are awarded this bounty and would like to hand out the tutorials to other contributors, please communicate your intentions with ICDevs. You will be responsible for assuring quality and signing off on sending payments to other contributors.

Once you have finished, please alert the dev forum thread that you have completed work and where we can find that work.  We will review and award the bounty reward if the terms have been met.  If there is any coordination work(like a pull request) or additional documentation needed we will inform you of what is needed before we can award the reward.

## Bounty Abandonment and Re-awarding

If you cease work on the bounty for a prolonged(at the Developer Advisory Board's discretion) or if the quality of work degrades to the point that we think someone else should be working on the bounty we may re-award it.  We will be transparent about this and try to work with you to push through and complete the project, but sometimes, it may be necessary to move on or to augment your contribution with another resource which would result in a split bounty.

## Funding

The bounty was generously funded by the community. If you would like to turbocharge this bounty you can seed additional donations of ICP to 9f65a13064f16d444af9975ee1bca01eded559d6f753b58a43cfeb8a9617436d.  ICDevs will match the bounty 2:1 for the first 10 ICP and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).

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

$1000 USD worth of ICP at award date - DFINITY Foundation Grant


[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

