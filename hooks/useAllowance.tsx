import { useEffect, useState } from 'react';
import getAllowance from '@/lib/getAllowance';

const useAllowance = (
  erc20Address: `0x${string}`,
  owner: `0x${string}`,
  spender: `0x${string}`,
) => {
  const [allowance, setAllowance] = useState<bigint>(0n);

  const refetch = async () => {
    const response = await getAllowance(erc20Address, owner, spender);
    if (!response) return;
    setAllowance(response);
  };

  useEffect(() => {
    if (!erc20Address || !owner || !spender) return;
    refetch();
  }, [erc20Address, owner, spender]);

  return { allowance, refetch };
};

export default useAllowance;
