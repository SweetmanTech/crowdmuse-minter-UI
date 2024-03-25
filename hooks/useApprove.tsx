import { useCallback } from 'react';
import useConnectedWallet from './useConnectedWallet';
import usePrivyWalletClient from './usePrivyWalletClient';
import abi from '@/lib/abi/crowdmuse-product.json';
import { baseSepolia } from 'viem/chains';
import { encodePacked, erc20Abi, keccak256 } from 'viem';
import { CHAIN, USDC } from '@/lib/consts';

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
        await walletClient?.writeContract?.(request as any);
      } catch (error: any) {
        console.error(error.message);
      }
    },
    [externalWallet],
  );

  return { approve };
};

export default useApprove;
