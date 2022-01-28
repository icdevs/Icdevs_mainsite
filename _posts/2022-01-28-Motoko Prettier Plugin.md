---
layout: post
title:  "Bounty - ICDevs.org Motoko Prettier Plugin"
date:   2022-01-19 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# Prettier Plugin - #10

## Current Status: Discussion

* Discussion (01/28/2021)
* Ratification 
* Open for application 
* Assigned 
* In Review 
* Closed 

[Forum Link - Discussion](https://forum.dfinity.org/t/icdevs-org-bounty-10-150icp-5-1-match-prettier-plugin/10543)

## Bounty Details

* Bounty Amount: 150 ICP - 100 ICP Match Available
* ICDevs.org DFINITY Bounty Acclerator Grant Match Available: 100 ICP - (For every ICP sent to cef4cdc0622fce89a97520eb8a1db71c9e44d737334fb4a8e3ba4b02cc0fa94c, ICDevs.org will add five more ICP to the bounty, up to the first 20 ICP donated, After 20 ICP, donations to the above address will add .25 ICP to this issue and .75 ICP to fund other ICDevs.org initiatives)
* Project Type: Single Contributor
* Opened: 01/28/2021
* Time Commitment: Days
* Project Type: Traditional
* Experience Type: Beginner - oCaml; Intermediate - JavaScript
* Issue Type: Node.js Plugin Development

## Description

This bounty gives the opportunity to

* learn how the motoko compiler works - it is oCaml
* learn how prettier works
* learn more javascript
* learn about ASTs (Abstract Syntax Tree)
* learn about grammar parsers
* learn about code formatting

[Prettier](https://prettier.io/docs/en/plugins.html) is an opinionated code formatter used by CICD, coding IDEs, and other tools to help make code easier to read.

The community has discussed the need for a prettier plugin that would handle motoko code.  The problem is that to use prettier you need to be able to compile the code into an AST and feed it into the plugin.  To do that you need a motoko compiler in Javascript.  This would be quite a task and we'd love to have someone tackle that one day, but in the meantime, we have a short cut.

[Js_of_ocml](https://ocsigen.org/js_of_ocaml/latest/manual/overview) is a program that lets you compile ocaml programs to be run inside of a javascript engine.  In theory, we should be able to go from motoko file -> ocaml interpreter -> ast -> prettier.  As a part of this bounty, you get to figure out how!

We have some source material that may help you out.  Forum users and current/past DFINITY employees have weighed in and worked on a similar system at points in the past.


[Pull Request - Compile the Motoko compiler to JS](https://github.com/dfinity/motoko/pull/11)

[Latest code that does some of what we want](https://github.com/dfinity/motoko/tree/master/src/js)

The function you need to expose is likely here: [https://github.com/dfinity/motoko/blob/d8e13023dfdc965907512432c0181c8d137d84ad/src/pipeline/pipeline.ml#L118](https://github.com/dfinity/motoko/blob/d8e13023dfdc965907512432c0181c8d137d84ad/src/pipeline/pipeline.ml#L118)(Thanks @PaulYoung).  This will need to be converted to return an object instead of a filename, so you may have to do some oCaml or solicit the help of someone who does.

Optional: It may be easier to use an existing grammar parser for JS that would make the task simpler.  Something like the way [coffeescript parses coffeescript](https://coffeescript.org/v1/annotated-source/grammar.html) might be helpful. See [JISON](https://github.com/zaach/jison)

A few important comments:

From @chenyan

I never used prettier before, but from a cursory look, this path feels a lot of work.

* Prettier requires a special AST format which is certainly not supported by the Motoko parser. So you can get some kind of AST via js_of_ocaml, but converting it to the prettier AST seems difficult to me. For example, how do you generate the parse function for each AST node.
* The hardest part of writing a prettier is to handle contents that are NOT part of the AST, e.g. comments, existing spaces, etc. Most parser generator, including the Motoko parser, omits these contents from the AST. Prettier seems to have some way of handling comments by looking at the token positions, but I’m not sure if this still requires some aid from the parser.
* From the meta level, it’s a bit strange that going through JS is the easier way to write a prettier for Motoko, instead of OCaml. But I understand the obstacle for building a prettier in OCaml is the lack of concrete syntax tree (AST + comments and spaces). But I suspect the same is true for prettier.js. Going from concrete syntax tree to a formated code is a relatively straightforward process.

From @paulyoung

The general idea here is to be able to parse some input and then print it out exactly the same.

This is ultimately the approach taken in PureScript after wanting a formatting tool for a long time. The links below contain some good info on motivation and should provide some insight.

https://github.com/purescript/purescript/pull/3608

https://github.com/natefaubion/purescript-language-cst-parser

Perhaps a CST could be implemented using Tree Sitter via the OCaml bindings. That way, other languages can make use of it as well.

https://tree-sitter.github.io/tree-sitter/

From @rossberg

FWIW, the Motoko parser gives both full position info (in the AST nodes) as well as lexical comments and even white space (in the trivia table).

That said, it’s probably not a good idea to interface the compiler’s parser and AST. They are implementation details of the compiler, not public APIs. As such, they can change with any release, and have done so frequently in the past.

The Motoko grammar actually is deliberately simple (as can be witnessed by its semicolon rules :slight_smile: ), and the parser is generated with (ocaml)yacc. It would be quite straightforward to take the yacc grammar and convert it to C-yacc or another parser generator of your choosing.

Pretty-printing an AST is not difficult either. Moreover, Motoko’s syntax has been designed to allow reasonable simple formatting conventions (some of them codified in the style guide).

So, a dev proficient in OCaml could probably hack both up in a day or two.

However, as @chenyan pointed out, what’s hard is layout of non-AST elements like comments. That’s been what kept the Motoko team from providing a moformat so far. I’d estimate that being 90% of the actual work, and it has very little to do with parsing.

Another complication would be formatting of code fragments instead of just entire files. That’s something you’d want in an IDE. For that, you first need to recognise what kind of syntactic context you’re in.

Requirements:

Produce a Prettier Plug-in that formats motoko code using best practices.

Create a prettier parser that can take a motoko file string, hand the string to the motoko compiler(Option 1: a js_of_ocml implementation of the motoko compiler; Option 2: a custom jison parser for javascript), and get back an AST that can be morphed into a prettier style AST.

Produce a prettier printer that outputs the code in a best-practices format. What are the best practices? You should work with the motoko community to decide these.  We'd recommend using the forum post for this bounty to discuss what the formatting should look like.

Finally, create a UI canister that takes motoko code in one code editor window and renders it in a mirrored window with the prettier formatter applied to it.  We suggest using the same [monaco editor](https://microsoft.github.io/monaco-editor/) that Motoko Playground uses as you may be able to find a good bit of helper code in the [motoko playground repo](https://github.com/dfinity/motoko-playground).

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

The bounty was generously funded by the DFINITY Foundation Accelerator. If you would like to turbocharge this bounty you can seed additional donations of ICP to cef4cdc0622fce89a97520eb8a1db71c9e44d737334fb4a8e3ba4b02cc0fa94c.  ICDevs will match the bounty 5:1 for the first 20 ICP out of the DFINITY grant and then 0.25:1 after that.  All donations will be tax deductible for US Citizens and Corporations.  If you send a donation and need a donation receipt, please email the hash of your donation transaction, physical address, and name to donations@icdevs.org.  More information about how you can contribute can be found at our [donations page](https://icdevs.org/donations.html).


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

DFINITY Acclerator Grant: - 150 ICP


[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)

