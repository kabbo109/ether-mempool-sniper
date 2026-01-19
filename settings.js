module.exports = {
    // Target Configuration
    ROUTER_ADDRESS: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', // Uniswap V2
    WETH_ADDRESS: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    
    // Trading Parameters
    BUY_AMOUNT: '0.05', // ETH
    SLIPPAGE_TOLERANCE: 15, // Percent
    GAS_TIP_GWEI: '5',
    
    // Safety
    HONEYPOT_CHECK: true,
    MAX_BUY_TAX: 5 // Avoid tokens with tax > 5%
};
