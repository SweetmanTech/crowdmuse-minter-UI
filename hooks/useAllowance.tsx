import { useCallback } from 'react';
import useConnectedWallet from './useConnectedWallet';
import { getPublicClient } from '@/lib/clients';
import { CHAIN } from '@/lib/consts';
import { erc20Abi } from 'viem';

const useAllowance = () => {
  const { externalWallet } = useConnectedWallet();

  const allowance = useCallback(
    async ({ erc20Address, owner, spender }: any) => {
      const address = externalWallet?.address;
      if (!address) {
        return;
      }

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
    },
    [externalWallet],
  );

  return { allowance };
};

export default useAllowance;
