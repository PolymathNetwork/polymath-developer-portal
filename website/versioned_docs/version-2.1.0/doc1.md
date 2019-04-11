---
id: version-2.1.0-doc1
title: Polymath Documentation
sidebar_label: Documentation
original_id: doc1
---

Polymath is a platform that enables the creation, issuance and trading of financial instruments on the blockchain. It allows participants to easily launch Securities Tokens through Securities Token Offerings (STOs) in a regulatory-compliant manner. We have built the infrastructure to make this happen and here it is for you to disover:

## 1. Polymath-Core

Core Ethereum Smart Contracts for Polymath - The Securities Token Platform.

The Polymath Core smart contracts provide a system for launching regulatory-compliant securities tokens on a decentralized blockchain. This particular repository is the implementation of a system that allows for the creation of ST-20-compatible tokens. This system has a modular design that promotes a variety of pluggable components for various types of issuances, legal requirements, and offering processes.

# Setting up Polymath Core

## Mainnet

### v2.1.0

| Contract                                          | Address                                                                                                               |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| SecurityTokenRegistry (Proxy):                    | [0x240f9f86b1465bf1b8eb29bc88cbf65573dfdd97](https://etherscan.io/address/0x240f9f86b1465bf1b8eb29bc88cbf65573dfdd97) |
| ModuleRegistry (Proxy):                           | [0x4566d68ea96fc2213f2446f0dd0f482146cee96d](https://etherscan.io/address/0x4566d68ea96fc2213f2446f0dd0f482146cee96d) |
| Polymath Registry:                                | [0xdfabf3e4793cd30affb47ab6fa4cf4eef26bbc27](https://etherscan.io/address/0xdfabf3e4793cd30affb47ab6fa4cf4eef26bbc27) |
| Feature Registry:                                 | [0xa3eacb03622bf1513880892b7270d965f693ffb5](https://etherscan.io/address/0xa3eacb03622bf1513880892b7270d965f693ffb5) |
| ETHOracle:                                        | [0x60055e9a93aae267da5a052e95846fa9469c0e7a](https://etherscan.io/address/0x60055e9a93aae267da5a052e95846fa9469c0e7a) |
| POLYOracle:                                       | [0x52cb4616E191Ff664B0bff247469ce7b74579D1B](https://etherscan.io/address/0x52cb4616E191Ff664B0bff247469ce7b74579D1B) |
| General Transfer Manager Factory (2.0.0):         | [0xdc95598ef2bbfdb66d02d5f3eea98ea39fbc8b26](https://etherscan.io/address/0xdc95598ef2bbfdb66d02d5f3eea98ea39fbc8b26) |
| General Transfer Manager Factory (2.1.0):         | [0xa8b60c9b7054782f46931e35e7012037a574ecee](https://etherscan.io/address/0xa8b60c9b7054782f46931e35e7012037a574ecee) |
| General Permission Manager Factory:               | [0xf0aa1856360277c60052d6095c5b787b01388cdd](https://etherscan.io/address/0xf0aa1856360277c60052d6095c5b787b01388cdd) |
| CappedSTOFactory (2.1.0):                         | [0x26bcd18a748ade7fafb250bb014c7121a412870c](https://etherscan.io/address/0x26bcd18a748ade7fafb250bb014c7121a412870c) |
| USDTieredSTO Factory (2.1.0):                     | [0x0148ed61ffa8e0da7908a62aa2d1f266688656c4](https://etherscan.io/address/0x0148ed61ffa8e0da7908a62aa2d1f266688656c4) |
| ERC20 Dividends Checkpoint Factory (2.1.0):       | [0x855152c9b98babadc996a0dd71c8b3682b8f4786](https://etherscan.io/address/0x855152c9b98babadc996a0dd71c8b3682b8f4786) |
| Count Transfer Manager Factory (2.1.0):           | [0x575ed30ec5700f369115b079be8059001e79eb7b](https://etherscan.io/address/0x575ed30ec5700f369115b079be8059001e79eb7b) |
| Percentage Transfer Manager Factory:              | [0xe6267a9c0a227d21c95b782b1bd32bb41fc3b43b](https://etherscan.io/address/0xe6267a9c0a227d21c95b782b1bd32bb41fc3b43b) |
| Manual Approval Transfer Manager Factory (2.1.0): | [0xe5b21cf83f5e49aba4601e8d8cf182f889208cfd](https://etherscan.io/address/0xe5b21cf83f5e49aba4601e8d8cf182f889208cfd) |

New SecurityTokenRegistry (2.0.1): 0x538136ed73011a766bf0a126a27300c3a7a2e6a6
(fixed bug with getTickersByOwner())

New ModuleRegistry (2.0.1): 0xbc18f144ccf87f2d98e6fa0661799fcdc3170119
(fixed bug with missing transferOwnership function)

## KOVAN

### v2.1.0

New Kovan PolyTokenFaucet: 0xb347b9f5b56b431b2cf4e1d90a5995f7519ca792

| Contract                                  | Address                                                                                                                     |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SecurityTokenRegistry (Proxy):            | [0x91110c2f67e2881a8540417be9eadf5bc9f2f248](https://kovan.etherscan.io/address/0x91110c2f67e2881a8540417be9eadf5bc9f2f248) |
| ModuleRegistry (Proxy):                   | [0xde6d19d7a68d453244227b6ccc5d8e6c2314627a](https://kovan.etherscan.io/address/0xde6d19d7a68d453244227b6ccc5d8e6c2314627a) |
| Polymath Registry:                        | [0x5b215a7d39ee305ad28da29bf2f0425c6c2a00b3](https://kovan.etherscan.io/address/0x5b215a7d39ee305ad28da29bf2f0425c6c2a00b3) |
| Feature Registry:                         | [0x8967a7cfc4b455398be2356cd05cd43b7a39697e](https://kovan.etherscan.io/address/0x8967a7cfc4b455398be2356cd05cd43b7a39697e) |
| ETHOracle:                                | [0xCE5551FC9d43E9D2CC255139169FC889352405C8](https://kovan.etherscan.io/address/0xCE5551FC9d43E9D2CC255139169FC889352405C8) |
| POLYOracle:                               | [0x461d98EF2A0c7Ac1416EF065840fF5d4C946206C](https://kovan.etherscan.io/address/0x461d98EF2A0c7Ac1416EF065840fF5d4C946206C) |
| General Transfer Manager Factory:         | [0x650e9507e983077d6f822472a7dcc37626d55c7f](https://kovan.etherscan.io/address/0x650e9507e983077d6f822472a7dcc37626d55c7f) |
| General Permission Manager Factory:       | [0xbf0bd6305b523ce055baa6dfaa9676d6b9e6090b](https://kovan.etherscan.io/address/0xbf0bd6305b523ce055baa6dfaa9676d6b9e6090b) |
| CappedSTOFactory:                         | [0x01510b2c03296473f883c12d0723f0a46aa67f13](https://kovan.etherscan.io/address/0x01510b2c03296473f883c12d0723f0a46aa67f13) |
| USDTieredSTO Factory:                     | [0x8b9743e6129f7b7cca04e3611b5c8cd9b1d11e90](https://kovan.etherscan.io/address/0x8b9743e6129f7b7cca04e3611b5c8cd9b1d11e90) |
| ERC20 Dividends Checkpoint Factory:       | [0x4369751df5bcb2f12f1790f525ef212a622b9c60](https://kovan.etherscan.io/address/0x4369751df5bcb2f12f1790f525ef212a622b9c60) |
| Count Transfer Manager Factory:           | [0xc7cf0c1ddc85c18672951f9bfeb7163ecc8f0e2f](https://kovan.etherscan.io/address/0xc7cf0c1ddc85c18672951f9bfeb7163ecc8f0e2f) |
| Percentage Transfer Manager Factory:      | [0xfea5fcb254bcb4ada0f86903ff822d6372325cb1](https://kovan.etherscan.io/address/0xfea5fcb254bcb4ada0f86903ff822d6372325cb1) |
| Manual Approval Transfer Manager Factory: | [0x9faa79e2ccf0eb49aa6ebde1795ad2e951ce78f8](https://kovan.etherscan.io/address/0x9faa79e2ccf0eb49aa6ebde1795ad2e951ce78f8) |

## Package version requirements for your machine:

- node v8.x.x or v9.x.x
- npm v6.x.x or newer
- Yarn v1.3 or newer
- Homebrew v1.6.7 (for macOS)
- Truffle v4.1.11 (core: 4.1.11)
- Solidity v0.4.24 (solc-js)
- Ganache CLI v6.1.3 (ganache-core: 2.1.2) or newer

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

1. Deploy `ModuleRegistry`. `ModuleRegistry` keeps track of all available modules that add new functionalities to Polymath-based security tokens.

2. Deploy `GeneralTransferManagerFactory` . This module allows the use of a general TransferManager for newly issued security tokens. The General Transfer Manager gives STs the ability to have their transfers restricted by using an on-chain whitelist.

3. Add the `GeneralTransferManagerFactory` module to `ModuleRegistry` by calling `ModuleRegistry.registerModule()`.

4. Deploy `TickerRegistry` . This contract handles the registration of unique token symbols. Issuers first have to claim their token symbol through the `TickerRegistry`. If it's available they will be able to deploy a ST with the same symbol for a set number of days before the registration expires.

5. Deploy `SecurityTokenRegistry`. This contract is responsible for deploying new Security Tokens. STs should always be deployed by using the `SecurityTokenRegistry`.

## Deploying Security Token Offerings (Network Admin Only)

Security Token Offerings (STOs) grant STs the ability to be distributed in an initial offering. Polymath offers a few out-of-the-box STO models for issuers to select from and, as the platform evolves, 3rd party developers will be able to create their own offerings and make them available to the network.

As an example, we've included a `CappedSTO` and `CappedSTOFactory` contracts.

In order to create a new STO, developers first have to create an STO Factory contract which will be responsible for instantiating STOs as Issuers select them. Each STO Factory has an STO contract attached to it, which will be instantiated for each Security Token that wants to use that particular STO.

To make an STO available for Issuers, first, deploy the STO Factory and take note of its address. Then, call `moduleRegistry.registerModule(STO Factory address);`

Once the STO Factory has been registered to the Module Registry, issuers will be able to see it on the Polymath dApp and they will be able to add it as a module of the ST.

Note that while anyone can register an STO Factory, only those "approved" by Polymath will be enabled to be attached by the general community. An STO Factory not yet approved by Polymath may only be used by it's author.

For more Info: https://github.com/PolymathNetwork/polymath-core

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
