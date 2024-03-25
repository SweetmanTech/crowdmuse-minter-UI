import usePrepare from '@/hooks/usePrepare';
import Button from '../Button';
import useCrowdmuseBuyNft from '@/hooks/useCrowdmuseBuyNft';
import useConnectedWallet from '@/hooks/useConnectedWallet';
import useCrowdmuseMinter from '@/hooks/useCrowdmuseMinter';

const CollectButton = () => {
  const { externalWallet } = useConnectedWallet();
  const { prepare } = usePrepare();
  const { buyNft } = useCrowdmuseBuyNft();
  const { mint } = useCrowdmuseMinter();

  const handleClick = async () => {
    if (!prepare()) return;
    mint();
  };

  return (
    <Button onClick={handleClick} className="bg-black px-11 py-3 rounded-xl">
      Collect
    </Button>
  );
};

export default CollectButton;
