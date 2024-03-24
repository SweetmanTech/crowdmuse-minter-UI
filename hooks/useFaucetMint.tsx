import { useCallback } from 'react';
import useConnectedWallet from './useConnectedWallet';
import usePrivyWalletClient from './usePrivyWalletClient';
import usdcAbi from '@/lib/abi/usdc.json';
import { baseSepolia } from 'viem/chains';
import { USDC } from '@/lib/consts';

const useFaucetMint = () => {
  const { externalWallet } = useConnectedWallet();
  const { walletClient } = usePrivyWalletClient();

  const mint = useCallback(async () => {
    const address = externalWallet?.address;
    if (!address) {
      return;
    }

    try {
      const request = {
        address: USDC,
        abi: usdcAbi,
        functionName: 'mintTo',
        chain: baseSepolia,
        args: [address, 999999999n],
        account: address,
      };

      await walletClient?.writeContract?.(request as any);
    } catch (error: any) {
      console.error(error.message);
    }
  }, [externalWallet]);

  return { mint };
};

export default useFaucetMint;
