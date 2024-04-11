# 💰 Donations

ICDevs.org is funded by the Internet Computer community.  Raising funds is essential for us to continue to be able to provide the services that are core to our misson.  There are lots of ways to give and the structure of the ICP token gives us additional creative ways for the community to support our work.

## Mint ICDV - The ICDevs token 

$ICDV is a utility token that is used to provide cryptographic proof of donation to ICDevs.org. I has no financial value and anyone minting the token should expect to receive no value other than social proof and self-satisfaction of contributing to public good. We hope to do fun things in the future for $ICDV holders, but there should be no expectation of financial gain or future value. If you mint $ICDV and you are a US Citizen, reach out with your block number on the ICP ledger and your tax payer information and we will get a 501c3 Tax letter to you so that you can deduct the donation on your taxes.

For each ICP donated there is 1000x bonus. 1 ICP = 1_000 ICDV. (Applies to the first 1000 ICP donated).

Currently Donations are supported through <a href="https://plugwallet.ooo/" target="_blank">Plug Wallet</a>. Follow the link to install and then send ICP from your exchange or from <a href="https://nns.ic0.app" target="_blank">the Network Nervous System.</a>

<div id="root"></div>

<script src="/assets/dist/index.js" defer></script>

You can add the ICDV Token to your favorite wallet by adding a custom ICRC-1 token with the canister ID agtsn-xyaaa-aaaag-ak3kq-cai.

