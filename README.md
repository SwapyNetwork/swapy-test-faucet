# Swapy Test Faucet

#### NOTE: This repository is intended to support the distribution of tokens to be used within our testnet releases.

[![Build Status](https://travis-ci.org/SwapyNetwork/swapy-test-faucet.svg?branch=master)](https://travis-ci.org/SwapyNetwork/swapy-test-faucet)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of Contents

* [Deployed](#deployed)
* [Setup](#setup)

## Deployed

| Provider  | Faucet                                     | Token                                      |
|-----------|--------------------------------------------|--------------------------------------------|
| Ropsten   | 0x6aa9c856b6f60ede7c06d1656f1bcad7df9d858f | 0xddcc1ebf2f4d47b485a201b64f41c1ddd18ab247 |
| Kovan     | unavailable                                | unavailable                                |
| Rinkeby   | unavailable                                | unavailable                                |
| localhost | Variable                                   | Variable                                   |

## Setup

### Install Dependencies
Install [Node v6.11.2](https://nodejs.org/en/download/releases/)

[Truffle](http://truffleframework.com/) is used for deployment. We run the version installed from our dependencies using npm scripts, but if you prefer to install it globally you can do:
```
$ npm install -g truffle
```
Install project dependencies:
```
$ npm install
```
### Environment

For set up your wallet, an environment file is necessary. We provide a `sample.env` file. We recommend that you set up your own variables and rename the file to `.env`.

sample.env
```bash
# To get the twelve words, you need to set up
# your account on the MetaMask extension.
export WALLET_MNEMONIC="twelve words mnemonic ... potato bread coconut pencil"
export WALLET_ADDRESS="0x43...F0932X"
export NETWORK_ID=...
export DEV_NETWORK_ID=...
export PROVIDER_URL="https://yourfavoriteprovider.../..."
```

Obs.: For a local network only WALLET_MNEMONIC and DEV_NETWORK_ID are necessary.

After that, make available your environment file inside the bash context:
```
$ source .env
```

### Compile

Compile the contract with truffle:
```
$ npm run compile
```
### Start local network

Start [testrpc](https://github.com/ethereumjs/testrpc) connection:
```
$ npm start
```
For a better understanding of a local blockchain connection, this lecture may be useful: [Connecting to the network](https://github.com/ethereum/go-ethereum/wiki/Connecting-to-the-network)

### Deploy
Run our migrations:
```
$ npm run migrate.test
```
We're running the application in a local network defined in [truffle.js](https://github.com/SwapyNetwork/swapy-test-faucet/blob/master/truffle.js).

After the transaction mining, the Faucet and Token are disponible for usage.

### Run tests
We're using Truffle's test support. The script scripts/test.sh creates a local network and calls the unit tests.

Type
```
$ npm test
```
and run the Faucet tests.

### Interact with Faucet

[Truffle console](https://truffle.readthedocs.io/en/beta/getting_started/console/) can be used to interact with Faucet. For example:
```
$ npm run console
```
```
truffle(test)> Faucet.deployed().token.call(); // 0xSomeHexaAddress
```
