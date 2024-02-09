---
layout: post
title:  "Bounty - ICDevs.org CBOR and Candid Motoko Parser"
date:   2022-02-22 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# CBOR and Candid Motoko Parser - #19

## Current Status: Awarded

* Discussion (02/27/2022)
* Ratification 
* Open for application
* Assigned 
* In Review 
* Closed (09/09/2022) https://mops.one/cbor and https://mops.one/candid

[Forum Link - Discussion](https://forum.dfinity.org/t/icdevs-org-bounty-18-cbor-and-candid-motoko-parser-3-000)

## Bounty Details

* Bounty Amount: $6,000 USD of ICP at award date
* ICDevs.org DFINITY Foundation Grant Match Available: $3000 USD of ICP at award time - (For every ICP sent to d0e3be904a939ff752979aaa53cfb66fac8d75b85ce4fa878e147d60706be6ed, ICDevs.org will add $125 USD of ICP at award date to the bounty, up to the first 24 ICP donated, After 24 ICP, donations to the above address will add .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives)
* Project Type: Single Contributor
* Opened: 02/20/2022
* Opened: 09/22/2022
* Time Commitment: Days
* Project Type: Library
* Experience Type: Intermediate - Motoko
* Issue Type: Motoko Library

## Description

This bounty gives the opportunity to

* learn how CBOR encoding works
* learn how candid works
* learn how call_raw works in motoko

The goal of this bounty is to produce two motoko libraries.

More info about CBOR can be found at:

[https://cbor.io/](https://cbor.io/)

An example of cbor library can be found at:

[https://github.com/hildjj/node-cbor/tree/main/packages/cbor/lib](https://github.com/hildjj/node-cbor/tree/main/packages/cbor/lib)

DFINITY uses CBOR in the agent-js library as well. The implementation can be found at [https://github.com/dfinity/agent-js/blob/main/packages/agent/src/cbor.ts](https://github.com/dfinity/agent-js/blob/main/packages/agent/src/cbor.ts)

Github user Nomeata has done some cbor(only on binaries) at [https://github.com/nomeata/motoko-certified-http](https://github.com/nomeata/motoko-certified-http) which may demonstrate some good paterns for parsing and constructing CBOR.

We need a CBOR library in motoko because the new call_raw functionality allows a motoko canister to receive Binary Represented data from a server.  A wallet may want to filter this call and decide if it wants to pass it on to another IC service by data inside the encoded representation.  The cbor plug in will allow a wallet author to inspect the payload and make decisions about the call.

The opposite is also possible, where a wallet may want to be able to construct a payload for call raw using an uploaded candid definition for a service that did not exist when the wallet was minted.

Once CBOR is decoded it needs to be synced with the cadid representation of the service it was encoded for. If you want to be able to tell what property is what in your function call package you need to know the candid that was used to encode the package.  

The Candid parsing logic can be found for the agent-js library at: [https://github.com/dfinity/agent-js/blob/main/packages/candid/src/candid-core.ts](https://github.com/dfinity/agent-js/blob/main/packages/candid/src/candid-core.ts)

These libraries will often be used together to parse and encode binary data.

The developer is welcome to attempt to refactor the Candy Library at [https://github.com/aramakme/candy_library](https://github.com/aramakme/candy_library) to host the candid parser as that was one of the initial intents of that library.

A full set of tests should be implemented.

The package should be deployed as a vessel package.


## Funding

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to d0e3be904a939ff752979aaa53cfb66fac8d75b85ce4fa878e147d60706be6ed.  ICDevs will match the bounty 5:1 for the first 24 ICP out of the DFINITY grant and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


## Awarded

The award has been given granted to https://github.com/Gekctek for the following contributions:

[Motoko Candid](https://github.com/Gekctek/motoko_candid)

[Motoko CBOR](https://github.com/Gekctek/motoko_cbor)

[Motoko Numbers](https://github.com/Gekctek/motoko_numbers)


[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

