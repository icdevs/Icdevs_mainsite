---
layout: post
title:  "Bounty - ICDevs.org Language Server Updates"
date:   2022-02-12 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Motoko Language Server Updates - #11

## Current Status: Freezer

* Discussion (02/11/2022)
* Ratification 
* Open for application
* Assigned 
* In Review 
* Closed 

[Forum Link - Discussion](https://forum.dfinity.org/t/icdevs-org-bounty-11-language-server-updates-3750/10885)

## Bounty Details

* Bounty Amount: $3750 USD of ICP at award date - $2500 USD of ICP Match Available
* ICDevs.org DFINITY Foundation Grant Match Available: $2500 USD of ICP at award time - (For every ICP sent to edaa35657e696ec3ca92fc45edf8f7204139adea348d3f3fa17a26dffce8493b, ICDevs.org will add $125 USD of ICP at award date to the bounty, up to the first 20 ICP donated, After 20 ICP, donations to the above address will add .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives)
* Project Type: Single Contributor
* Opened: 02/10/2022
* Time Commitment: Days
* Project Type: Traditional
* Experience Type: Intermediate - JavaScript; Intermediate - Language Servers
* Issue Type: Language Server

## Description

This bounty gives the opportunity to

* learn how the motoko compiler works - it is oCaml
* learn more javascript
* learn about Language Servers

The goal of this bounty is to augment [the motoko language server](https://github.com/dfinity/motoko/tree/master/src/languageServer) with additional features.  A Language Server is a helpful tool that eases development in Visual Studio Code and other IDEs.

[Language Server Extention Guide](https://code.visualstudio.com/api/language-extensions/language-server-extension-guide)

The following features need to be added to the language server:

* Support for multiple canisters in the same project
* Refactoring Tools
* Go to definition for variables defined in a local module, actor, class, or function
* Show type on variable hover
* Go to imported module definition directly (e.g. Blob instead of Blob.fromArray)
* Type check .mo files that aren’t imported from the canister entry point (e.g. unit tests)

Other interesting links:

https://github.com/dfinity/motoko/tree/master/src/lsp

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

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to edaa35657e696ec3ca92fc45edf8f7204139adea348d3f3fa17a26dffce8493b.  ICDevs will match the bounty 5:1 for the first 20 ICP out of the DFINITY grant and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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

DFINITY Foundation Grant: - $3750 USD of ICP at award date


[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

