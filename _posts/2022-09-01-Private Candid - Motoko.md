---
layout: post
title:  "Bounty - ICDevs.org Private Candid - Motoko"
date:   2022-09-01 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Private Candid - Motoko - #22a

## Current Status: Discussion

* Discussion (09/01/2022)
* Ratification 
* Open for application
* Assigned 
* In Review 
* Closed 

[Forum Link - Discussion]()

## Bounty Details

* Bounty Amount: $5,000 USD of ICP at award date - $5000 USD of ICP Match Available
* ICDevs.org DFINITY Foundation Grant Match Available: $5000 USD of ICP at award time - (For every ICP sent to 8b9cbe90c23b9d0a36006e6623205e89c72938d064c911bdbf4fde9e17280b20, ICDevs.org will add $20 USD of ICP at award date to the bounty, up to the first 125 ICP donated, After 125 ICP, donations to the above address will add .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives)
* Project Type: Team
* Opened: 08/31/2022
* Time Commitment: Weeks
* Project Type: Library
* Experience Type: Intermediate - Motoko; Intermediate - JS; 

## Description

This Motoko library will allow for more private communication with a particular canister.

This bounty gives the opportunity to

* learn how Public Key Encryption Works
* learn about t-ecdsa works on the Internet computer(creating keys that don't exist and can only be recombined through consensus)
* learn about agent-js and how to interact with the IC from javascript

Did you know that, just like ethereum, all transactions going into subnets can be stored and replayed later to reconstruct the canister state? This means that the values in the messages you send to the IC should not be considered private. Right now they aren’t being exposed anywhere, but there is also not anything to keep subnets from keeping them around.  And DFINITY is considering making them public.

Just like if you want your state at rest to be private you will need to use encryption (and eventually a Secure Enclave) you also should consider if your message data should be encrypted as well.

Motoko just added a from_candid and to_candid method that allows you to easily convert blobs to known Motoko types.

This bounty asks you to 

1. Create a js library that converts a candid variable into a Binary representation that Motoko can understand.(This may already exist in  agent.js - you will just need to expose it.)

2. Ask a canister for an ethereal public key that can be used to decrypt data. You will be able to generate this key using t-ECDSA. You may want to give the ability to produce a set of these ahead of time using derivations that your library can refresh at times of lower processing.

3. Encrypt your serialized candid using the key in js.

4. On the canister side, your class will need to unencrypt the candid if the public key is still valid, decrypt it, and return it using a known type.(you should use generic types for this).

5. Upon each x number of successful calls or after y time, the canister should update the value of the public key(or use a sliding window of a set of valid keys.)

6. Create a sample dapp that sends encrypted data to a canister and uses it. (something like a simple wall application would be fine.)

7. Your library should allow for the injection of a non-t-ecdsa key for testing purposes.

The package should be deployed as a vessel package for motoko.


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

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to 8b9cbe90c23b9d0a36006e6623205e89c72938d064c911bdbf4fde9e17280b20.  ICDevs will match the bounty $40:1 ICP for the first 125 ICP out of the DFINITY grant and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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

