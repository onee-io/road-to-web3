# Road to Web3

> [https://docs.alchemy.com/docs/welcome-to-the-road-to-web3](https://docs.alchemy.com/docs/welcome-to-the-road-to-web3)

Alchemy 活动 —— Web3 之路，一个为期 10 周的 Web3 技能学习计划，旨在帮助区块链开发者从入门到~~放弃~~精通。

## 使用方式

1. 执行 `npm install` 命令，安装项目所需依赖库；
2. 将 `.env_template` 重命名为 `.env`，填写好私钥及 Alchemy Key 信息；
3. 参考 `contract` 目录下每周任务的合约源码；
4. 参考 `script` 目录下每周任务的合约部署及执行脚本；

## 水龙头（领取测试网的测试币）

- Rinkeby: [https://rinkebyfaucet.com/](https://rinkebyfaucet.com/)

## 活动计划

### Week 1 - 如何开发一个 ERC721 标准的 NFT 合约？

> [https://docs.alchemy.com/docs/how-to-develop-an-nft-smart-contract-erc721-with-alchemy](https://docs.alchemy.com/docs/how-to-develop-an-nft-smart-contract-erc721-with-alchemy)

#### 部署合约

```sh
# 在 Rinkeby 网络部署合约
npx hardhat run --network rinkeby scripts/week1/deploy.ts
```

合约地址：[0x9b1c0175860b8f6bd77D49037Bb1449Ebf0196Cd](https://rinkeby.etherscan.io/address/0x9b1c0175860b8f6bd77D49037Bb1449Ebf0196Cd)

#### Mint 一个 NFT

```sh
ts-node scripts/week1/mint-nft.ts
```

#### 在 OpenSea 查看 Mint 的 NFT

[https://testnets.opensea.io/Cryptonee](https://testnets.opensea.io/Cryptonee)

### Week 2 - 如何构建一个 “给我买杯咖啡” 的 DApp？

> [https://docs.alchemy.com/docs/how-to-build-buy-me-a-coffee-defi-dapp](https://docs.alchemy.com/docs/how-to-build-buy-me-a-coffee-defi-dapp)

### Week 3 - 如何使用链上数据制作 NFT？

> [https://docs.alchemy.com/docs/how-to-make-nfts-with-on-chain-metadata-hardhat-and-javascript](https://docs.alchemy.com/docs/how-to-make-nfts-with-on-chain-metadata-hardhat-and-javascript)

### Week 4 - 如何构建一个 NFT 画廊？

> [https://docs.alchemy.com/docs/how-to-create-an-nft-gallery](https://docs.alchemy.com/docs/how-to-create-an-nft-gallery)

### Week 5 - 如何在合约中使用 ChainLink 的 API？

> [https://docs.alchemy.com/docs/5-connect-apis-to-your-smart-contracts-using-chainlink](https://docs.alchemy.com/docs/5-connect-apis-to-your-smart-contracts-using-chainlink)

### Week 6 - 如何构建一个质押类 DApp?

> [https://docs.alchemy.com/docs/how-to-build-a-staking-dapp](https://docs.alchemy.com/docs/how-to-build-a-staking-dapp)

### Week 7 - 如何使用 Scratch 构建一个 NFT 交易市场？

> [https://docs.alchemy.com/docs/how-to-build-an-nft-marketplace-from-scratch](https://docs.alchemy.com/docs/how-to-build-an-nft-marketplace-from-scratch)

### Week 8 - 如何在 Optimism 链上构建一个赌注游戏？

> [https://docs.alchemy.com/docs/how-to-build-a-betting-game-on-optimism](https://docs.alchemy.com/docs/how-to-build-a-betting-game-on-optimism)

### Week 9 - 如何使用 0x 的 API 构建一个代币兑换的 DApp？

> [https://docs.alchemy.com/docs/how-to-build-a-token-swap-dapp-with-0x-api](https://docs.alchemy.com/docs/how-to-build-a-token-swap-dapp-with-0x-api)

### Week 10 - 如何使用 Lens 协议构建一个去中心化的 Twitter？

> [https://docs.alchemy.com/docs/how-to-create-a-decentralized-twitter-with-lens-protocol](https://docs.alchemy.com/docs/how-to-create-a-decentralized-twitter-with-lens-protocol)
