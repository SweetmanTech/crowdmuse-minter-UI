import { erc20Abi } from 'viem';
import { getPublicClient } from './clients';
import { CHAIN } from './consts';

const getAllowance = async (
  erc20Address: `0x${string}`,
  owner: `0x${string}`,
  spender: `0x${string}`,
) => {
  try {
    const publicClient = getPublicClient(CHAIN.id);
    const data = await publicClient.readContract({
      address: erc20Address,
      abi: erc20Abi,
      functionName: 'allowance',
      args: [owner, spender],
    });
    return data;
  } catch (error: any) {
    console.error(error.message);
  }
};

export default getAllowance;
