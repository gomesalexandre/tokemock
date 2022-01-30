require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");

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
  }
};
