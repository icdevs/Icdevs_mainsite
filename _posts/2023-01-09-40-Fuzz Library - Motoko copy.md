---
layout: post
title:  "Bounty - ICDevs.org Fuzz Library - Motoko"
date:   2023-01-09 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Fuzz Library - Motoko - #40

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
* ICDevs.org Bounty Acceleration: For each 1 ICP sent to 801581b2c8f3303eaeb91892784b2eac99e1128115b0fadf739576d6c94f3c8e, ICDevs.org will add  .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives.
* Project Type: Individual
* Opened: 01/09/2023
* Time Commitment: Days
* Project Type: Library
* Experience Type: Beginner - Motoko;

## Description

Fuzzing is a form of testing that allows you to test your code with a number of randomized values and to use different randomized values each time.

In this bounty you will create a library that returns randomized values for different motoko data types so that you can write fuzz tests in motoko.

The standard types that you need to cover are:

* Int
* Int8
* Int16
* Int32
* Int64
* Nat
Nat8
* Nat16
* Nat32
* Nat64
* Float
* Char
* Text
* Bool
* Blob

* Option

* Array

The general fuzzing functions that you need to provide for each type are(where it makes sense):

* Fuzz.min<Type>() -> Type - Return the minimum value
* Fuzz.max<Type>() -> Type - Return the max value
* Fuzz.random<Type>() -> Type - Return a random value
* Fuzz.randomRange<Type>(min: Type, max: Type) - return a random in the range
* Fuzz.randomText(length: nat) : Text
* Fuzz.randomAscii(length: nat) : Text
* Fuzz.randomUnicode(length: nat, set: UnicodeSet) : Text
* Fuzz.randomBlob(length: nat) : Blob
Fuzz.optOrNot<Type>(val : type) : ?Type - randomly assign the val or a null
* Fuzz.randomArray<Type>(() -> Type, length) : [Type] - Create an Array with the specified length

For unbounded types like Nat and Int you will need to come up with a strategy that makes sense for min and max.

This bounty gives the opportunity to

* learn about Motoko
* learn about Fuzzing

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

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to 801581b2c8f3303eaeb91892784b2eac99e1128115b0fadf739576d6c94f3c8e.  ICDevs will match the bounty $40:1 ICP for the first 50 ICP out of the DFINITY grant and then 0.25:1.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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

