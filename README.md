# Ether Mempool Sniper (MEV) ⚡

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![Solidity](https://img.shields.io/badge/solidity-v0.8.19-blue) ![License](https://img.shields.io/badge/license-MIT-orange)

## System Architecture

The **Ether Mempool Sniper** is a Node.js based High-Frequency Trading (HFT) bot designed for EVM-compatible chains. It operates by bypassing the standard transaction queue and listening directly to the node's mempool stream.

### Core Modules

1.  **Mempool Listener**: WebSocket connection to Alchemy/Infura to intercept `pending` transactions.
2.  **Decoder**: Real-time ABI decoding to identify `addLiquidityETH` or `openTrading` methods.
3.  **Safety Engine**: Checks for honeypots, tax rates, and locked liquidity before firing.
4.  **Executor**: Interacts with the Router contract to swap ETH for the new token with optimized gas fees (Bribe/Tip).

### Configuration

The bot logic is decentralized across flat files for easy deployment on cloud environments (AWS Lambda/Heroku) or local servers. All sensitive parameters are handled via environment variables.

### Technology Stack

* **Runtime**: Node.js
* **Library**: Ethers.js v5.7 (chosen for stability over v6)
* **Protocol**: WebSocket (WSS)
* **Standards**: ERC-20, Uniswap V2 Protocol

---
*Note: This repository is for research and algorithmic trading development.*
