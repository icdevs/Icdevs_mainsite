---
layout: post
title:  "Bounty - ICDevs.org - HTTPRequest Parser"
date:   2022-01-11 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Create a HTTP Request Parser in Motoko - #8

## Current Status: Discussion

* Discussion (01/11/2022)
* Ratification (02/10/2022)
* **Open for application** (02/10/2022) <- We are here
* Assigned
* In Review
* Closed

[Dev Forum Discussion](https://forum.dfinity.org/t/icdevs-org-bounty-8-httprequest-parser/10219)

## Bounty Details

* Current Bounty Amount: 10 ICP + $2000 USD of ICP at award date
* ICDevs.org DFINITY Bounty Accelerator Grant Match Available: 20 ICP - (For every ICP sent to 860bd56f4c8a9d40f26462e51e2a4dd4e27cf0e1463372a1179df089695bfd63, ICDevs.org will add $50 more ICP to the bounty, up to 10 ICP, After 10 ICP, Donations to the above address will add .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives)
* Time Left: Expires 12/31/2022
* Project Type: Single Contributor
* Opened: 01/22/2022
* Time Commitment: Days
* Project Type: Traditional
* Experience Type: Beginner - Motoko
* Issue Type: Application Development

## Description

This bounty gives the opportunity to

* learn how http_request works with the Internet Computer
* learn and contribute to string parsing in motoko
* learn how to create and publish a vessel package

The developer will need to create a vessel package called HttpRequestParser that parses the [HTTPRequest type](https://github.com/dfinity/agent-rs/blob/b9c0b28c2dfd7fbd2a654874f8fd9a9773fa0c8d/ic-utils/src/interfaces/http_request.rs#L16) into a more useable and extensible object.  We suggest:

    {
        method: Text;
        url: {
            original: Text;
            protocal: Text //http or https - may always be https?;
            port: Nat16; //maybe always 443? What about local replica?
            host: {
                original: Text;
                array: Array<Text>; // host split at the "."s
            };
            path: {
                original: Text;
                array: Array<Text>; // split path by "/" into an array that can be referenced;
            };
            query: {
                original: Text; //everything after the ? and before an anchor
                get: (Text) -> ?Text; //helper function: pass in a key and get value. null if not present
                hashMap: HashMap<Text, Text>;
                keys: [Text]; //list of query keys
            };
            anchor: Text; //an anchor if available(after the #;
            
        };
        headers: {
            original: Array<(Text, Text)>;
            get: (Text) -> ?[Text] //helper function: pass in a key and get values. null if not present
            hashMap: HashMap<Text, [Text]>;
            keys: [Text]; //list of header keys
        };
        body: ?{ //Get requests won't have a body
            original: Blob
            size: Nat; //size of the body
            form: { //if the content-type is as specified at https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST, parse the form and populate the collection
                get: (Text) -> ?[Text] //helper function: pass in a key and get value. null if not present
                hashMap: HashMap<Text, [Text]>;
                keys: [Text]; //list of form keys;
                files: (Text) -> ?[Buffer<Nat8>]; //helper function returns the formdata as a byte array; null if the form entry does not exist 
            };
            text: () -> Text; //converts the Blob to plain text
            file: () -> ?Buffer<Nat8>; //if not formdata and only one file is provided it will be here.
            bytes: (start, end) -> Buffer<Nat8>;//helper function: return the specified bytes from the blob.
        };

    };

This library is an opportunity to start a RegEx like library for motoko. RegEx is hard and big and complicated, so this is not a requirement, but if the bounty hunter wanted to dive into the basics of RegEx and explore how well/poorly motoko was going to be for RegEx it would be a bonus.

Prior art that may help in getting you started:

[https://github.com/aramakme/aramakme_nft_auction/blob/f0ca7fb629814dc24a90ad84c7d024a49390e38b/main.mo#L2757](https://github.com/aramakme/aramakme_nft_auction/blob/f0ca7fb629814dc24a90ad84c7d024a49390e38b/main.mo#L2757)
[https://github.com/dfinity/motoko-base/blob/57c3bb724dfe36928d443f5a81446872bf646de9/src/Text.mo#L346](https://github.com/dfinity/motoko-base/blob/57c3bb724dfe36928d443f5a81446872bf646de9/src/Text.mo#L346)

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

The bounty was generously funded by the community and the DFINITY Bounty Accelerator Grant. If you would like to turbocharge this bounty you can seed additional donations of ICP to 860bd56f4c8a9d40f26462e51e2a4dd4e27cf0e1463372a1179df089695bfd63.  ICDevs will match the bounty 1:1 for the first 20 ICP and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).

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

$2000 ICP - DFINITY Accelerator Grant


[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)
