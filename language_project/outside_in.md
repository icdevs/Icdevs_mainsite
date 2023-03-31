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

### Outside In

Supports: [DDP. DECENTRALIZED DATA PROVISION](decentralized_data_provision.html)

Prioritize notifying external data providers of data needs. Encourage data provision through decentralized push mechanisms.

#### Context:

Smart contract systems often require external data for critical operations. Ensuring the accuracy and reliability of this data while maintaining decentralization is essential for system integrity.

#### Problem:

Relying on HTTP outcalls to pull data from external sources may compromise decentralization and introduce fragility into the system. A more resilient approach involves pushing data into the system from external sources through decentralized means.

#### Forces:

* Decentralization: Encouraging a decentralized approach to data provision in smart contract systems.
* Data reliability: Ensuring the data provided by external sources is accurate and reliable.
* System robustness: Maintaining the overall reliability and resilience of the smart contract system.
Communication efficiency: Facilitating seamless data provision without relying on HTTP outcalls.

#### Solution:

Design smart contract systems to prioritize notifying external data providers of their data needs, thereby encouraging data provision through decentralized push mechanisms. By shifting the responsibility of data provision to external providers and promoting a push-based approach, developers can reduce reliance on HTTP outcalls and maintain the decentralized nature of their smart contract systems. This approach can also foster competition among data providers and incentivize them to deliver accurate and timely data. To implement this solution, use on-chain events or other communication channels to notify data providers about data requests, and design the system to accept data input through transactions or decentralized protocols. This outside-in approach helps ensure system robustness and resilience while preserving the core principles of decentralization.