---
id: doc4
title: Polymath Tutorials
---

This Is Your Guide To Join The Polymath Stampede. 4

## Tutorial Topics:

## 1. Creating Modules for the Polymath ST-20 Ecosystem

## Modular Security Tokens

Security Tokens on the Polymath platform are built with modularity, extensibility and flexibility in mind.

The Polymath implementation of the ST-20 standard allows developers to build new types of security token functionality as modules, which can be dynamically attached to a security token by the issuer of that token.

Modules can represent any type of security token functionality, but there are a few key types of modules with special access or permissions to the security token.

## Module Types

Currently we have three special module types defined, which are listed below, and we are now working on adding an additional Staking module.

Modules don’t have to fall into one of these categories, but if the functionality they represent corresponds to one of these categories, they should implement the additional interface associated with that category.

## TransferManager

TransferManager modules are used in determining whether a token transfer is valid between two parties. They are used by the security token’s verifyTransfer function, which in turn is used by the transfer and transferFrom functions of the token.

The corresponding interface to implement is:

[ITransferManager.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/modules/TransferManager/ITransferManager.sol

## PermissionManager

PermissionManager modules are used to manage permissions across modules, and the security token. They provide a flexible way for the issuer to delegate certain types of token permissions to individuals, or modules.

The corresponding interface to implement is:

[IPermissionManager.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/modules/PermissionManager/IPermissionManager.sol)

## STO

STO (Security Token Offering) modules are used to raise funds, or more generally mint and burn security tokens. They are used by the mint and burn functions of the underlying token.

The corresponding interface to implement is:

[ISTO.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/modules/STO/ISTO.sol)

## Developing New Modules

In this article, we are going to use the following example — we want to create an STO module (since it will be minting tokens) that allows issuers to easily initialise pre-sale token allocations. Tokens for pre-sale participants can only be created until a fixed date (typically the start of the public STO).

The below code snippets are sometimes shortened to make their core functionality clearer. All of these contracts appear in a complete form in our [public GitHub repo](https://github.com/polymathnetwork), including test cases for this module.

## Business Logic

We’ll start by looking at the module contract which will contain our business logic (the logic to allow the issuer to record pre-sale token allocations).

The basic logic, to allow the issuer to create pre-sale token allocations, would look something like:

``` 
pragma solidity ^0.4.23;

contract PreSaleSTO {
  using SafeMath for uint256;
  event TokensAllocated(address _investor, uint256 _amount);
  function allocateTokens(address _investor, uint256 _amount) public
  {
    require(_amount > 0);
    IST20(securityToken).mint(_investor, _amount);
    investors[_investor] = investors[_investor].add(_amount);
    emit TokensAllocated(_investor, _amount);
  }
}

```

## Interfaces and Initialization

To turn this into a module which can live in the Polymath Ecosystem, we need to add some boiler plate code and inherit from the module interface.

Since this module needs to mint tokens, it is of the special module type STO. As such it must inherit from the ISTO interface, which in turn inherits from IModule.

The IModule interface defines some functionality which is common across all modules, specifically:

```
//Simple interface that any module contracts should implement

contract IModule {
  address public factory;
  address public securityToken;
  ERC20 public polyToken;
  constructor (address _securityToken, address _polyAddress) public
  {
    securityToken = _securityToken;
    factory = msg.sender;
    polyToken = ERC20(_polyAddress);
  }
  function getInitFunction() public returns (bytes4);
  function getPermissions() public view returns(bytes32[]);
}

```

The ISTO module inherits from IModule, and defines some additional functions used just by modules of type STO:
```
contract ISTO is IModule {

  function getRaisedEther() public view returns (uint256);
  function getRaisedPOLY() public view returns (uint256);
  function getNumberInvestors() public view returns (uint256);
}

```

Even though a pre-sale allocation does not involve any transfer of funds, for the sake of transparency we will record the amount of ETH or POLY involved in the pre-sale token allocation.

So, let’s add these to our PreSale module contract!

```
contract PreSaleSTO is ISTO {

  using SafeMath for uint256;
  event TokensAllocated(address _investor, uint256 _amount);
  mapping (address => uint256) public investors;
  uint256 public investorCount;
  uint256 public endTime;
  uint256 public etherRaised;
  uint256 public polyRaised;
  constructor (address _securityToken, address _polyAddress) public
  IModule(_securityToken, _polyAddress)
  {
  }
  function configure(uint256 _endTime) public onlyFactory {
    require(_endTime != 0);
    endTime = _endTime;
  }
  function getInitFunction() public returns (bytes4) {
    return bytes4(keccak256("configure(uint256)"));
  }
  function getRaisedEther() public view returns (uint256) {
    return etherRaised;
  }
  function getRaisedPOLY() public view returns (uint256) {
    return polyRaised;
  }
  function getNumberInvestors() public view returns (uint256) {
    return investorCount;
  }
  function getPermissions() public view returns(bytes32[]) {
    bytes32[] memory allPermissions = new bytes32[](0);
    return allPermissions;
  }
  function allocateTokens(address _investor, uint256 _amount, uint256 _etherContributed, uint256 _polyContributed) public onlyOwner
  {
    require(now <= endTime);
    require(_amount > 0);
    IST20(securityToken).mint(_investor, _amount);
    investors[_investor] = investors[_investor].add(_amount);
    investorCount = investorCount.add(1);
    etherRaised = etherRaised.add(_etherContributed);
    polyRaised = polyRaised.add(_polyContributed);
    emit TokensAllocated(_investor, _amount);
  }
}
```

## Module Initialization

As we’ll see in the next section, all modules are created via factory contracts. A factory contract is responsible for creating and configuring all of its modules.

In order for the factory to configure its module, the IModule interface defines `getInitFunction` which returns the signature of the function used to set all of the initial state of the module — in this case just the time until pre-sale allocations can be created (i.e. the start of the STO).

## Module Factories
Every module factory needs to implement the IModuleFactory interface. This defines a few key functions that control the cost of the module (the amount of POLY the issuer needs to pay in order to use the module) as well as providing human readable instructions and descriptions for the module.

The IModuleFactory interface looks like:

```
contract IModuleFactory is Ownable {

  ERC20 public polyToken;
  function deploy(bytes _data) external returns(address);
  function getType() public view returns(uint8);
  function getName() public view returns(bytes32);
  //Return the cost (in POLY) to use this factory
  function getCost() public view returns(uint256);
  function getDescription() public view returns(string);
  function getTitle() public view returns(string);
  function getInstructions() public view returns (string);
}

```

So — let’s create our PreSaleSTOFactory contract, implementing these functions:

```

contract PreSaleSTOFactory is IModuleFactory {

  constructor (address _polyAddress) public
    IModuleFactory(_polyAddress)
  {
  }
  function deploy(bytes _data) external returns(address) {
    if (getCost() > 0) {
      require(polyToken.transferFrom(msg.sender, owner, getCost()));
    }
    //Check valid bytes - can only call module init function
    PreSaleSTO preSaleSTO = new PreSaleSTO(msg.sender, address(polyToken));
    //Checks that _data is valid (not calling anything it shouldn't)
    require(getSig(_data) == preSaleSTO.getInitFunction());
    //Initialise the module
    require(address(preSaleSTO).call(_data));
    return address(preSaleSTO);
  }
  function getCost() public view returns(uint256) {
    return 100;
  }
  function getType() public view returns(uint8) {
    return 3;
  }
  function getName() public view returns(bytes32) {
    return "PreSaleSTO";
  }
  function getDescription() public view returns(string) {
    return "Use this module to initialise pre-sale token allocations";
  }
  function getTitle() public view returns(string) {
    return "Pre-Sale STO";
  }
  function getInstructions() public view returns(string) {
    return "Pre-Sale STO - use allocateTokens to create pre-sale token allocations";
  }
}

```

## Registering Modules

Once you’ve created your new module, all that remains is to add it to the Polymath Ecosystem.

To do this, you need to deploy your factory contract (PreSaleSTOFactory) and then call:

```
function registerModule(address _moduleFactory)

```

## Conclusion

All of the code examples above, can be found at:

https://github.com/PolymathNetwork/polymath-core

If you have any questions about the code or this walkthrough we would love to hear from you! Join our Gitter: https://gitter.im/polymathnetwork and ask all of your questions there!


The initialization function can be arbitrarily complex, but here we have a simple `configure` function that just sets this `endTime` value.

## 2. Create Your Own Security Token Offering (STO) with Polymath

This tutorial will take you through the process of building your first Security Token Offering (STO) — if you don’t know what an STO is please read this first: https://blog.polymath.network/what-is-a-security-token-offering-sto-4e5a92bf6bca.

Please note, for this tutorial you don’t need to be a blockchain expert — Understanding cryptocurrencies, securities, ICOs or Ethereum could help, but it’s certainly not a prerequisite.

In this walkthrough we will be covering:

1. What You Will Need For This Tutorial
2. Creating Your Account on the Polymath Decentralized Application
3. Registering Your Token Symbol
4. Choosing Your Providers (Advisors, Legal, KYC/AML, Marketing)
5. Creating Your Own Token
6. Setting Up Your Offering Details
7. Whitelisting Your Investors To Participate In Your STO

## Background / Introductory Video of Polymath
https://www.youtube.com/watch?v=pOYcro53SOI

## What You Will Need For This Tutorial

In this tutorial you will need a Metamask account (to download the chrome extension click here: https://metamask.io/). You will then need to fund your account. Go to this site and choose the easiest option for you: https://github.com/kovan-testnet/faucet. If you can’t decide, go ahead and choose the following method: “Gitter Channel (Manual Github Verification. If you want to request to receive Kovan Ether manually (uptime is not guaranteed, and you may have to wait for a verifier to respond), please using the Gitter channel: https://gitter.im/kovan-testnet/faucet”

You should see test Ethereum funds populate within 5 minutes, however, time may vary and could take significantly longer depending on how busy the faucet is!

## Let’s get started … head on over to https://tokenstudio.polymath.network/ and just like you see below, click “Create Your Security Token”.



<!---
 3. Investors/kyc getting them verified - getting them on the whitelist 
4. Kyc - transfer manager and whitelist
5. How to register and deploy the token 
6. Offering - what you need for it. 
--->