Check out our [educational youtube series](https://www.youtube.com/playlist?list=PLuQrY06IeLwNUgGbGdH9rggewQnaaQHjR) where we developed the ICDV token.

## Giving Levels

### Developers

1. Developer Advisory Board Members(limited) - Liquid Donation of 120+ ICP or Dedicate a 200+ ICP - 8 year neuron
2. Developer Advisor -  12 Liquid ICP or Dedicate a 50+ ICP Neuron(minimum lock 2 years) - This is a bit high because the maturity takes a long time to be claimable at low ICP levels.  We are trying to keep this at ~$100/year and the purpose is to show a long term commitment to the IC.
3. Anything Helps - Reduce your potential tax liability by dedicating your ICP Neurons and avoiding hard to report income. You can undedicate at any time.

### Non-Developers

1. Executive Advisors(limited) - Liquid Donation of 35K ICP or dedicate a 70K ICP 8 year Neuron.
2. Recognized Donor - Liquid Donation of 1000+ ICP or Dedicate a 3K ICP Neuron - Name on the ICDevs.org Site
3. Anything Helps - Reduce your potential tax liability by dedicating your ICP Neurons and avoiding hard to report income. You can undedicate at any time.

### Corporations

1. Diamond - 50K Liquid ICP donation or dedicate a 100K ICP Neuron and start your company's ICP Treasury - Logo on ICDevs.org
2. Gold - 10K Liquid ICP donation or dedicate a 20K ICP Neuron and start your company's ICP Treasury - Logo on ICDevs.org
3. Silver - 2K Liquid ICP donation or dedicate a 5K ICP Neuron and start your company's ICP Treasury - Logo on ICDevs.org
4. Bronze - 400 Liquid ICP donation or dedicate a 1000 ICP Neuron and start your company's ICP Treasury - Logo on ICDevs.org
5. Matching - Offer corporate matching to you employees. Please Contact Us.
6. Other Corporate Donations - Reduce your potential tax liability by dedicating your ICP Neurons and avoiding hard to report income.

## Tax-Deductible Donations:

The following information is informational only. Please consult a Tax Accountant to confirm that the information is relevant to your tax situation.

Ways to donate:
* Cash
* Liquid ICP
* Dedicate a Neuron (Least commitment...just donate your neuron maturity)
* Ethereum
* Bitcoin

The US Tax code allows you to deduct donations up to a certain amount against your income.  You can donate cash or property(tokens) and the tax treatment is different depending on if you are an individual or a corporation.

## Cash Details -

Please mail checks to:
ICDevs.org
27410 Villa Mountain Ct,
Fulshear, TX 77441

Please also email us at donations@icdevs.org with the check information, your address, your Name, and SSN so that we can confirm receipt and deliver you the appropriate documentation for your taxes.

## Liquid ICP Details:

Tax Deductible Donations: c8e78c28beebd305370cfc798bbe96132fcade8ac88ec742084a4e6e248913cf

Anonymous Donations: 93a3506e08e88e1f65f85990451038f7a232b6f860ee706b42cc9edec96eecee

NFT Donation Principal: p75el-ys2la-2xa6n-unek2-gtnwo-7zklx-25vdp-uepyz-qhdg7-pt2fi-bqe

For Tax Deductible Donations, please email us at donations@icdevs.org  the details of your transaction(from address, date, your SSN, Address so that we can deliver you the appropriate documents you will need to document your taxes)

## Dedicate a Neuron

The following instructions may not still be relevant. If you would like to dedicate a neuron, please contact us.

### Step 1. Add ICdevs.org as a hot key to your neuron(so we can see id):

#### using dfx:

Replace YOUR_NEURON_HERE in the following string, then run the command:


dfx canister --network=ic --no-wallet call rrkah-fqaaa-aaaaa-aaaaq-cai manage_neuron "(record {id=opt (record {id=YOUR_NEURON_HERE:nat64}); command=opt (variant {Configure=(record {operation=opt (variant {AddHotKey=record {new_hot_key=opt principal \"ufef3-ic2bp-enpmy-5ezyw-z4p5q-mzgsv-w24y3-2v2b6-ktjpk-cjik4-kae\"}})})})})"


#### using nns:

Navigate to your neuron and click "Add Hotkey".

Enter: ufef3-ic2bp-enpmy-5ezyw-z4p5q-mzgsv-w24y3-2v2b6-ktjpk-cjik4-kae

### Step 2. Follow our neuron for your "Manage neuron topic"

#### using dfx:

Replace YOUR_NEURON_HERE in the following string, then run the command:


dfx canister --network=ic --no-wallet call rrkah-fqaaa-aaaaa-aaaaq-cai manage_neuron "(record {id=opt (record {id=YOUR_NEURON_HERE:nat64}); command=opt (variant {Follow=record {topic=1:int32; followees=vec {record{id=14231996777861930328:nat64}}}})})"


Step 2. Follow our neuron for your "Manage neuron topic"

#### using nns:

Follow Neuron 14231996777861930328 for the Manage Neuron Topic(instructions). This is a bit more complicated as it still requires using the web console. Using chrome:

1. Log into the NNS and navigate to the neuron you want to dedicate.
2. Right click and "Inspect"
3. Go to the Sources Tab and navigate to top/nns.ic0.app/assets/build/EditFollowNeurons......js
4. Search for "followee: s.id" 
5. Add a breakpoint on the await line right above this by clicking the dash in the gutter of the interface. This line should say something like "await e({
6. Leave the console open and go to the "Following" box.
7. Click Edit Followees.
8. Click A topic for which you have 0 followees. ie "Exchange Rate"
9. Expand the topic and click Add Followee
10. Put 14231996777861930328 in the Followee Address box and click "Follow Neuron".
11. Your breakpoint should trigger.
12. Goto the variables panel on the right, Look for "Scope" and expand "closure".
13. Change the variable a to 1.
14. Click the "play" button.
15. Confirm that your neuron now follows 14231996777861930328 for the Manage Neuron Topic.

Please let us know that you've dedicated your neuron or add our neuron as a hot key on your neuron.




## Other Tokens:

### ETH and ETH base ERC20, ETH based NFTs

Tax deductible: 0x4A7C969110f7358bF334b49A2FF1a2585ac372B8

Anonymous: 0x4666fBf259F42ff794A8732A2d9143e1F4a713c0

### BTC:

Tax deductible: 1HcraDyV6cgbmqzCx1H3kknMYaaoZFnCMH

Anonymous: 17UwETY4TQEpchBYby8Nvjv446a8EhGkgk

For Tax Deductible Donations, please email us at donations@icdevs.org the details of your transaction(from address, date, transaction hash, your SSN, Address so that we can deliver you the appropriate documents you will need to document your taxes.