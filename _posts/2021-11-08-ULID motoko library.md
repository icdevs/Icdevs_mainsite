---
layout: post
title:  "Bounty - ICDevs.org ULID motoko library"
date:   2021-11-08 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Create a ULID Library in Motoko - #3

## Current Status: Discussion

* **Discussion** (11/08/2021) <- We are here
* Ratification
* Open for application
* Assigned
* In Review
* Closed

[Issue Link - Discussion Forum](https://forum.dfinity.org/t/icdevs-org-bounty-3-ulid-motoko-library/8473)

## Bounty Details

* Current Bounty Amount: 20 ICP
* ICDevs.org Match Available: 20 ICP - (For every ICP sent to 860bd56f4c8a9d40f26462e51e2a4dd4e27cf0e1463372a1179df089695bfd63, ICDevs.org will add one more ICP to the bounty, up to 20 ICP, After 20 ICP, Donations to the above address will add .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives)
* Time Left: Expires 12/31/2022
* Project Type: Single Contributor
* Opened: 11/08/2021
* Time Commitment: Days
* Project Type: Traditional
* Experience Type: Intermediate - Motoko; Intermediate - Encoding
* Issue Type: Application Development

## Description

This bounty gives the opportunity to

* learn how motoko works
* learn about unique ID encodings
* learn about randomness on the IC

A donor(The Dragginz Team) genrously funded a full bounty for ICDevs to help find a dev that would like to build a ULID library.

The spec for ULID can be found at https://github.com/ulid/spec

There are a number of example libraries in other languages.  You will need to transcode the library into motoko.  This may require the construction of other sub libraries for encoding, string manipulation, and decoding.

There are unique properites that the IC has that you should take advantage of.  The IC provides randomness via the [Random](https://sdk.dfinity.org/docs/base-libraries/random) base library.  This library shold two modes. One where true randomness is used and another where an alternative form of randomness that does not require an async await to be used.  Perhaps hasing the Principal of the canister plus an always increasing nonce might do the trick but a healthy discussion shold ensue about what will work and what won't.

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

The bounty was generously funded by a donor(The Dragginz Team). If you would like to turbocharge this bounty you can seed additional donations of ICP to 860bd56f4c8a9d40f26462e51e2a4dd4e27cf0e1463372a1179df089695bfd63.  ICDevs will match the bounty 1:1 for the first 20 ICP and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).

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

