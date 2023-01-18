---
layout: post
title:  "Bounty - ICDevs.org Async Flow - One Shot - Rust"
date:   2023-01-09 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Async Flow - One Shot - Rust - #38

## Current Status: Discussion

* Discussion (01/09/2023)
* Ratification: (01/09/2023) 
* Open for application: (01/09/2023)
* Assigned 
* In Review 
* Closed 

[Forum Link - Discussion]()

## Bounty Details

* Bounty Amount: $6,000 USD of ICP at award date.
* ICDevs.org Bounty Acceleration: For each 1 ICP sent to 66083bb3c940c7de2a70aa127ec771da75d60deadc10f5f66b280f203d8f6e73, ICDevs.org will add  .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives.
* Project Type: Individual
* Opened: 01/09/2023
* Time Commitment: Days
* Project Type: Library
* Experience Type: Intermediate - Rust;

## Description

The IC implements an asynchronous messaging system where requests are made to canisters and a transaction id is returned.  The canister then queries the state of this transaction and returns the result when it detects that the function is complete. The Rust CDK and Motoko abstract this away from the user in a way that depends on the IC reliably fulfilling the request with certain guarantees.

Sometimes a canister developer may want to do away with this abstraction and implement their own async flow when the results of the called function are not important to the continuation of their code.  This is more event based programming and it is especially useful while the IC still requires functions to return before upgrades can be performed.  Future functionality will fix this upgrade issue, but async and event based programming is still a useful pattern when services are interacting.  It removes dependencies and allows the developer to slip into an actor based frame of mind that more closely mirrors how the IC is actually working under the covers. Specifically, it can keep the developer from making "await" assumptions that open the canister to reentrance attacks.

In this bounty the user will create a library to handle asynchronous messaging.

When a user initiates an async one-shot call they likely do want to handle some kind of response so that they can confirm that the call was received. In turn, the acknowledger needs to know that the acknowledgment was received. You end up with something that looks a lot like a TCP/IP flow.

This pattern should expose a number of functions from the canister to implement this flow:

Sending Canister:

```
com_asyncFlow_ack({msg_id: nat; hash: ?nat32; payload: blob}) -> () //confirm that a message was received. payload is candid encoded data
```

Receiving Canister:
```
com_asyncFlow_newMessage({msg_id: nat; payload: blob;}) -> () // process a new message - payload is candid encoded data
com_asyncFlow_ackack({msg_id: nat; hash: ?nat32}) -> () //acknowledges that the acknowledgement was received
```

The library function signature should look something like:

```
constructor :  ( return_async: (canister_id: principal, sent_payload : blob, received_payload : blob, msg_id: nat, hash: ?nat32) -> async* ()); //this function is called when an ack is recieved.
call_async(canister_id: principal, payload: blob) -> async* nat; // the nat should a ULID encoded as a Nat : https://github.com/aviate-labs/ulid.mo/blob/main/src/ULID.mo

```

Since the IC has a new 5 minute timeout on full queues, the Sender and Receiver should retry this messaging after 5.5 minutes.  Therefore the library needs to keep state of sent messages and should discard those messages after the acknowledgment has been made.

The library should also keep track of processed message ids such that if a duplicate message is received, it is not reprocessed and instead, an acknowledgment is sent.

The hash is a check to make sure the acknowledgment was of the correct data.  If an improper hash is received the library should hand the request to a corruption handler with enough data to manage the error.

This bounty gives the opportunity to

* learn about rust
* learn about async messaging
* learn about state management in rust

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

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to 66083bb3c940c7de2a70aa127ec771da75d60deadc10f5f66b280f203d8f6e73.  ICDevs will match the bounty $40:1 ICP for the first 75 ICP out of the DFINITY grant and then 0.25:1.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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

