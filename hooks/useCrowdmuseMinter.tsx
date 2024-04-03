import { useCallback } from 'react';
import useConnectedWallet from './useConnectedWallet';
import abi from '@/lib/abi/crowdmuse-basic-minter.json';
import { baseSepolia } from 'viem/chains';
import { createWalletClient, custom, encodePacked, keccak256 } from 'viem';
import { CHAIN, DROP, MINTER, PRICE, USDC } from '@/lib/consts';
import approve from '@/lib/approve';
import { toast } from 'react-toastify';
import getAllowance from '@/lib/getAllowance';

const useCrowdmuseMinter = () => {
  const { externalWallet, wallet, connectedWallet } = useConnectedWallet();

  const mint = useCallback(async () => {
    const address = externalWallet?.address;
    if (!address) {
      return;
    }
    const provider = await (wallet as any).getEthereumProvider();
    const walletClient = createWalletClient({
      chain: CHAIN,
      account: connectedWallet as `0x${string}`,
      transport: custom(provider),
    });
    const allowance = (await getAllowance(USDC, address as any, MINTER)) as bigint;

    if (allowance < PRICE) {
      if (!walletClient) {
        toast.error('missing wallet client to approve USDC spend', walletClient);
      }
      await approve(USDC, MINTER, address, PRICE, walletClient);
      return;
    }

    try {
      const garmentType = keccak256(encodePacked(['string'], ['size:one']));
      const request = {
        address: MINTER,
        abi: abi,
        functionName: 'mint',
        chain: baseSepolia,
        args: [DROP, address, garmentType, 1, 'HELLO WORLD'],
        account: address,
      };
      await walletClient?.writeContract?.(request as any);
    } catch (error: any) {
      console.error(error.message);
    }
  }, [externalWallet]);

  return { mint };
};

export default useCrowdmuseMinter;
