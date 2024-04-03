import { useEffect, useState } from 'react';
import { WalletClient, createWalletClient, custom } from 'viem';
import useConnectedWallet from './useConnectedWallet';
import { CHAIN } from '@/lib/consts';

const usePrivyWalletClient = () => {
  const { connectedWallet, wallet } = useConnectedWallet();
  const [walletClient, setWalletClient] = useState<WalletClient | null>(null);

  useEffect(() => {
    const init = async () => {
      if (!wallet) return;
      const provider = await wallet.getEthereumProvider();
      const response = createWalletClient({
        chain: CHAIN,
        account: connectedWallet as `0x${string}`,
        transport: custom(provider),
      });
      setWalletClient(response);
    };

    if (!connectedWallet) return;
    init();
  }, [connectedWallet]);

  return { walletClient };
};

export default usePrivyWalletClient;
