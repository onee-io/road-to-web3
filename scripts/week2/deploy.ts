import { ethers } from "hardhat";

async function main(): Promise<void> {
    // 获取将要部署的合约
    const BuyMeACoffee = await ethers.getContractFactory('BuyMeACoffee');
    const contract = await BuyMeACoffee.deploy();
    // 部署合约
    await contract.deployed();
    console.log(`Contract deployed to ${contract.address}`);
}

main();