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
* Open for application (02/10/2022) 
* Assigned (3/28/2022) 
* In Review
* Closed (05/16/2022)

[Dev Forum Discussion](https://forum.dfinity.org/t/icdevs-org-bounty-8-httprequest-parser/10219)

## Bounty Details


* Project Type: Single Contributor
* Opened: 01/22/2022
* Closed: 05/16/2022
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

## Results

[GitHub - tomijaga/http-parser.mo: HTTP Request Parser for Motoko](https://github.com/tomijaga/http-parser.mo)

## Funding

The bounty was generously funded by the community and the DFINITY Foundation Grant. If you would like to turbocharge this bounty you can seed additional donations of ICP to 860bd56f4c8a9d40f26462e51e2a4dd4e27cf0e1463372a1179df089695bfd63.  ICDevs will match the bounty 1:1 for the first 20 ICP and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).

[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)
