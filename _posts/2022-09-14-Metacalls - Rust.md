---
layout: post
title:  "Bounty - ICDevs.org Metacalls - Rust"
date:   2022-09-14 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Metacalls - Rust - #23b

## Current Status: Discussion

* Discussion (09/14/2022)
* Ratification 
* Open for application
* Assigned 
* In Review 
* Closed 

[Forum Link - Discussion](https://forum.dfinity.org/t/icdevs-org-bounty-23b-metacalls-rust-up-to-10k/15423)

## Bounty Details

* Bounty Amount: $5,000 USD of ICP at award date - $5000 USD of ICP Match Available
* ICDevs.org DFINITY Foundation Grant Match Available: $5000 USD of ICP at award time - (For every ICP sent to 1facba03a7db53ac7d20aaf9cea5fdb84a5ecbb9732f801e143d76fb9be8b3d2, ICDevs.org will add $40 USD of ICP at award date to the bounty, up to the first 125 ICP donated, After 125 ICP, donations to the above address will add .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives)
* Project Type: Individual
* Opened: 09/01/2022
* Time Commitment: A Week
* Project Type: Library
* Experience Type: Intermediate - Rust;

## Description

This Rust library will allow an Internet Computer Canister to call the IC using an assumed identity.

This bounty gives the opportunity to

* learn how Public Key Encryption Works
* learn about t-ecdsa works on the Internet computer(creating keys that don't exist and can only be recombined through consensus)
* learn about outgoing http calls
* learn about CBOR and Candid

Now that t-ecdsa is approaching production, the IC will be able to generate keys that can be used to sign other IC transactions.  There are many reasons one may want to do this.  

Currently, a canister only has one Identity, its principal.  Using t-ecdsa the canister could have multiple identities.  

Unfortunately, at the moment, the protocol does not allow a canister to relay calls to other canisters using a derived identity.  As a result, the calls generated with these t-ecdsa keys will need to be relayed to the IC.

Currently, you will need to provide a way to download the transactions so that a program can relay them to the IC using dfx, quill, or some other kind of IC client.

Once outgoing HTTP requests are turned on(the api is already available) you will need to submit the payload to the IC for submission.  

Warning: When you submit something to the IC for an outgoing http request it may be submitted multiple times. Please confirm with DFINITY that idempotency is supported by the replica.

To complete this bounty:

1. Create a stable Rust class that can keep track of generated t-ecdsa keys.

2. The class should be able to take a Candid request and convert it into the format needed for signing.

3. The class should ask the IC to sign the request.

4. The class should store the request for historical purposes. (user should be able to set a time limit).

5. The class should clean up expired requests.

6. The class should send the produced request using the http outgoing request api.

7. The class should keep track of the request ID so that a user can retrieve it and check the status of their message on the IC via an alternative method.


The package should be deployed as a cargo package.


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

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to 1facba03a7db53ac7d20aaf9cea5fdb84a5ecbb9732f801e143d76fb9be8b3d2.  ICDevs will match the bounty $40:1 ICP for the first 125 ICP out of the DFINITY grant and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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

# Matches

DFINITY Foundation Grant: - $5000 USD of ICP at award date


[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

