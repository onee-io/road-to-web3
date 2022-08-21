import { ethers } from "hardhat";

async function main(): Promise<void> {
    // 获取将要部署的合约
    const CryptoneeNFT = await ethers.getContractFactory('CryptoneeNFT');
    const contract = await CryptoneeNFT.deploy();
    // 部署合约
    await contract.deployed();
    console.log(`Contract deployed to ${contract.address}`);
}

main();