import { erc20Abi } from 'viem';
import { CHAIN } from './consts';

const approve = async (
  erc20Address: any,
  spender: any,
  account: any,
  value: any,
  walletClient: any,
) => {
  try {
    const request = {
      address: erc20Address,
      abi: erc20Abi,
      functionName: 'approve',
      chain: CHAIN,
      args: [spender, value],
      account,
    };
    console.log('SWEETS APPROVE REQUEST', request);
    console.log('SWEETS walletClient', walletClient);
    const hash = await walletClient?.writeContract?.(request as any);
    return hash;
  } catch (error: any) {
    console.error(error.message);
  }
};

export default approve;
