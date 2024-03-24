import { usePrivy } from '@privy-io/react-auth';

const usePrepare = () => {
  const { ready, authenticated, login } = usePrivy();
  const isLoggedIn = ready && authenticated;
  const disableLogin = !ready;

  const prepare = () => {
    if (disableLogin) return false;
    if (!isLoggedIn) {
      login();
      return false;
    }
    return true;
  };

  return { prepare };
};

export default usePrepare;
