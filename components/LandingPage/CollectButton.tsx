import usePrepare from '@/hooks/usePrepare';
import Button from '../Button';
import useCrowdmuseMinter from '@/hooks/useCrowdmuseMinter';

const CollectButton = () => {
  const { prepare } = usePrepare();
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
