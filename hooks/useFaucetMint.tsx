import { useCallback, useState } from 'react';
import useConnectedWallet from './useConnectedWallet';
import { ConnectedWallet } from '@privy-io/react-auth';

const useFaucetMint = () => {
  const { externalWallet } = useConnectedWallet();
  const [minting, setMinting] = useState(false);
  const [mintError, setMintError] = useState<string | null>(null);

  const mint = useCallback(async () => {
    const address = externalWallet?.address;
    if (!address) {
      return;
    }

    try {
      setMinting(true);
      setMintError(null);
      console.log('SWEETS MINT FAUCET WITH VIEM', address);
    } catch (error: any) {
      setMintError(error.message);
    } finally {
      setMinting(false);
    }
  }, [externalWallet]);

  return { mint, minting, mintError };
};

export default useFaucetMint;
