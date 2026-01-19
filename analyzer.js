const { executeTrade } = require('./executor');
const { logInfo, logSuccess } = require('./logger');

// Method ID for 'addLiquidityETH'
const METHOD_ID = '0xf305d719'; 

async function analyzeTx(tx, wallet) {
    if (tx.data.startsWith(METHOD_ID)) {
        logSuccess('DETECT', `Liquidity Add Detected: ${tx.hash}`);
        
        // Decode logic would go here to extract token address
        // For simulation, we assume valid
        
        logInfo('STRATEGY', 'Calculating Front-Run Opportunity...');
        await executeTrade(wallet, tx);
    }
}

module.exports = { analyzeTx };
