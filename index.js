require('dotenv').config();

// require("@nomiclabs/hardhat-waffle");

const quickNodeAPIEndpoint = process.env.QUICKNODE_API_ENDPOINT;
const privateQuickNodeAPIToken = process.env.PRIVATE_QUICKNODE_API_TOKEN;
const sepoliaQuickNodeApiEndpoint = `https://${quickNodeAPIEndpoint}/${privateQuickNodeAPIToken}/`;
const DEBUG = process.env.NODE_DEBUG || false;

if (DEBUG) {
    console.log(`quickNodeAPIEndpoint: ${quickNodeAPIEndpoint}`);
    console.log(`sepoliaQuickNodeApiEndpoint: ${sepoliaQuickNodeApiEndpoint}`);
    console.log(`privateQuickNodeAPIToken: ${privateQuickNodeAPIToken}`);
    console.log(`privateQuickNodeAPIToken length: ${privateQuickNodeAPIToken.length}`);
}

const { Web3 } = require('web3');
// if you are using ESM style imports, use this line instead:
// import { Web3 } from 'web3';

const web3 = new Web3(sepoliaQuickNodeApiEndpoint);

async function fetchBlockNumber() {
    try {
        const currentBlockNumber = await web3.eth.getBlockNumber();
        console.log('Current block number:', currentBlockNumber);
    } catch (error) {
        console.error('Error fetching block number:', error);
    }
}

fetchBlockNumber();