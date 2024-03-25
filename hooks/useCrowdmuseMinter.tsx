import { useCallback } from 'react';
import useConnectedWallet from './useConnectedWallet';
import usePrivyWalletClient from './usePrivyWalletClient';
import abi from '@/lib/abi/crowdmuse-basic-minter.json';
import { baseSepolia } from 'viem/chains';
import { encodePacked, keccak256 } from 'viem';
import { DROP, MINTER } from '@/lib/consts';

const useCrowdmuseMinter = () => {
  const { externalWallet } = useConnectedWallet();
  const { walletClient } = usePrivyWalletClient();

  const mint = useCallback(async () => {
    const address = externalWallet?.address;
    if (!address) {
      return;
    }

    try {
      const garmentType = keccak256(encodePacked(['string'], ['size:one']));
      console.log('SWEETS garmentType', garmentType);
      const request = {
        address: MINTER,
        abi: abi,
        functionName: 'mint',
        chain: baseSepolia,
        args: [DROP, address, garmentType, 1, 'HELLO WORLD'],
        account: address,
      };
      console.log('SWEETS request', request);

      await walletClient?.writeContract?.(request as any);
    } catch (error: any) {
      console.error(error.message);
    }
  }, [externalWallet]);

  return { mint };
};

export default useCrowdmuseMinter;
