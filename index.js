require('dotenv').config();
const { initConnection } = require('./connection');
const { startScanning } = require('./scanner');
const { logInfo } = require('./logger');

async function main() {
    console.clear();
    logInfo('SYSTEM', 'Initializing Sniper Bot...');
    
    try {
        const { provider, wallet } = initConnection();
        logInfo('AUTH', `Wallet Connected: ${wallet.address}`);
        
        // Start the infinite loop scanner
        await startScanning(provider, wallet);
        
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

main();
