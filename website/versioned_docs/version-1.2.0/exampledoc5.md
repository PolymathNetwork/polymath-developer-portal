---
id: version-1.2.0-doc5
title: Development Requirements
original_id: doc5
---

# Setting up Polymath Core (KOVAN)

Package version requirements for your machine:

1. Homebrew v1.6.7
2. node v9.11.1
3. npm v5.6.0
4. Yarn v1.7.0
5. Truffle v4.1.11 (core: 4.1.11)
6. Solidity v0.4.24 (solc-js)
7. Ganache CLI v6.1.3 (ganache-core: 2.1.2)


## Setup

The smart contracts are written in Solidity and tested/deployed using Truffle version 4.1.0. The new version of Truffle doesn't require testrpc to be installed separately so you can just run the following:

```
# Install Truffle package globally:
$ npm install -g truffle
```

```
# Install local node dependencies:
$ npm install
```
## Testing
To test the code simply run:
```
$ npm run test
```