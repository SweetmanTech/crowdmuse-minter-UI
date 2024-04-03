import { createWalletClient, custom } from 'viem';
import { CHAIN } from './consts';

const getWalletClient = async (wallet: any, connectedWallet: any) => {
  const provider = await (wallet as any).getEthereumProvider();
  const walletClient = createWalletClient({
    chain: CHAIN,
    account: connectedWallet as `0x${string}`,
    transport: custom(provider),
  });
  return walletClient;
};

export default getWalletClient;
