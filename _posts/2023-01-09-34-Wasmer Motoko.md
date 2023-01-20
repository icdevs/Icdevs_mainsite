---
layout: post
title:  "Bounty - ICDevs.org Wasmer Motoko"
date:   2023-01-09 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Wasmer Motoko - #34

## Current Status: Discussion

* Discussion (01/09/2023)
* Ratification: (01/09/2023) 
* Open for application: (01/09/2023)
* Assigned 
* In Review 
* Closed 

[Forum Link - Discussion](https://forum.dfinity.org/t/open-icdevs-org-bounty-34-wasmer-motoko-10-000/17887/4)

## Bounty Details

* Bounty Amount: $10,000 USD of ICP at award date
* ICDevs.org Bounty Acceleration: For each 1 ICP sent to edaa35657e696ec3ca92fc45edf8f7204139adea348d3f3fa17a26dffce8493b, ICDevs.org will add  .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives.
* Project Type: Team
* Opened: 01/09/2023
* Time Commitment: Weeks
* Project Type: Library
* Experience Type: Advanced - Motoko; Advanced - OCaml

## Description

In order to popularize the motoko programing language we need to enable it to run and perform operations outside of the IC.  The strong typing and async model of programming lend itself nicely to a number of modern computing challenges.

[Wasmer](https://wasmer.io/) is a set of tools that let you load wasm modules into other languages and interact with those modules across a range of environments and operating systems.

This bounty asks the user to create a Hello World motoko application that can be accessed from a number of Operating Systems and asks the developer to create sample projects for those integrations.

Create a simple motoko program that takes a string input - x - and returns "Hello, {x}". It should also have state storage that stores the last message returned.

Call this program from:

- A C# application that runs on windows. Upon clicking a button, the application should take input from the user and then show a windows modal with result of the motoko function. Another button should show the last message created using the the hello world function.
- A Swift application that runs on MacOs. Upon clicking a button, the application should take input from the user and then show a MacOS modal with result of the motoko function. Another button should show the last message created using the the hello world function.  You may need to bridge to a rust implementation as described here: https://rymc.io/blog/2021/cacao-rs-macos-ios-rust/ as a swift wasmer implementation does not exist yet.
- A React-native application that runs on iOS and Android. Upon clicking a button, the application should take input from the user and then show a iOS/android modal with result of the motoko function. Another button should show the last message created using the the hello world function.
- A Dart application that runs on android/iOS. Upon clicking a button, the application should take input from the user and then show a android/iOS modal with result of the motoko function. Another button should show the last message created using the the hello world function.

See https://github.com/wasmerio/wasmer#-language-integrations for available languages and other documentation

This bounty gives the opportunity to

* learn rust
* learn swift
* learn motoko
* learn c#
* learn wasmer
* learn about OS integrations
* learn about the motoko compiler

At this point, we don't expect things like async to work from the motoko wasm. We are looking for basic functionality and the ability to push data into and get data out of motoko libraries.

Completion of this bounty will qualify the dev for future bounties where we look to enable the async programming model inside of a motoko wasm program and the ability of a running motoko wasm module to send events/signals to its running program.

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

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to edaa35657e696ec3ca92fc45edf8f7204139adea348d3f3fa17a26dffce8493b. ICDevs will add .25 for every 1 token donated to the bounty.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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

