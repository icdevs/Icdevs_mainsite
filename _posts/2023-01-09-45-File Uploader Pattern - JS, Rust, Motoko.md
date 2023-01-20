---
layout: post
title:  "Bounty - ICDevs.org File Uploader Pattern - JS, Rust, Motoko"
date:   2023-01-09 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# File Uploader Pattern - JS, Rust, Motoko - #45

## Current Status: Discussion

* Discussion (01/09/2023)
* Ratification: (01/09/2023) 
* Open for application: (01/09/2023)
* Assigned 
* In Review 
* Closed 

[Forum Link - Discussion](https://forum.dfinity.org/t/open-icdevs-org-bounty-45-file-uploader-pattern-js-rust-motoko-10k/17962/1)

## Bounty Details

* Bounty Amount: $10,000 USD of ICP at award date.
* ICDevs.org Bounty Acceleration: For each 1 ICP sent to 88159b4fcc365576856c3d9c12a8d5b0e9614660dd30d507894466dabd58e92b, ICDevs.org will add  .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives.
* Project Type: Individual
* Opened: 01/09/2023
* Time Commitment: Weeks
* Project Type: Library
* Experience Type: Intermediate - Motoko; Intermediate - Rust; Intermediate - JS;

## Description

Uploading files to the IC has been difficult up to this point.  The root cause of this is that the IC has an ingress limit of 2MB. Therefore, if you need to upload a file, you need a custom integration that chunks the files into 2MB chunks and handles the processing and repeated calling of the IC to get the file into your canister.

This bounty call for the developer to create a best-practices tutorial, motoko implementation, rust implementation, and agent-js handler to simplify this function.

The example canisters should have the following interface:

```
com_uploader_chunk({bytes : [Nat8], file_id: ?Nat, chunk : Nat}) -> Nat; 
```

This function should assemble files into a Map of <Nat, [[Nat8]]> or <Nat, Buffer<[Nat8]>]>.

The canister author is free elsewhere to handle the association of the file_id with a file name.

Code elsewhere in the library should be able to retrieve the files in chunked format from this state variable.

The developer should add a function to the dfinity agent that auto handles the uploading of a byte array into this function. Under the hood there is likely much code you can repurpose from https://www.npmjs.com/package/@dfinity/assets.  you should adapt this library so that its not as specific for the asset canister and returns/notifies of the file id. The following offers another approach https://github.com/ORIGYN-SA/mintjs/blob/3cba559c5cd20e233aec211651cc42c59f9504d3/src/methods/nft/stage.ts#L83.

Create a package in https://github.com/dfinity/agent-js/tree/main/packages called fileUploader.  This should take an actor and an identity.  You should be able to pass it a file and await the upload of that file:

```
let file_id = await fileUploader(actor, bytes);
let result = actor.notify_of_file(file_id, "myfile.txt");
```

This bounty gives the opportunity to

* learn about Motoko
* learn about Rust
* learn about IC File uploads

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

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to 88159b4fcc365576856c3d9c12a8d5b0e9614660dd30d507894466dabd58e92b.  ICDevs will add .25 for every 1 token donated to the bounty.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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

