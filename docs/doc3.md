---
id: doc3
title: Directory
---

# Checkpoint Modules: 

Checkpoint modules are a new type of module introduced in this most recent release of the Polymath core protocol. They allow the issuer to define checkpoints at which token balances and the total supply of a token can be consistently queried. This functionality is particularly useful for dividend payment mechanisms and on-chain governance, both of which need to be able to determine token balances consistently as of a specified point in time.

## 1. [ERC20DividendCheckpoint.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/Checkpoint/ERC20DividendCheckpoint.sol) 
### Checkpoint module for issuing ERC20 dividends:

Very similar to the EtherDividendCheckpoint module, but instead of dividends being denominated in Ether, they can be denominated in any ERC20 (or ST20) token. For example, if an issuer wishes to pay dividends in POLY, this module allows that with exactly the same flexibility as the EtherDividendCheckpoint module.

## 2. [ERC20DividendCheckpointFactory.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/Checkpoint/ERC20DividendCheckpointFactory.sol)
### Factory for deploying ERC20DividendCheckpoint module

This module is a factory for deploying the ERC20DividendCheckpoint module. It contains a constructor that is used to launch the module with the help of the factory. The module contains, the type of the Module factory, retrieves the name of the Module, gets the description of the Module, the title of the Module,  the Instructions that helped to used the module and the tags related to the module factory.

## 3. [EtherDividendCheckpoint.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/Checkpoint/EtherDividendCheckpoint.sol)
### Checkpoint module for issuing ether dividends

This module allows the issuer to create dividends which are denominated in Ether. These dividends are then paid out proportionally to token holder balances as of the time that the dividend was created, or at the time of a specified checkpoint that was created previously. Dividends can be pulled by investors or pushed by the issuer to each investor using flexible methods that either use the underlying ST20 token to determine the list of investors, or allow the issuer to specify a fixed list of investors.

## 4. [EtherDividendCheckpointFactory.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/Checkpoint/EtherDividendCheckpointFactory.sol)
### Factory for deploying EtherDividendCheckpoint module

This module is a factory for deploying the EtherDividendCheckpoint module. It contains a constructor that is used to launch the module with the help of the factory. The module contains, the type of the Module factory, retrieves the name of the Module, gets the description of the Module, the title of the Module,  the Instructions that helped to used the module and the tags related to the module factory.

## 5. [ICheckpoint.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/Checkpoint/ICheckpoint.sol)
### Interface to be implemented by all checkpoint modules.

# PermissionManager Modules: 

PermissionManager modules are responsible for managing credentials and permissions across other modules and ST20 tokens.

## 1. [GeneralPermissionManager.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/PermissionManager/GeneralPermissionManager.sol)
### Permission Manager module for core permissioning functionality

This module allows issuers to define permissions for any actions or functions in any modules which are attached to their token, and then delegate those permissions to 3rd parties. Permissions are named using a bytes32 value and all modules then defer to PermissionManager modules to check whether an address trying to perform an action has appropriate permission.

## 2. [GeneralPermissionManagerFactory.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/PermissionManager/GeneralPermissionManagerFactory.sol)
### Factory for deploying GeneralPermissionManager module.

This module is a factory for deploying the GeneralPermissionManager module. It contains a constructor that is used to launch the module with the help of the factory. The module contains, the type of the Module factory, retrieves the name of the Module, gets the description of the Module, the title of the Module,  the Instructions that helped to used the module and the tags related to the module factory.

## 3. [IPermissionManager.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/PermissionManager/IPermissionManager.sol)
### Interface to be implemented by all permission manager modules

# Security Token Offerings (STOs)


These modules are responsible for the minting of new ST20 tokens. This is needed when issuers are conducting a security token offering (STO) or allocating pre-sale or private sale token allocations.

## 1. [CappedSTO.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/STO/CappedSTO.sol)
### STO module for standard capped crowdsale

This module allows an issuer to quickly set up a capped security token offering. The issuer can define the various parameters of the offering (e.g. start & end times) and whether the offering is in ETH or POLY. The module allows investors to send in either ETH or POLY, and receive back a corresponding amount of ST20 tokens.

## 2. [CappedSTOFactory.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/STO/CappedSTOFactory.sol)
### Factory for deploying CappedSTO module

This module is Factory for deploying CappedSTO module and is used to launch the Module with the help of factory.  It contains a constructor that is used to launch the module with the help of the factory. The module contains, the type of the Module factory, retrieves the name of the Module, gets the description of the Module, the title of the Module,  the Instructions that helped to used the module and the tags related to the module factory.

## 3. [DummySTO.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/STO/DummySTO.sol)
### STO module for sample implementation of a different crowdsale module

STO module for sample implementation of a different crowdsale module.Function used to intialize the differnet variables.This function returns the signature of configure function.Function used to generate the tokens.Return ETH raised by the STO.Return POLY raised by the STO.Return the total no. of investors.Return the permissions flag that are associated with STO.

## 4. [DummySTOFactory.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/STO/DummySTOFactory.sol)
### Factory for deploying DummySTO module

