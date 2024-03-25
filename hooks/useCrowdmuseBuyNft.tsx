import { useCallback } from 'react';
import useConnectedWallet from './useConnectedWallet';
import usePrivyWalletClient from './usePrivyWalletClient';
import abi from '@/lib/abi/crowdmuse-product.json';
import { baseSepolia } from 'viem/chains';
import { encodePacked, keccak256 } from 'viem';

const useCrowdmuseBuyNft = () => {
  const { externalWallet } = useConnectedWallet();
  const { walletClient } = usePrivyWalletClient();

  const buyNft = useCallback(async () => {
    const address = externalWallet?.address;
    if (!address) {
      return;
    }

    try {
      const DROP = '0xd87f9a5cA60C5571f8CB6b37a71E35c72f025b6d';
      const garmentType = keccak256(encodePacked(['string'], ['size:one']));
      console.log('SWEETS garmentType', garmentType);
      const request = {
        address: DROP,
        abi: abi,
        functionName: 'buyNFT',
        chain: baseSepolia,
        args: [address, garmentType, 1],
        account: address,
      };
      console.log('SWEETS request', request);

      await walletClient?.writeContract?.(request as any);
    } catch (error: any) {
      console.error(error.message);
    }
  }, [externalWallet]);

  return { buyNft };
};

export default useCrowdmuseBuyNft;
