import usePrepare from '@/hooks/usePrepare';
import Button from '../Button';
import redeem from '@/lib/redeem';
import useConnectedWallet from '@/hooks/useConnectedWallet';
import { DROP } from '@/lib/consts';
import getWalletClient from '@/lib/getWalletClient';

const RedeemButton = () => {
  const { prepare } = usePrepare();
  const { wallet, connectedWallet } = useConnectedWallet();

  const handleClick = async () => {
    if (!prepare()) return;
    const walletClient = await getWalletClient(wallet, connectedWallet);
    await redeem(connectedWallet, DROP, walletClient);
  };

  return (
    <Button onClick={handleClick} className="bg-black px-11 py-3 rounded-xl">
      Redeem
    </Button>
  );
};

export default RedeemButton;
