import { useCallback } from 'react';
import useConnectedWallet from './useConnectedWallet';
import usePrivyWalletClient from './usePrivyWalletClient';
import { erc20Abi } from 'viem';
import { CHAIN } from '@/lib/consts';

const useApprove = () => {
  const { externalWallet } = useConnectedWallet();
  const { walletClient } = usePrivyWalletClient();

  const approve = useCallback(
    async ({ erc20Address, spender, value }: any) => {
      const address = externalWallet?.address;
      if (!address) {
        return;
      }

      try {
        const request = {
          address: erc20Address,
          abi: erc20Abi,
          functionName: 'approve',
          chain: CHAIN,
          args: [spender, value],
          account: address,
        };
        const hash = await walletClient?.writeContract?.(request as any);
        return hash;
      } catch (error: any) {
        console.error(error.message);
      }
    },
    [externalWallet],
  );

  return { approve };
};

export default useApprove;
