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

### Fallback Mechanisms

Supports: [DVR. DATA VERIFICATION AND REDUNDANCY](data_verification_redundancy.html), [ASD. ADAPTABLE SYSTEM DESIGN](adaptable_system_design.html)

Implement backup data sources and strategies. Ensure system reliability during primary data source failures.

#### Context:

Smart contract systems often rely on external data sources, which can sometimes fail or become unavailable. Maintaining system functionality during such events is essential for a robust and reliable architecture.

#### Problem:

A failure or unavailability of the primary data source can compromise the functionality and reliability of a smart contract system, potentially leading to undesirable consequences.

These failures can be amplified during black swan events in a way that overcomes the best laid redundancy plan.

#### Forces:

* System robustness: Ensuring the system can continue to function despite primary data source failures.
* Data reliability: Maintaining access to accurate and reliable data during data source failures.
Redundancy: Implementing backup data sources and strategies without excessive resource consumption.
* Ease of implementation: Designing fallback mechanisms that can be easily integrated into the system architecture.

#### Solution:

Design and implement fallback mechanisms that enable the smart contract system to continue functioning when the primary data source fails or becomes unavailable. These mechanisms can include backup data sources, alternative data retrieval methods, or even temporary suspension of specific functions until the primary data source is restored. By ensuring that the system can maintain its functionality during primary data source failures, developers can create more robust and reliable smart contract systems that are less susceptible to external dependencies.


