---
layout: home
---

```text
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░╔██████╔███████╔█████░░░╔███████╗██╗░░░░░░██╗╔███████╗░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░╚══██░╔██═════╝║██║░║██░║██╔════╝╚██╗░░░░██╔╝║██╔════╝░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░██░║██░░░░░░║██░░╚╗██║█████╗░░░╚██╗░░██╔╝░║███████╗░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░██░║██░░░░░░║██░░╔██╝║██╔══╝░░░░╚██╗██╔╝░░╚════╗██║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░╔██████═╗██████║█████═╝░║███████╗░░░╚██╔═╝░░░╔███████║░.org░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░╚════╝░░╚═════╝╚════╝░░░╚═══════╝░░░ ╚═╝░░░░░╚═══════╝░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```

# [The Language Project](index.html)

## The Pattern Language

### NSP. Namespaced Interfaces

...how do you provide [INT - Interoperability](interoperability.html) across a broad set of interconnected services.

The Internet Computer will eventually host a broad set of interconnected services.  Some of these services are predictable(such as the transferring of funds or tokens) while some applications will not be conceived of for decades. 

When dealing with a broad set of computing endpoints in a diverse, growing, and dynamic system, it is common to run into confusing naming conflicts.

For example, both a fund transfer interface and a messaging system may have the concept of “send”.  If a third, interoperable service is trying to combine the functionality of these two services it will have to make a decision about which “send” functionality it will want to expose and which it will want to abstract.  This problem is further exacerbated by the Internet Computer because function addressing indexes only on the function name and not on the candid signature of the parameters as well.  This seems to be an intended design decision although other blockchains, and specifically, have chosen to include the parameters in the hashing of an addressable function.  

We have one example of this from the early days of the internet computer where an EXT NFT standard was created with a transfer function that takes the form:

```
type TransferRequest = {
  from : User;
  to : User;
  token : TokenIdentifier;
  amount : Balance;
  memo : ?Memo;
  notify : ?Bool;
  subaccount : ?SubAccount;
};
type TransferResponse = Result<Balance, {
  #Unauthorized: AccountIdentifier;
  #InsufficientBalance;
  #Rejected; //Rejected by canister
  #InvalidToken: TokenIdentifier;
  #CannotNotify: AccountIdentifier;
  #Other : Text;
}>;

transfer: shared (request : TransferRequest) -> async TransferResponse;
```

And a departure labs token that has the transfer function that looks like: 

```
transfer(to : Principal, id : Text)
```

The issue arises that if you want to have your NFT service act as an interoperable service and to take advantage of other interoperable services, you are now stuck with a dilemma of picking the ‘right’ or ‘most valuable’ standard. You can either implement the EXT transfer or the Departure transfer but not both.

In order to eliminate this issue, all consumable services should implement namespaced functions.  The EXT token should expose the same functionality at com_ext_nft_transfer and departure should expose com_departure_nft_transfer.  By doing this an NFT builder can expose both functions and then any service that speaks either EXT or departure can consume, transfer, reference, and amplify the value of the developer’s NFT service.

While these namespaces are not “pretty” they do, if selected well, provide some essential information at the point of invocation at least provide improved context for the trade-off in readability.

We should be clear to define what a "consumable" service is.  These are update calls or query calls that you expect external services to use or consume to interact with your service.  These are functions at the edge of your system that you expect, want, and encourage 3rd parties to use.  You do not need to use namespaces between your systems canisters that implement a larger system.  In an ideal world, the signature of these namespaces will not change and they will not 'go away'.  An upgrade of a service should likely add a _v2 or some other version indicator to the function while leaving the former in place with any missing information handled via defaults.  For example, com_ext_token_transfer(address, amount) could become com_ext_token_transfer_v2(address, amount, fee) where the initial version implements a default fee for backwards compatibility.

Further, developers should refuse to implement a ‘standard’ if it is not namespaced.  Any existing services should be retrofitted with a set of namespaced endpoints and any services using unnamespaced endpoints should be upgraded to use the namespaced endpoints.

The sooner this pattern can be adopted and implemented the better.  As more ‘blackeholed’ services are pushed onto the IC this will become a harder and harder pattern to implement.

We include the ICP ledger and NNS in this proposed pattern and suggest that any public functions should be exposed via a namespaced function.  For example:

Ledger:

```
com_icpstandard_send
com_icpstandard_balance
com_icpstandard_get_blocks
```

NNS:

```
com_nns_manage_neuron
Etc
```

By setting an example at the root level, the DFINITY foundation can help extend this pattern throughout the ecosystem.

Therefore:  When authoring standards and creation publicly consumable functions on the Internet Computer, use namespaced functions.  When consuming services, refuse to use non-namespaced functions.  Make and adopt a proposal to add namespaced interfaces to IC management canisters.


