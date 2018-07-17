---
id: doc2
title: Developer Bug Bounty Program
---

## Introduction

## Bug Bounty Details

The bug bounty program will run on an ongoing basis. Rewards will be assessed based on the OWASP framework, and paid in ETH or POLY according to the developer’s preference. The Polymath Network smart contracts included in this bug bounty can be found at: https://github.com/PolymathNetwork/polymath-core/tree/v1.2.0
The best way to communicate with our team is via our Github Repository Issues or via our Gitter Channel. Find these at https://github.com/PolymathNetwork and https://gitter.im/PolymathNetwork/.

## Program Scope

We are solely interested in having our Core Solidity smart contracts audited for bugs. Below, we explain which files from our repository are “in scope” and briefly what each of them does. Please refer to the README file on Core’s Repository for further explanation of the Polymath Network Protocol.

TAGGED RELEASE VERSION v1.2.0 ONLY — We ONLY want code reviewed at this snapshot of the codebase. This is an example commit 010ac66 from v.1.1.0. We do not want to discourage you from notifying us of bugs in newer releases after v.1.2.0, but there is no guarantee we will provide rewards.

## v.1.1.0 Bugs: 

[/contracts/TickerRegistry.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/TickerRegistry.sol): Users should be able to register a token symbol to it. Only unique symbols allowed. After a pre-set time the symbol becomes available again if the user didn’t deploy the actual token.

[/contracts/SecurityTokenRegistry.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/SecurityTokenRegistry.sol): Deploys SecurityToken instances (through a “Proxy” mechanism). Only allows tokens whose symbols have been previously registered in TickerRegistry under the user’s account. Has a versioning mechanism that changes which version of the SecurityToken should be deployed.

[/contracts/tokens/STVersionProxy001.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/tokens/STVersionProxy001.sol): Proxy contract for version 1 of the SecurityToken. The SecurityTokenRegistry initially points to this one contract, which deploys the SecurityToken V1. Eventually, SecurityTokenRegistry would be changed to point to STVersionProxy002 which would deploy a SecurityTokenV2 with added features.

[/contracts/tokens/SecurityToken.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/tokens/SecurityToken.sol): Inherits from IST20 interface which is an ERC20 contract with a verifyTransfer() function added to it. Modules can be attached to it to extend its functionality. It should work exactly as ERC20 tokens, save for the transfer restrictions applied to it.

[/contracts/ModuleRegistry.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/ModuleRegistry.sol): Repository for registered modules. For modules to be used by SecurityToken, they first need to be added to the registry and approved by Polymath. (The author of the module may also use it for their own SecurityToken, but for it to be available to anyone, the author must have Polymath verify it first).

[/contracts/modules/TransferManager/GeneralTransferManager.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/modules/TransferManager/GeneralTransferManager.sol): Has an internal whitelist and its verifyTransfer() method is called by SecurityToken to decide if the token transfer is allowed. If the tokens are to be transferred from the initial issuance, the requirement for verifyTransfer is that the token buyer is on the whitelist. If we are talking about a transfer between two whitelisted addresses, both should be on the whitelist and their sell/purchase lockups must have ended.

[/contracts/modules/TransferManager/CountTransferManager.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/modules/TransferManager/CountTransferManager.sol): Refer to V1.2.0 release notes for more information: https://blog.polymath.network/polymath-core-toro-v1-2-0-is-out-997e05adc665

[/contracts/modules/TransferManager/PercentageTransferManager.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/modules/TransferManager/PercentageTransferManager.sol): Refer to V1.2.0 release notes for more information: https://blog.polymath.network/polymath-core-toro-v1-2-0-is-out-997e05adc665

[/contracts/modules/PermissionManager/GeneralPermissionManager.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/modules/PermissionManager/GeneralPermissionManager.sol): Handles delegation of permissions to other accounts. For example, the owner can set permissions over the GeneralTransferManager to some other account so that they can modify the whitelist on the owner’s behalf. This could be very useful for 3rd party KYC or handlers businesses that oversee and assist with the entire process.

[/contracts/modules/STO/CappedSTO.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/modules/STO/CappedSTO.sol): STOs (Security Token Offerings) are the equivalent to crowdsale contracts in ICOs. The CappedSTO is one simple example of how it could be construed. We need to ensure the STO works as intended and that there aren’t any vulnerabilities that allow an attacker to drain funds from it, DoS it, etc.

