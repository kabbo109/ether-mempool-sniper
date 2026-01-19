const { ethers } = require('ethers');
require('dotenv').config();

function initConnection() {
    const rpc = process.env.RPC_WSS_URL;
    const key = process.env.PRIVATE_KEY;

    if (!rpc || !key) {
        throw new Error('Missing configuration in .env');
    }

    const provider = new ethers.providers.WebSocketProvider(rpc);
    const wallet = new ethers.Wallet(key, provider);

    return { provider, wallet };
}

module.exports = { initConnection };
