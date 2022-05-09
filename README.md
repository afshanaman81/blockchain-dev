<!-- vscode-markdown-toc -->
Table of Contents
* [Introduction](#Introduction)
	* [ERC-20 Token](#ERC-20Token)
	* [ER@-721 Token (NFT)](#ER-721TokenNFT)
* [Setup](#Setup)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

# Ethereum Blockchain Development
Blockchain related development and implementation of
- an ERC-20 token
- an ERC-721 token (NFT)
- Wallet
- Vault
- Dapp
- DAO
- Dex
- Trading Bot

## <a name='Introduction'></a>Introduction
### <a name='ERC-20Token'></a>ERC-20 Token
- https://ethereum.org/en/developers/tutorials/understand-the-erc-20-token-smart-contract/?msclkid=7392421dce9211ec9b072c3b18285447
- https://docs.openzeppelin.com/contracts/2.x/erc20?msclkid=9aa4dbc4ce9211ec8af36a1bc82cac92

### <a name='ER-721TokenNFT'></a>ER@-721 Token (NFT)
- https://ethereum.org/en/developers/docs/standards/tokens/erc-721/?msclkid=b3c7c5face9211ec90682db698d3ab18
- https://docs.openzeppelin.com/contracts/3.x/erc721?msclkid=de9895ecce9211ec8e98d5138e1440d6


## <a name='Setup'></a>Setup
### Pre-requisites 
- node (v16)
  
### Global Dependencies
- yarn, lerna, truffle, ganqache-cli
```
$ npm install -g yarn lerna truffle ganache-cli
```

### Compile
- compile all smart contracts, from roote, by typing:
```
$ yarn compile
```

- compile an individual smart contract, by typing:
```
$ yarn compile --scope=<PACKAGE_NAME>
```


### Deploy
- For local deployement, we will use `ganache`. Ganache is a local ethereum node. 
- Start ganache in a separate terminal:
```
$ ganache-cli
```

- deploy all smart contracts, in a separate terminal, by typing:
```
$ yarn migrate:dev
```

- deploy an individual smart contract, by typing:
```
$ yarn migrate:dev --scope=<PACKAGE_NAME>
```