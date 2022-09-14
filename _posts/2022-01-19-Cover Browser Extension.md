---
layout: post
title:  "Bounty - ICDevs.org Cover Browser Extension"
date:   2022-01-19 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Cover Browser Extention - #9

## Current Status: Closed

* Discussion (01/19/2022)
* Ratification (02/10/2022)
* Open for application (02/10/2022)
* Assigned 
* In Review 
* Closed (4/14/2022)

[Issue Link - Discussion Forum](https://forum.dfinity.org/t/icdevs-org-bounty-9-cover-browser-plugin/10485)

## Bounty Details

* Bounty Amount: 10 ICP + $4000 
* Project Type: Single Contributor
* Opened: 01/25/2022
* Opened: 04/22/2022
* Time Commitment: Days
* Project Type: Traditional
* Experience Type: Intermediate - Web Dev; Intermediate - API Integration
* Issue Type: Web Extension Development

## Description

This bounty gives the opportunity to

* learn how [Cover](https://covercode.ooo/) works
* learn how the dfinity js agent works
* learn how to create an extension that integrates with the IC
* learn how to integrate with [DAB](https://dab.ooo/)

[Cover(Docs)](https://docs.covercode.ooo/) is an open internet service that can be used by developers to verify and prove that a canister's code matches the open source code. Reducing the risk of malicious apps & increasing transparency and trust.

This integration would allow users to install a browser extension that will warn users if the deployed canister code does not match a known-good wasm hash.

Requirements:

The extension will need to identify IC network events, and capture the canister principal for each (see https://github.com/jorgenbuilder/chrome-dfinity-decoder/blob/main/src/devtools/panel/capture.ts#L12 for a starting point on capturing IC network events.) This set of canisters will then be verified against the cover API.

1.  The extension should detect which canisters a site is communicating with.
2.  Each canister should be checked on Cover.
3.  If any issues are found, an alert should be shown indicating the agent is configured to communicate with an unknown wasm hash. 

The status of each canister should be "Good to Go(Match)" - Green, "Warning(Unknown Canister)" - Yellow, "Exception(Hash doesn't match) - Red.  If the extention api allows for the changing of the color of the extension icon it would be nice to change that color. The alert should have a configurable sound warning that triggers if a RED is detected.  

When the icon is clicked a box should show a list of canisters and their warning level as well as any info that can be retrieved from Cover and [DAB](https://docs.dab.ooo/canister-list/getting-started/) if info is not available from cover.

To claim the award you must produce a web extension and submit it to the google web store that delivers the above functionality.

## Results

Awarded to @DunkanMcLoud

https://github.com/IT-Union-DAO/can-check/

## Funding

The bounty was generously funded by the ICDevs community and a DFINITY Foundation of 40 more ICP. If you would like to turbocharge this bounty you can seed additional donations of ICP to f2b488b80eb22bf57c1556683efcb51e090b46c181ca28e167e6f095223dfa3e.  ICDevs will match the bounty 2:1 for the first 20 ICP out of the DFINITY grant and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).



[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

