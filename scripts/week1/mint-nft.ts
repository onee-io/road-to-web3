import 'dotenv/config';
import { Wallet, Contract } from 'ethers';
import { JsonRpcProvider, TransactionReceipt, TransactionResponse } from '@ethersproject/providers';

/**
 * Mint 一个 NFT
 * @param wallet 发起交易的钱包
 * @param to 接收 NFT 的钱包地址
 * @param uri NFT 的链接
 */
async function mintNFT(wallet: Wallet, to: string, uri: string): Promise<void> {
    // 定义ABI
    const abi: string[] = [ 'function safeMint(address to, string memory uri) public' ];
    // 加载合约
    const contract = new Contract('0x9b1c0175860b8f6bd77D49037Bb1449Ebf0196Cd', abi, wallet);
    // 执行 Mint 操作
    const response: TransactionResponse = await contract.safeMint(to, uri);
    console.log(`Mint 交易已提交 等待打包确认 txHash=${response.hash}`);
    const receipt: TransactionReceipt = await response.wait();
    console.log(`Mint 交易已确认 txHash=${receipt.transactionHash}`);
}

async function main(): Promise<void> {
    // 初始化钱包
    const privateKey = process.env.PRIVATE_KEY as string;
    const rpcUrl = `https://eth-rinkeby.alchemyapi.io/v2/${process.env.RINKEBY_KEY}`;
    const wallet = new Wallet(privateKey, new JsonRpcProvider(rpcUrl));
    // Mint 一个 NFT
    await mintNFT(wallet, wallet.address, `ipfs://QmWiqfSxZ7Jfd2PWGAYLYeGuRaTgtzCtNx2XzJjjusADVy`);
}

main();