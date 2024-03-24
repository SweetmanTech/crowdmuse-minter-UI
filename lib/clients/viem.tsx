import { Chain, PublicClient, createPublicClient, http } from 'viem';
import getViemNetwork from './getViemNetwork';

export const RPC_URL = `https://base-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`;

export const getPublicClient = (chainId: number) => {
  const chain = getViemNetwork(chainId);
  const publicClient = createPublicClient({
    chain: chain as Chain,
    transport: http(RPC_URL),
  });
  return publicClient as PublicClient;
};