## v.1.2.0 Bugs: 

[/contracts/Migrations.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/Migrations.sol): These are working test cases for an off-chain whitelist.

[/contracts/ModuleRegistry.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/ModuleRegistry.sol): This is the registry contract to store registered modules.

[/contracts/Pausable.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/Pausable.sol): Utility contract to allow pausing and unpausing of certain functions.

[/contracts/ReclaimTokens.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/ReclaimTokens.sol): Utility contract to allow owner to retreive any ERC20 sent to the contract.

[/contracts/Registry.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/Registry.sol): Core functionality for registry upgradability

[/contracts/SecurityTokenRegistry.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/SecurityTokenRegistry.sol): Registry contract for issuers to register their security tokens.

[/contracts/TickerRegistry.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/TickerRegistry.sol): Registry contract for issuers to reserve their security token symbols.

[/contracts/modules/ManualApprovalTransferManager.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/modules/TransferManager/ManualApprovalTransferManager.sol): Transfer Manager module for manually approving or blocking transactions between two addresses along with an expiry time.

[/contracts/modules/STO/CappedSTOFactory.sol](https://github.com/PolymathNetwork/polymath-core/blob/master/contracts/modules/STO/CappedSTOFactory.sol): Factory for deploying CappedSTO module.

## Compensation Amounts

Critical severity bugs — 8 ETH: Bugs that enable an arbitrary attacker to steal POLY from any of the contracts or actors on the platform. Bugs that enable an arbitrary attacker to steal Security Tokens created through Polymath Core from any of the contracts or actors nf the platform.

High severity bugs — 5 ETH: Bugs that would render the Polymath Core protocol unusable and/or make Security Tokens issued through Polymath Core vulnerable to attacks.

Medium severity bugs — 3 ETH: Bugs that break specified or reasonably assumed protocol invariants that do not enable an arbitrary attacker to steal anything without action on the part of the user whose assets / funds are stolen, but does enable certain parties to obtain funds or assets in unexpected ways.

Low severity bugs — 1 ETH: Bugs that break specified or reasonably assumed protocol invariants but do not have a financial incentive for anyone and do not significantly impair contract functionality or could easily be avoided during protocol use.

## Submission Process

1. [Create a new/seperate github issue on the polymath-core repository.](https://github.com/PolymathNetwork/polymath-core/issues/new)

2. Your submission must include the following details:
- Description of the location and potential impact of the vulnerability
- Observed behavior
- Expected behavior
- How to replicate — A detailed description of the steps required to reproduce the vulnerability — POC scripts, steps taken, and screenshots will all be helpful.
- The Polymath team will respond to reported bugs within 96 hours from the time of submission. We will review each report and remain responsible for deciding the severity of each bug submitted. High quality, easy to read reports can be rewarded extra for the sake of making communication easier for both parties.

3. Payouts on bugs will come through via an ETH address that you directly supply to us in the issues comments.
Most of the rules on https://bounty.ethereum.org apply:

First come, first serve.

Issues that have already been submitted by another user or are already known to the Polymath team are not eligible for bounty rewards. (Make sure that the issue has not been previously submitted or fixed in other more recent commits). Public disclosure of an actively exploitable vulnerability makes it ineligible for a bounty. Determinations of eligibility, rewards and all terms related to an award are at the sole and final discretion of the Polymath team.

## Responsible Disclosure Guidelines

We ask that you follow the following responsible disclosure guidelines:

1. Do not exploit a security vulnerability you discover for any reason.

2. Make a good faith effort to avoid privacy violations.

3. Give us a disclosure deadline on any vulnerability you report, consistent with complexity of the fix. Please give us a reasonable amount of time (minimum 2 weeks) to correct the issue before making the exploit public.

4. Give us 3 business days to respond to your report. We will provide our assessment of the severity of the vulnerability and our timeline for patching it based on our internal assessment of when we can have a fix in place.

[Please Check Out Our Medium Post for More Bug Bounty Program Announcments and Updates on Program Details](https://blog.polymath.network/announcing-the-polymath-network-bug-bounty-3e4a78ac9809)
