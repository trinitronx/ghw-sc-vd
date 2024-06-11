/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();

require("@nomiclabs/hardhat-waffle");
require("hardhat-slither");
const quickNodeAPIEndpoint = process.env.QUICKNODE_API_ENDPOINT;
const privateQuickNodeAPIToken = process.env.PRIVATE_QUICKNODE_API_TOKEN;
const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;
const sepoliaQuickNodeApiEndpoint = `https://${quickNodeAPIEndpoint}/${privateQuickNodeAPIToken}/`;
const DEBUG = process.env.HARDHAT_DEBUG || false;

module.exports = {
  solidity: "0.6.10",
  networks: {
    sepolia: {
      chainId: 11155111,
      url: sepoliaQuickNodeApiEndpoint,
      accounts: [walletPrivateKey],
    },
  },
};

if (DEBUG) {
  console.log(`quickNodeAPIEndpoint: ${quickNodeAPIEndpoint}`);
  console.log(`sepoliaQuickNodeApiEndpoint: ${sepoliaQuickNodeApiEndpoint}`);
  console.log(`privateQuickNodeAPIToken: ${privateQuickNodeAPIToken}`);
  console.log(`walletPrivateKey: ${walletPrivateKey}`);
}
