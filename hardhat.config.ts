import 'dotenv/config';
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    mainnet: {
      url: process.env.MAINNET_URL || "",
      accounts: process.env.PRIVATE_KEY_DEV1 !== undefined ? [process.env.PRIVATE_KEY_DEV1] : []
    },
    polygon: {
      url: process.env.POLYGON_URL || "",
      accounts: process.env.PRIVATE_KEY_DEV1 !== undefined ? [process.env.PRIVATE_KEY_DEV1] : []
    },
    goerli: {
      url: process.env.GOERLI_URL || "",
      accounts: process.env.PRIVATE_KEY_DEV1 !== undefined ? [process.env.PRIVATE_KEY_DEV1] : []
    },
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      accounts: process.env.PRIVATE_KEY_DEV1 !== undefined ? [process.env.PRIVATE_KEY_DEV1] : []
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  }
};

export default config;
