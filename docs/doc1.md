---
id: doc1
title: Polymath Documentation
sidebar_label: Documentation
---
Polymath is a platform that enables the creation, issuance and trading of financial instruments on the blockchain. It allows participants to easily launch Securities Tokens through Securities Token Offerings (STOs) in a regulatory-compliant manner. We have built the infrastructure to make this happen and here it is for you to disover:

## 1. Polymath-Core 

Core Ethereum Smart Contracts for Polymath - The Securities Token Platform.

The Polymath Core smart contracts provide a system for launching regulatory-compliant securities tokens on a decentralized blockchain. This particular repository is the implementation of a system that allows for the creation of ST-20-compatible tokens. This system has a modular design that promotes a variety of pluggable components for various types of issuances, legal requirements, and offering processes.

## Setting up Polymath-core 

KOVAN - https://github.com/kovan-testnet/faucet

## v1.1.0 (TORO Release)

| Contract               | Address                                    |
| -----------------------|:------------------------------------------:| 
| TickerRegistry:        | 0xcf82d3f2abdf777f559e98d85f976283595f0d30 | 
| SecurityTokenRegistry: | 0x00d4671f8c00fcfc2256e008242f07c1428b5836                               |
| ModuleRegistry:        | 0x719287e2f1dfc7d953d0c1f05fdf27934d9c6f30                           |
| CappedSTOFactory:      | 0x30e2c3fa3297808a2e9f176be6cc587cb76259c4 |

## Setup

The smart contracts are written in Solidity and tested/deployed using Truffle version 4.1.0. The new version of Truffle doesn't require testrpc to be installed separately so you can just run the following:
```
# Install Truffle package globally:
$ npm install -g truffle

# Install local node dependencies:
$ npm install
```

## Testing 
To Test the code simply run: 
```
$ npm run test
```

## Extending Polymath Core

1. Deploy ```ModuleRegistry```.  ```ModuleRegistry``` keeps track of all available modules that add new functionalities to Polymath-based security tokens.

2. Deploy ```GeneralTransferManagerFactory``` . This module allows the use of a general TransferManager for newly issued security tokens. The General Transfer Manager gives STs the ability to have their transfers restricted by using an on-chain whitelist.

3. Add the ```GeneralTransferManagerFactory```  module to ```ModuleRegistry``` by calling ```ModuleRegistry.registerModule()```.

4. Deploy ```TickerRegistry``` . This contract handles the registration of unique token symbols. Issuers first have to claim their token symbol through the ```TickerRegistry```. If it's available they will be able to deploy a ST with the same symbol for a set number of days before the registration expires.

5. Deploy ```SecurityTokenRegistry```. This contract is responsible for deploying new Security Tokens. STs should always be deployed by using the ```SecurityTokenRegistry```.

## Deploying Security Token Offerings (Network Admin Only)

Security Token Offerings (STOs) grant STs the ability to be distributed in an initial offering. Polymath offers a few out-of-the-box STO models for issuers to select from and, as the platform evolves, 3rd party developers will be able to create their own offerings and make them available to the network.

As an example, we've included a ```CappedSTO``` and ```CappedSTOFactory``` contracts.

In order to create a new STO, developers first have to create an STO Factory contract which will be responsible for instantiating STOs as Issuers select them. Each STO Factory has an STO contract attached to it, which will be instantiated for each Security Token that wants to use that particular STO.

To make an STO available for Issuers, first, deploy the STO Factory and take note of its address. Then, call ```moduleRegistry.registerModule(STO Factory address);```

Once the STO Factory has been registered to the Module Registry, issuers will be able to see it on the Polymath dApp and they will be able to add it as a module of the ST.

Note that while anyone can register an STO Factory, only those "approved" by Polymath will be enabled to be attached by the general community. An STO Factory not yet approved by Polymath may only be used by it's author.


For more Info: https://github.com/PolymathNetwork/polymath-core

## 2. Polymath-js

The bridge between the Polymath Smart Contracts and dApps.

## Install 

```
> yarn add polymathjs
```

```
import Contract, { TickerRegistry } from 'polymathjs'
import type { NetworkParams } from 'polymathjs/types'

const params: NetworkParams = {
  id: 1, // network id
  web3, // Web3 1.0 instance
  web3WS, // Web3 1.0 instance supplied with WebsocketProvider, it can be the same instance as the one above
  account: ' 0xaea186fa5402f0a8049786099c3f2881c1e21767', // transactions sender
  txHashCallback: (hash) => console.log(hash), // receives a transaction hash every time one was generated
  txEndCallback: (receipt) => console.log(receipt), // receives a transaction receipt every time one was mined
}

Contract.setParams(params)
```

Consider using the polymath-auth library, which takes care of the first 4 params.

## Development

After cloning here https://github.com/PolymathNetwork/polymath.js, to install all dependencies run:

```
> yarn
```

We only use Yarn as our official Node package manager, and so we will only commit yarn.lock files, and ignore package-lock.json files.

To build module run:

```
npm run build
```




## 3. Polymath Issuer Application

Allows you to issue your security token and launch its offering.

## Development

After cloning (https://github.com/PolymathNetwork/polymath-issuer), to install all dependencies run:

```
yarn
```

We only use Yarn as our official Node package manager, and so we will only commit yarn.lock files, and ignore package-lock.json files.

To start development run:

```
npm start
```

To build the application run:

```
npm run build
```

By default application works with Ropsten testnet.

## Working with contracts locally

To deploy contracts run Ganache CLI >= v6.1.0-beta.0 (lower versions does not support WebSockets) and in a separate terminal:

```
npm run contracts
```

Turn off MetaMask or any other Web3 provider and start/build application.

To open Truffle Console and play with contracts directly:

```
npm run tconsole
```

Read more about Truffle Console: http://truffleframework.com/docs/getting_started/console
