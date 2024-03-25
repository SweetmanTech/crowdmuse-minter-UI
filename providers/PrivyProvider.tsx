'use client';

import { PrivyProvider as Privy } from '@privy-io/react-auth';

const PrivyProvider = ({ children }: { children: React.ReactNode }) => (
  <Privy
    appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
    config={{
      appearance: {
        theme: 'light',
        accentColor: '#676FFF',
        logo: '/images/crowdmuse.jpeg',
      },
      embeddedWallets: {
        createOnLogin: 'users-without-wallets',
      },
      loginMethods: ['wallet'],
    }}
  >
    {children}
  </Privy>
);

export default PrivyProvider;
