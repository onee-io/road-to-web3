import { ethers } from "hardhat";

async function main(): Promise<void> {
    // 获取将要部署的合约
    const ChainBattles = await ethers.getContractFactory('ChainBattles');
    const contract = await ChainBattles.deploy();
    // 部署合约
    await contract.deployed();
    console.log(`Contract deployed to ${contract.address}`);
}

main();