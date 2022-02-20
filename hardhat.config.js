require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require("hardhat-deploy");

require('dotenv').config()


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {"version": "0.6.11"},
      {"version": "0.6.12"},
      {"version": "0.7.6"},
    ]
  },
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/JJjKH1QMieKSbAowFnLqflQh4fvklEqm',
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  namedAccounts: {
    admin: {
      default: 0,
    },
    userOne: {
      default: 1,
    }
  }
};
