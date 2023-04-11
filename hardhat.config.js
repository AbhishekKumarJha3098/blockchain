/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.1",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: "https://polygon-mumbai.g.alchemy.com/v2/lVh144DjFt4Njw02fx4E9sDhDOrDpB3o",
         accounts: ["a27407710cd230da13c082235d61a3621adbdb7b7d260214dde231b74a467a7d"]
   }
  }
}