const { analyzeTx } = require('./analyzer');
const { logInfo } = require('./logger');

async function startScanning(provider, wallet) {
    logInfo('MEMPOOL', 'Listening for pending transactions...');

    provider.on('pending', async (txHash) => {
        try {
            const tx = await provider.getTransaction(txHash);
            if (tx && tx.to && tx.data) {
                // Pass transaction to analyzer
                analyzeTx(tx, wallet);
            }
        } catch (err) {
            // Suppress websocket noise
        }
    });
}

module.exports = { startScanning };
