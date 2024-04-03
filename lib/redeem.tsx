import abi from '@/lib/abi/escrow-minter.json';
import { CHAIN, MINTER } from './consts';

const redeem = async (account: any, target: any, walletClient: any) => {
  try {
    const request = {
      address: MINTER,
      abi,
      functionName: 'redeem',
      chain: CHAIN,
      args: [target],
      account,
    };
    console.log('SWEETS REDEEM REQUEST', request);
    console.log('SWEETS walletClient', walletClient);
    const hash = await walletClient?.writeContract?.(request as any);
    return hash;
  } catch (error: any) {
    console.error(error.message);
  }
};

export default redeem;
