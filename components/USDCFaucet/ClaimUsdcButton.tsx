'use client';

import usePrepare from '@/hooks/usePrepare';
import Button from '../Button';
import useFaucetMint from '@/hooks/useFaucetMint';

const ClaimUsdcButton = () => {
  const { mint } = useFaucetMint();
  const { prepare } = usePrepare();

  const handleClick = () => {
    if (!prepare()) return;
    mint();
  };

  return (
    <Button className="bg-black w-[222px] rounded-xl py-3" onClick={handleClick}>
      Claim USDC
    </Button>
  );
};

export default ClaimUsdcButton;
