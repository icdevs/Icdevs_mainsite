---
layout: post
title:  "Bounty - ICDevs.org Role-Based Authentication Class - Motoko"
date:   2023-03-24 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# ICDevs.org Role-Based Authentication Class - Motoko - #62

## Current Status: Discussion

* Discussion (03/24/2023)
* Ratification: (TBD)
* Open for application: (TBD)
* Assigned (TBD)
* In Review 
* Closed 

[Forum Link - Discussion](https://forum.dfinity.org/t/proposed-icdevs-org-bounty-role-based-authentication-class-4-000/)

## Bounty Details

* Bounty Amount: $8,000 USD of ICP at award date.
* ICDevs.org Bounty Acceleration: For each 1 ICP sent to cec84b9b919384a3ba0fcad11b25411a86b1e67e61f4bbdcfd0a52e25fb7e1c1, ICDevs.org will add .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives.
* Project Type: Individual
* Opened: TBD
* Time Commitment: Months
* Project Type: Role-Based Authentication Class
* Experience Type: Intermediate/Expert - Motoko and Access Control

## Description

The proposed project aims to create a drop-in class for role-based authentication in Motoko. This class will enable developers to easily configure role-based access control and provide role-based checks in their applications.

Role-based authentication is a critical component of many applications, enabling developers to control access to resources and ensure that users have appropriate levels of access based on their role. By creating a drop-in class for role-based authentication, developers will be able to quickly and easily implement this functionality in their applications.

The new drop-in class will be designed to be customizable and flexible, with support for a wide range of role-based access control scenarios. It will also include features for role-based checks, making it easy for developers to enforce access control policies in their applications.

To create the new drop-in class, the project will require an experienced developer who is proficient in Motoko and has a strong understanding of access control. The developer will work closely with the Motoko community to ensure that the new class meets the needs of developers working on the Internet Computer.

The new drop-in class will also include a well-designed and supported, single page HTML file that can be hosted from an access canister and used to update and modify permissions. 

Several open-source libraries can be used as a starting point for the role-based authentication class, such as the Node.js library `connect-roles`, which provides a simple way to manage roles and permissions in a Node.js application.

Role-based access on the IC includes the complications of asynchronous programming and subnets.  Role checks on the same subnet may work fine to query endpoints, but cross subnets checks may expose dapps to reentrance risk.  Your class should consider these carefully and explain he limitations of the library.  A cross subnet solution would be welcome as well.

You may consider drafting a potential ICRC Specification to standardize role based checks across the IC as part of this bounty if you determine that that would be a good idea.  Future iterations of the replica may support capability based roles so we do not expect you to solve those problems at this time, but considering and understanding the concepts and explaining the differences and advantages they would provide should be expected in the readme.md file.

Overall, the new drop-in class for role-based authentication will provide a valuable resource for developers working on the Internet Computer, enabling them to easily configure role-based access control and provide role-based checks in their applications, enhancing the security and control of their applications.

This bounty gives the opportunity to

* learn about Motoko
* learn about Cross canister and cross subnet state and async calls

## To apply for this bounty you should:

* Include links to previous work building web applications and any other open-source contributions (i.e., your Github).
* Provide a brief overview of how you will complete the task. This can include things like which dependencies you will use, how you will make it self-contained, the sacrifices you would have to make to achieve that, or how you will make it simple. Anything that can convince us you are taking a thoughtful and expert approach to this design.
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

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to cec84b9b919384a3ba0fcad11b25411a86b1e67e61f4bbdcfd0a52e25fb7e1c1.  ICDevs will add .25 for every 1 token donated to the bounty.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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

