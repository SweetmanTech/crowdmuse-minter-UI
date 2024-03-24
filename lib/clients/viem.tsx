import { PublicClient, createPublicClient, http } from 'viem';
import getViemNetwork from './getViemNetwork';

export const getPublicClient = (chainId: number) => {
  const chain = getViemNetwork(chainId);
  const publicClient = createPublicClient({
    chain,
    transport: http(),
  });
  return publicClient as PublicClient;
};
