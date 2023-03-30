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

### Single Trusted Party Authorization

Use HTTP outcalls when only one trusted party is authorized to provide data. Recognize the necessity of centralization in specific scenarios.

#### Context:

Smart contract systems sometimes require data from a single, authorized provider due to regulatory requirements, specialized expertise, or unique access to information.

#### Problem:

In cases where a single trusted party is the only authorized source of data, relying on decentralized data sources may not be feasible.

#### Forces:

* Centralization trade-off: Balancing the need for decentralization with the reality of single trusted party authorization.
* Data accuracy: Ensuring the data provided by the trusted party is accurate and reliable.
* Compliance: Adhering to regulatory or contractual requirements that mandate single trusted party authorization.
* System integrity: Maintaining the overall reliability and robustness of the smart contract system.

#### Solution:

In scenarios where only one trusted party is authorized to provide specific data, use HTTP outcalls to integrate with the external data source. Acknowledge that centralization may be necessary or more efficient in certain situations, and carefully evaluate the trade-offs involved. To maintain system integrity, implement additional verification or fallback mechanisms where possible to minimize the risks associated with relying on a single data source.


