import 'dotenv/config';
import { Wallet, Contract, PayableOverrides, ethers } from 'ethers';
import { JsonRpcProvider, TransactionReceipt, TransactionResponse } from '@ethersproject/providers';
import { JsonFragment } from '@ethersproject/abi';

/**
 * 备忘信息结构定义
 */
interface Memo {
    from: string,
    timestamp: number
    name: string,
    message: string
}

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
 * 打印所有备忘记录列表
 * @param contract 合约实例
 */
async function printAllMemos(contract: Contract): Promise<void> {
    const memos: Memo[] = await contract.getMemos();
    memos.forEach(memo => {
        console.log(`At ${memo.timestamp}, ${memo.name} (${memo.from}) said: ${memo.message}`);
    });
}

/**
 * 购买一杯咖啡
 * @param contract 合约实例
 * @param name 购买者名称
 * @param message 购买者留言
 * @param price 价格（ETH）
 */
async function buyCoffee(contract: Contract, name: string, message: string, price: string): Promise<void> {
    const overrides: PayableOverrides = {
        value: ethers.utils.parseEther(price)
    };
    const response: TransactionResponse = await contract.buyCoffee(name, message, overrides);
    const receipt: TransactionReceipt = await response.wait();
    console.log(`购买咖啡交易已完成 txHash=${receipt.transactionHash}`);
}

/**
 * 提现合约中所有资金
 * @param contract 合约实例
 */
async function withdraw(contract: Contract): Promise<void> {
    const response: TransactionResponse = await contract.withdrawTips();
    const receipt: TransactionReceipt = await response.wait();
    console.log(`提现操作已完成 txhash=${receipt.transactionHash}`);
}

/**
 * 购买一大杯咖啡
 * @param contract 合约实例
 * @param name 购买者名称
 * @param message 购买者留言
 * @param price 价格（ETH）
 */
async function buyLargeCoffee(contract: Contract, name: string, message: string): Promise<void> {
    await buyCoffee(contract, name, message, '0.003');
}

/**
 * 更改合约拥有者
 * @param contracct 合约实例
 * @param newOwner 新的合约拥有者地址
 */
async function changeOwner(contracct: Contract, newOwner: string): Promise<void> {
    const response: TransactionResponse = await contracct.changeOwner(newOwner);
    const receipt: TransactionReceipt = await response.wait();
    console.log(`更改合约拥有者操作已完成 newOwner=${newOwner} txhash=${receipt.transactionHash}`);
}

async function main(): Promise<void> {
    // 连接钱包
    const privateKey = process.env.PRIVATE_KEY as string;
    const rpcUrl = `https://eth-goerli.g.alchemy.com/v2/${process.env.GOERLI_KEY}`;
    const wallet = new Wallet(privateKey, new JsonRpcProvider(rpcUrl));
    // 初始化合约
    const contract = initContract('0x358c9e46f5d51d361ae3259f9eaaa63afa33303c', wallet);
    // 购买一杯咖啡
    await buyCoffee(contract, 'Cryptonee', 'Good Job!', '0.001');
    // 购买一大杯咖啡
    await buyLargeCoffee(contract, 'onee', 'You are the best');
    // 打印备忘记录
    await printAllMemos(contract);
    // 提现资金
    await withdraw(contract);
    // 更改合约拥有者
    await changeOwner(contract, '0x0000000000081a1fb7f931BDc2e3806aAa4d81A9');
}

main();