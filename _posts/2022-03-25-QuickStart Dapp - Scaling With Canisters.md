---
layout: post
title:  "Bounty - QuickStart Dapp - Scaling With Canisters"
date:   2022-03-25 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# QuickStart Dapp - Scaling With Canisters - #20

## Current Status: Awarded

* Open for submission - (03/28/2022)
* Closed - (05/16/2022)

[Forum Link - Discussion](https://forum.dfinity.org/t/icdevs-org-bounty-20-quickstart-dapp-scaling-with-canisters-200-icp-100-icp-50-icp-multiple-winners)

## Bounty Details

* Bounty Amount: 200 ICP First Prize, 100 ICP Second Prize, 50 ICP Third Prize
* Project Type: Single Contributor/Team
* Opened: 03/28/2022
* Time Commitment: Weeks
* Project Type: Sample App
* Experience Type: Intermediate - Motoko; Intermediate - Rust; Intermediate - Web

## Description

This bounty gives the opportunity to

* learn motoko
* learn rust
* learn how scaling works
* learn how to use canisters to create canisters
* learn about indexing
* learn how clients access the Internet Computer

The goal of this bounty is to produce a sample application on the Internet Computer.

Goal: Demonstrate scalability by using inter-canister calls

Create a practical dapp that has a common endpoint (primary canister) that can scale its application by creating secondary canisters and distributing requests across those canisters.

Reach Goal 1: The primary canister provides indexing information such that a client can distribute parallel calls across secondary canisters directly.

Reach Goal 2: Provide a security interface such that secondary canisters can hold private data from many users but only deliver requests to authorized requesters. Attempt to use as few inter-canister calls as possible.

Your application can be written in either motoko or rust.  Further, a motoko and rust version can be submitted as seperate entries by the same person/team.

The code must be opensourced using the [MIT License](https://opensource.org/licenses/MIT).

## Results

We have had 5 amazing submissions for the QuickStart Bounty on scaling with canisters. Do you want BigMap? BigMap is in the bones of most of these projects. They are a great way to get started and explore how to use canisters to expand the scalability of your smartcontracts.

We’ve decided to award all 5 projects with the 1st place prize of 400 ICP. Congrats to the winners:

Iceypee - shared canisters - motoko  [GitHub - professionalGithub99/ScalingBounty
repo - GitHub - professionalGithub99/ScalingBounty 2

GLdev - storage and indexing across container - Rust - https://github.com/GLicDEV/quickstart_scaling 21 2

Hoosan - auto scaling node - motoko - https://forum.dfinity.org/t/icdevs-org-bounty-20-quickstart-dapp-scaling-with-canisters-200-icp-100-icp-50-icp-multiple-winners/11756/10?u=skilesare 2 - GitHub - hoosan/auto-scaling-notes 27 1

C-B-Elite - ICSP - motoko - https://github.com/PrimLabs/ICSP 3 - Internet Computer Storage Protocol(ICSP)

* Autoscaling Storage
* Self Cycle Monitor
* One step store, two steps get
* Simdi - rust - Scaled Storage - [ (ICDevs.org Bounty #20 - QuickStart Dapp - Scaling With Canisters - 200 ICP, 100 ICP, 50 ICP - Multiple winners - #30 by simdi.jinkins 2) -

Scaled Storage is a generic distributed hash table tailored for the internet computer. It can scale to possibly an infinite amount of canisters, with a worst-case scenario of one inter-canister call and usually a best case of zero. The client side never needs prior knowledge of all canisters holding data, but instead just the canister id of any one of the canisters. - The repo: GitHub - scroobius-pip/scaled_storage 1

Congrats to all the authors. Please use the below thread to promote your project and if you plan to do any more with it.

## Funding

The bounty was generously funded by the DFINITY Foundation. Additional donations that fund the administration of these bounties can be sent to ICDevs.org.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).

[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)