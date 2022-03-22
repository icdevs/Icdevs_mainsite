---
layout: post
title:  "Bounty - ICDevs.org GZip Encoder Decoder"
date:   2022-02-21 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Zip Encoder/Decoder - #13

## Current Status: Discussion

* Discussion (02/21/2022)
* Ratification 
* Open for application
* Assigned 
* In Review 
* Closed 

[Forum Link - Discussion]()

## Bounty Details

* Bounty Amount: $5,000 USD of ICP at award date - $5000 USD of ICP Match Available
* ICDevs.org DFINITY Foundation Grant Match Available: $5000 USD of ICP at award time - (For every ICP sent to 77f7c65f6a5b59e8694ab9594ee6ba4fd2d9fb4d8197e869173f22679d8465c8, ICDevs.org will add $125 USD of ICP at award date to the bounty, up to the first 40 ICP donated, After 40 ICP, donations to the above address will add .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives)
* Project Type: Single Contributor
* Opened: 02/20/2022
* Time Commitment: Weeks
* Project Type: Library
* Experience Type: Intermediate - Motoko
* Issue Type: Motoko Library

## Description

This bounty gives the opportunity to

* learn how gzip works
* learn advanced motoko parsing and type management
* learn about cycle management and multi step processes

The goal of this bounty is to create an encoder/decoder to gzip/zlib data in motoko canisters written in Motoko.  GZip is a compression algorithm that compresses raw data into a manageable file size. It uses the DEFLATE algorithm.

More info about GZip can be found at:

[https://git.savannah.gnu.org/cgit/gzip.git/?h=v1.11](https://git.savannah.gnu.org/cgit/gzip.git/?h=v1.11)

[https://stackoverflow.com/questions/19746313/when-using-the-yui-compressor-should-i-combine-then-minify-or-minify-then-comb/19799494#19799494](https://stackoverflow.com/questions/19746313/when-using-the-yui-compressor-should-i-combine-then-minify-or-minify-then-comb/19799494#19799494)

[http://www.infinitepartitions.com/art001.html](http://www.infinitepartitions.com/art001.html)

[https://stackoverflow.com/questions/20762094/how-are-zlib-gzip-and-zip-related-what-do-they-have-in-common-and-how-are-they#:~:text=The%20main%20difference%20between%20zlib,that%20read%20and%20write%20the%20](https://stackoverflow.com/questions/20762094/how-are-zlib-gzip-and-zip-related-what-do-they-have-in-common-and-how-are-they#:~:text=The%20main%20difference%20between%20zlib,that%20read%20and%20write%20the%20)

Example GZip/Zlib libraries can be found at:

[https://github.com/nodeca/pako](https://github.com/nodeca/pako)

[https://github.com/sile/libflate](https://github.com/sile/libflate)

The library will need to support compressing and uncompressing large data arrays that likely outrun the current cycle limit. You will need to use a library like [Pipelinify.mo](https://github.com/skilesare/pipelinify.mo). Using pipelinify is not required if another, better method is available.  The bounty applicant may also enhance pipelinify.mo for their needs.

The library will need to provide the following functions(or equivalent with a different multi-step processing library):

```

compress(Pipelinify.ProcessRequest) -> Pipelinify.ProcessResponse; //sets up a compress process

compress_process(Pipelinify.StepRequest) -> Result<ProcessResponse,ProcessError>; //executes a step

decompress(Pipelinify.ProcessRequest) -> Pipelinify.ProcessResponse; //sets up a decompress process

decompress_process(Pipelinify.StepRequest) -> Result<ProcessResponse,ProcessError>; //executes a step

compress_result(Pipelinify.ProcessingStatusRequest) -> Buffer<Buffer.Buffer<nat8>>, metadata: ZIP};

decompress_result(Pipelinify.ProcessingStatusRequest) -> Buffer<Buffer.Buffer<nat8>>;

clear_cache(?Pipelinify.ProcessingStatusRequest) -> bool; //clean out any pipelinify cache for a status request, or the entire cache if null

type ZIP = {
    //see the spec and define this type
}

```

The ProcessRequest variables will need to be defined by the developer to conform with the spec.  For this bounty, the dev may implement one optimal configuration of the compression inputs.  A future bounty can allow for more customization.

Results should generally be returned in Buffer.Buffer<Buffer.Buffer<Nat8>> so that files can be manipulated in memory.  The subchunks should not exceed 2MB so that they can be shipped to other canisters under the file transfer limit. The Candy Libray that Pipelinify uses provides a number of functions to help with these limitations.  Feel free to refactor candy and submit improvement pull requests.

The developer will need to experiment with process chunking strategies and make recommendations about how much data can be processed during one process cycle.  Hopefully, we can remove this requirement once deterministic time slicing is integrated.

The final delivery should include test cases for both single step and multistep compression/decompression.

The package should be deployed as a vessel package.


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

The bounty was generously funded by the DFINITY Foundation. If you would like to turbocharge this bounty you can seed additional donations of ICP to 77f7c65f6a5b59e8694ab9594ee6ba4fd2d9fb4d8197e869173f22679d8465c8.  ICDevs will match the bounty 5:1 for the first 40 ICP out of the DFINITY grant and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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

DFINITY Foundation Grant: - $5000 USD of ICP at award date


[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

