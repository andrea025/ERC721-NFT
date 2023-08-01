require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.7.3",
    networks: {
        hardhat: {},
        localhost: {
        	url: "http://127.0.0.1:8545",
        },
    }
};

