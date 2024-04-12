---
layout: post
title:  "Bounty - EVM OpCodes and Precompiles in Motoko"
date:   2024-02-9 00:00:00 -0600
categories: "Bounties"
author: Austin Fatheree
---

# ICDevs.org - EVM OpCodes and Precompiles for Motoko - #63

## Current Status: Discussion

* Discussion (02/09/2024)
* Ratification: (02/09/2024)
* Open for application: (02/09/2024)
* Assigned (04/02/2024) - Github: timk11
* In Review 
* Closed 

[Forum Link - Discussion]()

## Bounty Details

* Bounty Amount: 1.9 ckETH.
* Developer Type: Individual
* Opened: TBD
* Time Commitment: A few weeks.
* Project Type: Motoko Library
* Experience Type: Expert - Crypto OG and deep EVM understanding necessary

## Funding

These bounties were funded by the IC community through the [Gitcoin Grants Season 19](https://grants.gitcoin.co/) initiative. Thank you all for your contribution.

## Bounty Goal

We are funding the creation of a set of motoko EVM opcodes and precompiles. Implementation of Ethereum Virtual Machine (EVM) opcodes in motoko is an educational and potentially foundational exercise.  The benefit to the broader ecosystem are first allowing motoko canisters to simulate transactions and longer-term to build a motoko EVM that can be used to simulate other networks or bootstrap new, purpose built EVMs.

## Intro

Please consult [this list of opcodes](https://www.evm.codes/) and [this list of precompiles](https://www.evm.codes/precompiled) for more information about EVM Opcodes and Precompiles. For more information on the implementation of each opcode and precompile

## Assumptions

We do not currently have a fully functioning EVM in motoko.  For this bounty we will assume the following Execution Context as necessary to complete the Bounties. In the future a full EVM engine can populate these:

```motoko
import Stack "mo:base/Stack";

type Address = Blob;
type Byte = Nat8;
type Word = Nat; //256-bit for EVM compliance. Op codes will need to validate that results do not exceed 256-bit numbers and take overflows into consideration
type OpCode = (Nat8,?Blob); // Considering opcodes range from 0x00 to 0xFF. plus a set of bytes that can be included

// A simplified representation of the stack element in EVM.
type StackElement = Nat; // May need to represent 256-bit integers.

// A simplified structure for representing EVM memory.
// uses https://github.com/research-ag/vector
type Memory = Vec<Byte>;

// Represents the EVM storage, mapping 32-byte keys to 32-byte values.
type Storage = Map<[Nat8], [Nat8]>; 

type LogEntry = {
  topics: Vec<Blob>; // Topics are usually the hashed event signature and indexed parameters
  data: Blob; // Non-indexed event parameters
};

type Logs = Vec<LogEntry>;

type StorageSlotChange = {
  key: Blob; // Storage key, typically a 32-byte array.
  originalValue: ?[Nat8]; // Optional, represents the value before the change. `None` can indicate the slot was empty.
  newValue: ?[Nat8]; // Optional, represents the value after the change. `None` can indicate a deletion.
};

type CodeChange = {
  key: Blob; // Storage key, typically a 32-byte array.
  originalValue: Array<OpCode>; // Optional, represents the value before the change. `None` can indicate the slot was empty.
  newValue: ?Array<OpCode>; // Optional, represents the value after the change. `None` can indicate a deletion.
}; //code may not be changeable...only deletable

// The execution context of an EVM call.
type ExecutionContext = {
  origin: Blob; //originator of the transaction
  code: Array<OpCode>; // Array of opcodes constituting the smart contract code.
  programCounter: Nat; // Points to the current instruction in the code.
  stack: Stack.Stack<StackElement>; // The stack used for instruction params and return values.
  memory: Memory; // Memory accessible during execution.
  contractStorage: Storage; // Persistent storage for smart contracts.
  caller: Address; // Address of the call initiator.
  callee: Address; // Address of the contract being executed.
  currentGas: Nat; // Amount of gas available for the current execution.
  gasPrice: Nat; // Current gas price.
  incomingEth: Nat; //amount of eth included with the call
  balanceChanges: vec<({
    from: Blob;
    to: Blob;
    amount: Nat;
  })>; //keep track of eth balance changes and commit at the end. Each new context will have to adjust balances based off of this array.
  storageChanges: Map<(Blob, StorageSlotChange)>;
  codeAdditions: Map.Map<Blob, CodeChange>; //storage DB for EVM code stored by Hash Key
  blockHashes: vec<(Nat,Blob)>; //upto last 256 block numbers and hashs
  codeStore: Map.Map<Blob, Array<OpCode>>; //storage DB for EVM code stored by Hash Key
  storageStore: Trie.Map<Blob, Blob>; //storage DB for Contract Storage stored by Hash Key. CALL implementors will need to keep track of storage changes and revert storage if necessary.
  accounts: Trie.Trie<Blob,Blob>; //a merkle patricia tree storing [binary_nonce, binary_balance, storage_root, code_hash] as RLP encoded data - the account bounty hunter will need to create encoders/decoders for use with the trie -  https://github.com/relaxed04/rlp-motoko - https://github.com/f0i/merkle-patricia-trie.mo
  logs: Logs; //logs produced during execution
  var totalGas : Nat; // Used for keeping track of gas
  var gasRefund : Nat; // Used for keeping track of gas refunded
  var return : ?Blob; set for return
  blockInfo: {
    number: Nat; //current block number
    gasLimit: Nat; //current block gas limit.
    difficulty: Nat; //current block difficulty;
    timestamp: Nat; //current block timestamp
    coinbase: Blob;
    chainId: Nat;
  };
  calldata: Blob; // Input data for the contract execution.
};

Your op code functions should take in the execution context as in input variable and update it as is demanded by the op code.

```

## EVM Opcodes for Motoko Implementation

 This document categorizes and lists the opcodes in numerical order within each category, providing a structured schema for implementation in Motoko programming language.

### Basic Math and Bitwise Logic - 0.2 ckETH

- `01` ADD
- `02` MUL
- `03` SUB
- `04` DIV
- `05` SDIV
- `06` MOD
- `07` SMOD
- `08` ADDMOD
- `09` MULMOD
- `0A` EXP
- `0B` SIGNEXTEND
- `10` LT
- `11` GT
- `12` SLT
- `13` SGT
- `14` EQ
- `15` ISZERO
- `16` AND
- `17` OR
- `18` XOR
- `19` NOT
- `1A` BYTE
- `1B` SHL
- `1C` SHR
- `1D` SAR

The Basic Math and Bitwise Logic section encompasses a collection of EVM opcodes dedicated to performing elementary arithmetic operations, such as addition, subtraction, multiplication, and division, as well as bitwise operations including AND, OR, XOR, and NOT. These opcodes serve as the foundational building blocks for more complex contract logic and computations on the Ethereum Virtual Machine (EVM), and replicating their functionality within the Motoko environment is essential for EVM compatibility.

#### Structure and Operation

Implementing these opcodes within the Motoko programming language requires careful attention to the specifics of each operation, including handling overflows, underflows, and division by zero in accordance with the EVM’s behavior. Each opcode function should accept the `ExecutionContext` as an input variable and modify this context as dictated by the opcode's semantics, ensuring changes are reflected across the stack, memory, and any intermediate computations.

For arithmetic operations such as `ADD`, `SUB`, `MUL`, and `DIV`, the opcodes should manage 256-bit integer arithmetic, respecting the bounds of these operations as per the EVM specification. Bitwise operations (`AND`, `OR`, `XOR`, `NOT`) operate directly on the binary representations of these integers, enabling manipulation of data at the bit level.

#### Execution Implementation

- **Stack Manipulation**: Most arithmetic and bitwise operations consume operands from the stack and push the result back onto the stack. Implementations should carefully manage stack underflows and overflows.
- **Validation**: Ensure that inputs to each operation are within the appropriate ranges and that operations which are undefined or result in overflow/underflow conditions are handled gracefully, either by reverting the operation or by following defined EVM behavior (e.g., wrapping or returning special values).
- **Return Values**: All operations should ensure that their results are appropriate for the operation performed, keeping within the 256-bit size limit, and are pushed back onto the stack as per the operation’s definition.

### Environmental Information and Block Information - 0.15 ckETH

- `30` ADDRESS
- `31` BALANCE
- `32` ORIGIN
- `33` CALLER
- `34` CALLVALUE
- `35` CALLDATALOAD
- `36` CALLDATASIZE
- `37` CALLDATACOPY
- `38` CODESIZE
- `39` CODECOPY
- `3A` GASPRICE
- `3B` EXTCODESIZE
- `3C` EXTCODECOPY
- `3D` RETURNDATASIZE
- `3E` RETURNDATACOPY
- `3F` EXTCODEHASH
- `40` BLOCKHASH
- `41` COINBASE
- `42` TIMESTAMP
- `43` NUMBER
- `44` DIFFICULTY
- `45` GASLIMIT
- `46` CHAINID
- `47` SELFBALANCE
- `48` BASEFEE

The Environmental Information category of opcodes allows smart contracts to access information about the blockchain environment in which they are executed. These opcodes provide functionalities to retrieve details such as the address of the caller, the contract itself, the balance of an account, input data of a call, and more. Implementing these opcodes in Motoko is crucial for building an EVM-compatible environment, enabling smart contracts to make decisions based on their current execution context.

#### General Operation

When implementing these opcodes, the bounty hunter should consider that each opcode is designed to retrieve specific environmental information and interact with the `ExecutionContext` data structure accordingly. The structure of your op code calls should be as follows:

1. **Input Handling**: Each opcode function should accept the `ExecutionContext` as an input. This context contains all necessary information about the current state of execution, such as caller's address, contract address, call value, and more.

2. **Operation Execution**: Based on the opcode being implemented, extract the required information from the appropriate field within the `ExecutionContext`. For example, `CALLER` would retrieve the address of the initiator of the current call from the `caller` field.

3. **Stack Update**: After retrieving the required information, push the result onto the stack contained within the `ExecutionContext`. Ensure that the data type and size are compliant with the EVM standards (e.g., addresses and balances should be represented as 256-bit integers).

4. **Return and Update**: The opcode function should not return any value directly. Instead, it updates the `ExecutionContext` that was passed as an input, reflecting changes on the stack, and any other relevant modifications based on the opcode's logic.

#### Specific Considerations

- **Balance Queries (`BALANCE`)**: When implementing opcodes like `BALANCE`, ensure you're querying the correct information source within the `ExecutionContext`. For instance, you might need to access both the `accounts` data structure and the `balanceChanges` vector to accurately calculate the current balance of a queried address, taking into account any in-flight transactions or changes during execution.

- **Environmental Data (`CALLDATALOAD`, `CALLDATASIZE`, `CALLDATACOPY`)**: For opcodes that interact with call data, make sure to handle data offsets and lengths accurately, ensuring safe access to the `calldata` field without risking out-of-bounds errors.

- **Gas and Blockchain Context (`GASPRICE`, `BLOCKHASH`, `CHAINID`)**: Implementing these opcodes requires careful handling of the `ExecutionContext`'s fields related to blockchain context and execution gas. Remember to access the correct information, considering potential updates during transaction execution.

- Block information opcodes like `TIMESTAMP`, `NUMBER`, and `DIFFICULTY` are useful for operations that depend on blockchain specifics, like generating randomness or enforcing time-dependent conditions.

### Memory Operations - 0.3 ckETH

- `50` POP
- `51` MLOAD
- `52` MSTORE
- `53` MSTORE8
- `54` SLOAD
- `55` SSTORE
- `56` JUMP
- `57` JUMPI
- `58` PC
- `59` MSIZE
- `5A` GAS
- `5B` JUMPDEST

The Memory Operations category encompasses a variety of EVM opcodes designed to interact with and manipulate the memory space available during the execution of smart contracts. Memory in the EVM is a volatile data storage area that is erased between external function calls and transactions. The primary purpose of these operations is to enable the reading, writing, and management of data in memory during contract execution, allowing for dynamic data manipulation within the scope of a single transaction or function call.

#### General Operation

Implementation of memory operations opcodes in Motoko requires understanding and manipulation of the `Memory` data structure within the `ExecutionContext`. Memory operations include loading data from memory (`MLOAD`), storing data in memory (`MSTORE`, `MSTORE8`), and querying the size of the active memory space (`MSIZE`). Additionally, there are opcodes dedicated to jumping within the contract code, based on conditions (`JUMP`, `JUMPI`, `JUMPDEST`), and accessing or modifying the program counter (`PC`).

1. **Memory Access**: The `Memory` type, represented as a vector of bytes (`Vec<Byte>`), should be accessed and modified by memory opcodes. For instance, `MLOAD` reads a specific location from memory, while `MSTORE` writes to a given location.

2. **Data Encoding and Decoding**: Memory operations might require encoding data into EVM's big-endian format before storing and decoding it back into Motoko's native types upon loading. Careful management of data sizes and alignments according to the specification is crucial.

3. **Dynamic Memory Expansion**: The size of the `Memory` should dynamically increase to accommodate writes to previously unallocated areas. This expansion should be reflected in the `MSIZE` operation and factored into gas calculations, as memory expansion incurs gas costs.

4. **Jump Operations**: Implementations of `JUMP` and `JUMPI` must validate the destination against a list of valid jump destinations (denoted by `JUMPDEST` opcodes) within the contract code. This is a critical security mechanism to prevent unauthorized jumps to arbitrary code locations.

#### Execution Implementation

- **Memory Initialization**: Initially, memory is empty. The first store operation should allocate memory space dynamically, conforming to the EVM gas costing for memory expansion.
  
- **Bounds and Safety Checks**: Memory operations should include bounds checking to prevent overflows and underflows. For instance, attempting to read beyond the current memory size should either result in an error or return zeros (consistent with EVM behavior).

- **Program Counter Management**: For jump operations (`JUMP`, `JUMPI`), updating the `programCounter` within the `ExecutionContext` accurately is critical to ensure proper execution flow. Validation against `JUMPDEST` instructions ensures that jumps are only made to authorized points in the code.

- **Gas Calculation**: The implementation must calculate the gas costs for memory operations, particularly for memory expansion. This includes updating the `currentGas` within the `ExecutionContext`, following the EVM's gas pricing structure.


#### Push Operations, Duplication Operations, Exchange Operations  - 0.1 ckETH

- `5F` PUSH0
- `60` PUSH1
- `61` PUSH2
- `62` PUSH3
- `63` PUSH4
- `64` PUSH5
- `65` PUSH6
- `66` PUSH7
- `67` PUSH8
- `68` PUSH9
- `69` PUSH10
- `6A` PUSH11
- `6B` PUSH12
- `6C` PUSH13
- `6D` PUSH14
- `6E` PUSH15
- `6F` PUSH16
- `70` PUSH17
- `71` PUSH18
- `72` PUSH19
- `73` PUSH20
- `74` PUSH21
- `75` PUSH22
- `76` PUSH23
- `77` PUSH24
- `78` PUSH25
- `79` PUSH26
- `7A` PUSH27
- `7B` PUSH28
- `7C` PUSH29
- `7D` PUSH30
- `7E` PUSH31
- `7F` PUSH32
- `80` DUP1
- `81` DUP2
- `82` DUP3
- `83` DUP4
- `84` DUP5
- `85` DUP6
- `86` DUP7
- `87` DUP8
- `88` DUP9
- `89` DUP10
- `8A` DUP11
- `8B` DUP12
- `8C` DUP13
- `8D` DUP14
- `8E` DUP15
- `8F` DUP16
- `90` SWAP1
- `91` SWAP2
- `92` SWAP3
- `93` SWAP4
- `94` SWAP5
- `95` SWAP6
- `96` SWAP7
- `97` SWAP8
- `98` SWAP9
- `99` SWAP10
- `9A` SWAP11
- `9B` SWAP12
- `9C` SWAP13
- `9D` SWAP14
- `9E` SWAP15
- `9F` SWAP16

##### Push Operations

- `PUSH1` `0x60` to `PUSH32` `0x7F`: These opcodes push 1 to 32 bytes onto the stack, respectively. The number of bytes to push is determined by the opcode. For example, `PUSH1` pushes 1 byte and `PUSH32` pushes 32 bytes onto the stack. The bytes are read from the program immediately following the opcode.

##### Duplication Operations

- `DUP1` `0x80` to `DUP16` `0x8F`: These opcodes duplicate 1 to 16th stack element to the top of the stack, respectively. For example, `DUP1` duplicates the top stack element, and `DUP16` duplicates the 16th stack element from the top.

##### Exchange Operations

- `SWAP1` `0x90` to `SWAP16` `0x9F`: These opcodes swap the top stack element with one of the 1 to 16th elements below it. For example, `SWAP1` swaps the top two elements of the stack, and `SWAP16` swaps the top element with the 16th element below it.

#### Implementation Guidelines for Push, Duplication, and Exchange Operations

##### Push Operations

1. **Operation Execution**: The next 1 to 32 bytes in the program after the opcode determine the value to be pushed onto the stack. Implementations must account for the correct number of bytes to read based on the opcode used.
2. **Program Counter Increment**: The program counter should be incremented by the number of bytes pushed plus one for the opcode itself.

##### Duplication Operations

1. **Stack Validation**: Before duplication, check that the stack contains enough elements to perform the requested `DUP` operation. Attempting to duplicate an element not present should result in an error.
2. **Duplication Logic**: Copy the specified stack element to the top of the stack without removing the original element. This increases the stack size by one.

##### Exchange Operations

1. **Stack Validation**: Verify that the stack has enough elements to perform the swap operation. An attempt to swap with an element not present on the stack should lead to an error.
2. **Swap Logic**: Exchange the positions of the specified elements on the stack. Unlike duplication, this does not modify the size of the stack but changes the order of elements.

##### General Considerations

- **Gas Calculation**: Each of these operations has a specific gas cost associated with it. Ensure the correct deduction of gas from the `currentGas` in the `ExecutionContext` for each operation performed.
- **Error Handling**: Implement error handling for invalid operations, such as attempting to duplicate or swap with an element not present on the stack, or pushing more data than allowed.
- **Memory Management**: Ensure that these operations do not result in unauthorized memory access or modification beyond the stack’s current bounds.
- **Testing**: Rigorously test these operations for a wide variety of cases, including edge cases in stack manipulation and under different execution contexts.

#### Logging Operations - 0.05 ckETH

- `A0` LOG0
- `A1` LOG1
- `A2` LOG2
- `A3` LOG3
- `A4` LOG4

Logging operations in the EVM are essential for emitting events that can be consumed by external entities monitoring blockchain activity. These opcodes (`LOG0` to `LOG4`) allow smart contracts to record indexed information and data blobs, which external applications can use to track contract events, state changes, or any notable occurrences dictated by the contract logic.

#### General Operation

Implementing logging opcodes in Motoko requires interaction with the `ExecutionContext` to update the `logs` vector with new log entries. Each `LOG` opcode differs in the number of topics it allows for indexing, ranging from zero (`LOG0`) to four (`LOG4`). The data portion of the log is a binary blob, which can contain arbitrary data from the contract's execution environment.

Bounty hunters implementing these opcodes should structure their operations as follows:

1. **Data and Topic Extraction**: Retrieve the data to be logged and the topics (if any) from the stack. The number of topics will vary depending on the specific `LOG` opcode being executed.
2. **Log Entry Creation**: Construct a `LogEntry` by packaging the extracted topics and data. The structure of a `LogEntry` includes a list of topics (`Vec<Blob>`) and the data blob itself (`Blob`).
3. **Update ExecutionContext**: Append the newly created `LogEntry` to the `logs` vector within the `ExecutionContext`. This ensures that all emitted logs are captured in the context of the current transaction execution.
4. **Gas Calculation**: Account for the gas costs associated with logging operations. These costs are determined by the size of the data and the number of indexed topics. Updating the `currentGas` field in the `ExecutionContext` appropriately ensures that gas usage reflects the computational and storage resources consumed by logging.

#### Specific Considerations

- **Topic Limitations**: The number of topics allowed in a log entry is limited by the specific `LOG` opcode used. Ensure that your implementation respects these limits and properly handles cases where too many topics are provided.

#### Advanced Tips

- Optimize log data storage by considering compression or encoding techniques for the data blobs, especially if large amounts of data need to be logged. However, remember that any data transformation must be easily reversible for log consumers.
- Provide utility functions within the Motoko implementation that simplify the generation of topics, especially for hashing event signatures or encoding indexed event parameters.
- Ensure thorough testing of log operations, including edge cases related to topic and data sizes, to guarantee that logs are reliably emitted and recorded within the `ExecutionContext`.

#### Output of Logging

Logging operations do not produce a direct output on the stack but modify the execution context's state by appending new entries to the `logs` vector. This indirect output is instrumental for off-chain applications and tools to monitor, index, and interpret contract activity, making these operations crucial for contract transparency and external integration.

### Execution and System Operations 0.6 ckEth

- `00` STOP
- `FD` REVERT
- `FE` INVALID
- `FF` SELFDESTRUCT
- `F0` CREATE
- `F1` CALL
- `F2` CALLCODE
- `F3` RETURN
- `F4` DELEGATECALL
- `F5` CREATE2
- `FA` STATICCALL
- `FB` TXHASH
- `FC` CHAINID

This category encompasses a range of EVM opcodes designed for controlling contract execution flow, system-level interactions, and the creation and management of contracts. These operations are critical for implementing contract logic that responds to execution conditions, interfaces with other contracts, and dynamically generates new contracts. Understanding the nuances of these opcodes is essential for building compliant and secure smart contracts on an EVM-compatible platform like the Internet Computer (IC) using Motoko.

#### General Operation

Execution and system operations, within the context of Motoko and the Internet Computer's architecture, must meticulously manage the `ExecutionContext` to accurately reflect changes in state, control flow, and contract interactions. The design of these opcode functions demands careful consideration of the IC's unique features, such as cycles management and canister interactions, while adhering to EVM specifications. Here are crucial points to consider while implementing these opcodes:

1. **Flow Control**: Opcodes like `STOP`, `RETURN`, and `REVERT` are fundamental in managing the execution flow. They dictate the end of execution, returning data to the caller or reverting state changes, respectively. Implementations must ensure that these opcodes accurately update the `ExecutionContext`, particularly setting the `return` field where appropriate, and managing gas accounting for partial or full executions.

2. **Error and Exception Handling**: The `INVALID` opcode represents an explicit exception in contract execution, typically leading to the termination of execution and reverting of all changes. Motoko implementations must correctly signal errors and ensure that state changes are not persisted in such cases, aligning with the atomic transaction model of the EVM.

3. **Contract Creation and Interaction**: The `CREATE`, `CREATE2`, `CALL`, and `DELEGATECALL` opcodes facilitate the dynamic creation of contracts and interaction between contracts. These require intricate handling of the `ExecutionContext` to simulate nested transactions/calls within the IC's environment. Implementors must manage the creation of new `ExecutionContexts` for each call or contract creation, accurately passing gas, value, and data between contexts, and correctly merging state changes upon successful completion.

4. **System Level Information and Operations**: Opcodes like `CHAINID` and `TXHASH` provide access to blockchain-specific data. Implementations must derive these values from the IC's environment or simulate equivalent values where direct analogues might not exist.

#### Execution Implementation Guidelines

- **State Isolation and Commitment**: Ensure isolation between execution contexts for `CALL` and `CREATE` operations, committing state changes only upon successful execution. Revert state changes on operation failures.
  
- **Gas Management**: Accurately calculate and deduct gas costs for execution and system operations, updating `currentGas` in `ExecutionContext`. Implement gas forwarding rules for calls and creations, respecting gas stipends for calls with value transfers.

- **Return Data Handling**: For the `RETURN` and `REVERT` operations, properly set the `return` field in the `ExecutionContext` to manage returning data to the caller or reverting state with an error message.

- **Secure Contract Interaction**: Validate destination addresses for `CALL` and `DELEGATECALL` operations, ensuring they reference valid contracts or precompiles. For `CREATE` and `CREATE2`, implement address generation according to EVM specifications and ensure non-collision with existing addresses.

#### Additional Considerations

- **`SELFDESTRUCT` Implementation**: Implement self-destruct functionality with caution, considering the permanence of such an action within the IC's architecture. This might involve marking contracts as inactive rather than deleting them, reflecting the EVM’s semantics while aligning with the IC's model.

- **Security and Compliance**: Rigorously test opcode implementations against common security pitfalls and compliance with EVM specifications. This includes handling deep call stacks, stack underflows/overflows, and ensuring atomicity of transactions.

### Precompiles - 0.4 chETH

- `0001` ECDSA Recovery (Elliptic Curve Digital Signature Algorithm) 
- `0002` SHA-256 Hash Function 
- `0003` RIPEMD-160 Hash Function 
- `0004` Identity Function (Data Copy) 
- `0005` Modular Exponentiation 
- `0006` Elliptic Curve Addition 
- `0007` Elliptic Curve Scalar Multiplication 
- `0008` Elliptic Curve Pairing Check 
- `0009` Blake2 Compression Function F

Precompiled contracts in Ethereum are a set of contracts provided as part of the Ethereum protocol. These contracts are implemented at the protocol level but are presented and interacted with as if they are smart contracts at specific addresses. Precompiles are designed to perform specific, computationally intensive operations such as cryptographic operations or hashing at a lower gas cost than if they were implemented in EVM bytecode in a regular contract. This makes certain operations practical and efficient within the blockchain context, which otherwise would be prohibitively expensive and slow.

#### General Operation

When implementing precompile operations in Motoko for the Internet Computer (IC) Ecosystem, bounty hunters should structure their opcode calls to simulate the behavior of these precompiled contracts closely. Given that the IC does not natively support these operations as precompiles, developers must create efficient Motoko implementations that mimic their Ethereum counterparts. The precompiles address a range of operations, from cryptographic functions like ECDSA recovery to various hashing functions, each having a unique precompile address in Ethereum. Various libraries may be imported to support the implementation of these precompiles. In instances where an existing library does not exist, the developer should implement it.

These bounty hunter should intercept any CALL(or related) opcodes that might reference the precompile addresses and route operation through the developed precompile functions.

1. **Efficiency and Accuracy**: Implementations must focus on both computational efficiency and accuracy. Since the primary advantage of precompiles lies in their low gas cost for complex operations, your Motoko implementation should aim to be as optimized as possible while producing the correct results.

2. **Execution Context Interaction**: Similar to EVM opcodes, precompile function calls must accept and interact with the `ExecutionContext`. While they may not alter the execution context as extensively as some opcodes do, they must accurately calculate and deduct their gas costs based on the input size and operation complexity, updating the `ExecutionContext`'s `currentGas`.

3. **Return Values and Error Handling**: Precompile calls are expected to return values or throw errors in specific cases, much like regular smart contract functions. Successful operations should return their result in a manner expected by EVM semantics (typically pushing the result onto the stack), and errors or exceptions should revert any changes made during their execution, preserving the atomicity of transactions.

#### Implementation Guidelines

- **Interface Definition**: Define a clear and consistent interface for each precompile, considering the input parameters and expected output. This assists in abstracting the precompile's implementation and facilitating future optimizations or revisions.

- **Gas Costing**: Implement gas costing according to the predefined rules set by the Ethereum specifications for each precompile. Accurate gas calculation ensures the economic equivalence of precompile operations across Ethereum and the IC Ecosystem.

- **Testing and Validation**: Rigorous testing is essential. Compare your outputs against known outputs generated by Ethereum's precompiles to validate correctness. Consider edge cases and input extremes to ensure reliability and robustness.

- **Documentation**: Provide comprehensive documentation for each precompile implementation, detailing the operation performed, expected inputs, outputs, and any limitations or deviations from Ethereum's behavior. Documentation supports maintainability and usability by other developers in the ecosystem.

## Unit Testing Guidelines

Testing is a crucial aspect of software development, ensuring that each module of your code behaves as expected under various conditions. For the implementation of EVM opcodes and precompiles in Motoko, we recommend a robust approach to unit testing, covering each opcode's functionality comprehensively. This section outlines key considerations and recommendations for writing effective unit tests for the opcodes implementation.

### Fundamental Practices

1. **Opcode Behavior**: Every opcode has a specified behavior, including how it manipulates the stack, interacts with the memory, alters the program counter, etc. Unit tests should verify these expected behaviors rigorously.
2. **Boundary Conditions**: Pay special attention to testing boundary conditions. This includes testing opcodes with maximum and minimum possible values, ensuring correct overflow and underflow handling, and verifying behavior with edge case inputs.
3. **Gas Calculation**: Precision in gas calculation is vital. Unit tests must include checks for accurate gas consumption by each opcode, aligning with the EVM specifications.

### Specific Recommendations

#### Stack Manipulation Opcodes

- **Underflow and Overflow**: Test cases should include scenarios where stack operations could lead to underflow (e.g., attempting to pop more elements than are on the stack) or overflow (pushing more elements onto the stack than its maximum capacity).

#### Arithmetic Opcodes

- **`ADD`, `MUL`, `SUB`, `DIV`, etc.**: Apart from normal operation, include tests for special cases like division by zero, multiplication resulting in overflow, and subtraction resulting in underflow.
- **Boundary Testing**: Ensure that the maximum and minimum values are handled correctly, especially for unsigned integers where negative numbers should cause underflow.

#### Memory and Storage Operations

- **`MLOAD`, `MSTORE`, `SLOAD`, `SSTORE`**: It's crucial to test not only successful reads and writes but also attempts to access invalid memory or storage locations (e.g., out-of-bounds or unallocated memory).
- **Memory Expansion**: Test memory expansion logic, ensuring that memory size adjusts and costs are calculated correctly as memory grows.

#### Jump and Conditional Operations

- **`JUMP`, `JUMPI`**: Test for both valid and invalid jump destinations, ensuring that `JUMPDEST` validation is correctly implemented.
- **Conditional Execution**: For `JUMPI`, include scenarios where the jump should and should not be taken, based on the condition provided.

#### Precompiles
- **Input Validation**: Ensure correct handling of invalid inputs, which could include incorrect data sizes or formats for cryptographic operations.
- **Execution and Gas Costs**: Verify that precompiles execute as expected and that gas costs align with their specifications.

### Test Execution and Coverage

- **Automation**: Automate your testing process to run the full suite of unit tests frequently. This will help catch regressions and ensure that modifications do not introduce new bugs.
- **Coverage**: Aim for high test coverage, ensuring that every line of your opcode implementation is exercised by at least one test. While 100% coverage might not always be practical, strive to cover all critical paths and edge cases.

## Bounty Assignment and Completion Process

The bounty associated with the implementation of EVM opcodes and precompiles in Motoko will be assigned to a single individual or team. This approach allows for concentrated effort and a consistent vision throughout the development process. However, we recognize the variability of personal circumstances and the challenges that a project of this depth may present.

Code will be pushed to https://github.com/icdevsorg/evm.mo.

### Modular Completion

The project is structured to allow for modular completion. Contributors can achieve progress in distinct blocks or stages, aligning with the separate categories or sets of opcodes and precompiles laid out in the specifications. This structure facilitates manageable goals and provides clear checkpoints for progress assessment.

### Flexible Contribution

We understand that unforeseen circumstances may prevent a contributor from completing the entire bounty. In such cases, compensation will be awarded proportionally based on the percentage of the project that has been completed and approved by the project's review team. This ensures that all efforts are recognized and valued, even if the project's full scope cannot be realized by the initial assignee.

### Handover Process

Should the original assignee be unable to complete the bounty, a clear and structured handover process will be implemented. This process involves:

1. Review and documentation of the work completed by the initial contributor.
2. A handover period where the outgoing contributor can brief the new assignee on the work done and any insights gained during their tenure.
3. Adjustment of the bounty remaining to reflect any compensation already awarded for completed work.

[Other ICDevs.org Bounties](https://icdevs.org/bounties.html)