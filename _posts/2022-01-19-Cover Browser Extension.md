---
layout: post
title:  "Bounty - ICDevs.org Cover Browser Extension"
date:   2022-01-19 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Cover Browser Extention - #9

## Current Status: Discussion

* Discussion (01/19/2022)
* Ratification (02/10/2022)
* Open for application (02/10/2022)
* Assigned 
* In Review 
* Closed 

[Issue Link - Discussion Forum](https://forum.dfinity.org/t/icdevs-org-bounty-9-cover-browser-plugin/10485)

## Bounty Details

* Bounty Amount: 10 ICP + $2000 USD of ICP at award date - $2000 ICP Match Available
* ICDevs.org DFINITY Bounty Accelerator Grant Match Available: 40 ICP - (For every ICP sent to f2b488b80eb22bf57c1556683efcb51e090b46c181ca28e167e6f095223dfa3e, ICDevs.org will add $50 more ICP at award date to the bounty, up to 40 ICP, After 40 ICP, Donations to the above address will add .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives)
* Project Type: Single Contributor
* Opened: 01/25/2021
* Time Commitment: Days
* Project Type: Traditional
* Experience Type: Intermediate - Web Dev; Intermediate - API Integration
* Issue Type: Web Extension Development

## Description

This bounty gives the opportunity to

* learn how [Cover](https://covercode.ooo/) works
* learn how the dfinity js agent works
* learn how to create an extension that integrates with the IC
* learn how to integrate with [DAB](https://dab.ooo/)

[Cover(Docs)](https://docs.covercode.ooo/) is an open internet service that can be used by developers to verify and prove that a canister's code matches the open source code. Reducing the risk of malicious apps & increasing transparency and trust.

This integration would allow users to install a browser extension that will warn users if the deployed canister code does not match a known-good wasm hash.

Requirements:

The extension will need to identify IC network events, and capture the canister principal for each (see https://github.com/jorgenbuilder/chrome-dfinity-decoder/blob/main/src/devtools/panel/capture.ts#L12 for a starting point on capturing IC network events.) This set of canisters will then be verified against the cover API.

1.  The extension should detect which canisters a site is communicating with.
2.  Each canister should be checked on Cover.
3.  If any issues are found, an alert should be shown indicating the agent is configured to communicate with an unknown wasm hash. 

The status of each canister should be "Good to Go(Match)" - Green, "Warning(Unknown Canister)" - Yellow, "Exception(Hash doesn't match) - Red.  If the extention api allows for the changing of the color of the extension icon it would be nice to change that color. The alert should have a configurable sound warning that triggers if a RED is detected.  

When the icon is clicked a box should show a list of canisters and their warning level as well as any info that can be retrieved from Cover and [DAB](https://docs.dab.ooo/canister-list/getting-started/) if info is not available from cover.

To claim the award you must produce a web extension and submit it to the google web store that delivers the above functionality.

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

The bounty was generously funded by the ICDevs community and a DFINITY Foundation Accelerator of 40 more ICP. If you would like to turbocharge this bounty you can seed additional donations of ICP to f2b488b80eb22bf57c1556683efcb51e090b46c181ca28e167e6f095223dfa3e.  ICDevs will match the bounty 2:1 for the first 20 ICP out of the DFINITY grant and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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

DFINITY Accelerator Grant: - $2000 ICP at award date


[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