Factory for deploying DummySTO module.used to launch the Module with the help of factory. It contains a constructor that is used to launch the module with the help of the factory. The module contains, the type of the Module factory, retrieves the name of the Module, gets the description of the Module, the title of the Module,  the Instructions that helped to used the module and the tags related to the module factory

## 5. [ISTO.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/STO/ISTO.sol)
### Interface to be implemented by all STO modules

Interface to be implemented by all STO modules,use to verify the investment, whether the investor provide the allowance to the STO or not,Return ETH raised by the STO, Return POLY raised by the STO,Return the total no. of investors,pause (overridden function),unpause (overridden function).

## 6. [PreSaleSTO.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/STO/PreSaleSTO.sol)
### STO module for private presales

For token allocations which are agreed off-chain (e.g. for fiat investments, or for token allocations for partners, team members or private investors), this module allows issuers to quickly mint the appropriate amounts of tokens. Issuers “upload” these allocations to the contract, and they are minted in batches.

## 7. [PreSaleSTOFactory.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/STO/PreSaleSTOFactory.sol)
### Factory for deploying PreSaleSTO module

Factory for deploying PreSaleSTO module,used to launch the Module with the help of factory,Type of the Module factory,Get the name of the Module,Get the description of the Module,Get the title of the Module,Get the Instructions that helped to used the module,Get the tags related to the module factory

# TransferManager Modules 

These modules are responsible for managing and restricting transfers of ST20 tokens between different individuals and organisations (e.g. exchanges). All TransferManager modules that are attached to an ST20 token are queried for each transfer of tokens and can return a result that indicates whether the transfer is valid or not.

## 1. [CountTransferManager.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/TransferManager/CountTransferManager.sol)
### Transfer Manager for limiting maximum number of token holders.

For security tokens issued under certain regulations, there is a requirement to limit the total number of token holders. This module allows the issuer to set a maximum total number of token holders, and enforces that the number of token holders does not breach this limit.

## 2. [CountTransferManagerFactory.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/TransferManager/CountTransferManagerFactory.sol)
### Factory for deploying CountTransferManager module

This module is a factory for deploying CountTransferManager module and is used to launch the Module with the help of factory. It contains a constructor that is used to launch the module with the help of the factory. The module contains, the type of the Module factory, retrieves the name of the Module, gets the description of the Module, the title of the Module,  the Instructions that helped to used the module and the tags related to the module factory.

## 3. [GeneralTransferManager.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/TransferManager/GeneralTransferManager.sol)
### Transfer Manager module for core transfer validation functionality.

This module offers a general approach to setting transfer restriction rules keyed off Ethereum public addresses. Issuers can set up rules that specify an address and associated timestamps for when that address can send or receive tokens. There are also flags that allow issuers to modify the rules in specific circumstances, for example when tokens are being transferred as part of an STO investment.

## 4. [GeneralTransferManagerFactory.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/TransferManager/GeneralTransferManagerFactory.sol)
### Factory for deploying GeneralTransferManager module

This module is a factory for deploying the GeneralTransferManager module. It contains a constructor that is used to launch the module with the help of the factory. The module contains, the type of the Module factory, retrieves the name of the Module, gets the description of the Module, the title of the Module,  the Instructions that helped to used the module and the tags related to the module factory.

## 5. [ITransferManager.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/TransferManager/ITransferManager.sol)
### Interface to be implemented by all Transfer Manager modules

## 6. [ManualApprovalTransferManager.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/TransferManager/ManualApprovalTransferManager.sol)
### Transfer Manager module for manually approving or blocking transactions between accounts

This module provides a flexible way for an issuer to specify one-off rules to either approve or block transfers of tokens between two addresses.
Issuers can approve an amount of tokens that can be sent between two addresses, and specify an expiry for this approval. In a similar fashion the issuer can block any transfers between two specified addresses, again with an expiry on the block.

## 7. [ManualApprovalTransferManagerFactory.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/TransferManager/ManualApprovalTransferManagerFactory.sol)
### Factory for deploying ManualApprovalTransferManager module

This module is a factory for deploying the ManualApprovalTransferManager module. It contains a constructor that is used to launch the module with the help of the factory. The module contains, the type of the Module factory, retrieves the name of the Module, gets the description of the Module, the title of the Module,  the Instructions that helped to used the module and the tags related to the module factory.

## 8. [PercentageTransferManager.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/TransferManager/PercentageTransferManager.sol)
### Transfer Manager module for limiting percentage of token supply a single address can hold

This is similar to the CountTransferManager, but instead of enforcing a limit on the total number of token holders, this module enforces a limit of the maximum percentage of the total supply of tokens that any individual investor can hold.

## 9. [PercentageTransferManagerFactory.sol](https://github.com/PolymathNetwork/polymath-core/blob/v1.2.0/contracts/modules/TransferManager/PercentageTransferManagerFactory.sol)
### Factory for deploying PercentageTransferManager module

This module is a factory for deploying the PercentageTransferManager module. It contains a constructor that is used to launch the module with the help of the factory. The module contains, the type of the Module factory, retrieves the name of the Module, gets the description of the Module, the title of the Module,  the Instructions that helped to used the module and the tags related to the module factory.




