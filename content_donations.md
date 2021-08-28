# 💰Donations

ICDevs.org is funded by the Internet Computer community.  Raising funds is essential for us to continue to be able to provide the services that are core to our missing.  There are lots of ways to give and the structure of the ICP token gives us additional creative ways for the community to support our work.

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

Tax Deductable Donations: c8e78c28beebd305370cfc798bbe96132fcade8ac88ec742084a4e6e248913cf

Anonymous Donations: 93a3506e08e88e1f65f85990451038f7a232b6f860ee706b42cc9edec96eecee

For Tax Deductible Donations, please email us at donations@icdevs.org  the details of your transaction(from address, date, your SSN, Address so that we can deliver you the appropriate documents you will need to document your taxes

## Dedicate a Neuron

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
3. Go to the Sources Tab and navigate to top/nns.ic0.app/ic_agent.js
4. Search for "this.follow = async (request)" (about line 1793)
5. Add a breakpoint on the next line by clicking the line number. This line should say something like "const rawRequest = this.requestConverters.fromFollowRequest(request)"
6. Leave the console open and go to the "Following" box.
7. Click Edit Followees.
8. Click A topic for which you have 0 followees. ie "Exchange Rate"
9. Expand the topic and click Add Followee
10. Put 14231996777861930328 in the Followee Address box and click "Follow Neuron".
11. Your breakpoint should trigger.
12. Hold your mouse over the 'request' variable on the line. This should bring up an interface to edit the properties of the request.
13. Change the topic to 1.
14. Click the "play" button.
15. Confirm that your neuron now follows 14231996777861930328 for the Manage Neuron Topic.






## Other Tokens:

### ETH and ETH base ERC20

Tax deductable: 0x4A7C969110f7358bF334b49A2FF1a2585ac372B8
Anonymous: 0x4666fBf259F42ff794A8732A2d9143e1F4a713c0

### BTC:

Tax deductible and Anonymous: 1HcraDyV6cgbmqzCx1H3kknMYaaoZFnCMH

For Tax Deductible Donations, please email us at donations@icdevs.org the details of your transaction(from address, date, transaction hash, your SSN, Address so that we can deliver you the appropriate documents you will need to document your taxes.