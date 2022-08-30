import 'dotenv/config';
import { Wallet, Contract, BigNumber } from 'ethers';
import { JsonRpcProvider, TransactionReceipt, TransactionResponse } from '@ethersproject/providers';
import { JsonFragment } from '@ethersproject/abi';

/**
 * 初始化合约实例
 * @param contractAddress 合约地址
 * @param wallet 钱包
 * @returns 合约实例
 */
function initContract(contractAddress: string, wallet: Wallet): Contract {
    const abi: JsonFragment[] = require('./abi.json');
    return new Contract(contractAddress, abi, wallet);
}

/**
 * 铸造 NFT
 * @param contract 合约实例
 */
async function mint(contract: Contract): Promise<void> {
    const response: TransactionResponse = await contract.mint();
    const receipt: TransactionReceipt = await response.wait();
    console.log(`铸造 NFT 完成 txHash=${receipt.transactionHash}`);
}

/**
 * 训练 NFT 升级
 * @param contract 合约实例
 * @param tokenId NFT 编号
 */
async function train(contract: Contract, tokenId: BigNumber): Promise<void> {
    const response: TransactionResponse = await contract.train(tokenId);
    const receipt: TransactionReceipt = await response.wait();
    console.log(`训练升级 NFT 完成 tokenId=${tokenId.toString()} txHash=${receipt.transactionHash}`);
}

/**
 * 打印 NFT 元数据
 * @param contract 合约实例
 * @param tokenId NFT 编号
 */
async function printTokenURI(contract: Contract, tokenId: BigNumber): Promise<void> {
    const tokenUri: string = await contract.tokenURI(tokenId);
    console.log(`tokenId=${tokenId.toString()} metadata=${tokenUri}`);
}

async function main(): Promise<void> {
    // 连接钱包
    const privateKey = process.env.PRIVATE_KEY as string;
    const rpcUrl = `https://polygon-mumbai.g.alchemy.com/v2/${process.env.MUMBAI_KEY}`;
    const wallet = new Wallet(privateKey, new JsonRpcProvider(rpcUrl));
    // 初始化合约
    const contract = initContract('0xf82932c1c3aeD99B1934d094bB0b8041526B139B', wallet);
    // 铸造 NFT
    await mint(contract);
    // 打印 NFT 元数据
    const tokenId: BigNumber = BigNumber.from("1");
    await printTokenURI(contract, tokenId);
    // 训练升级 NFT
    await train(contract, tokenId);
    // 打印 NFT 元数据
    await printTokenURI(contract, tokenId);
}

main();