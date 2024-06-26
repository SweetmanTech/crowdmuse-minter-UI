import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/Card/Card';
import ClaimUsdcButton from './ClaimUsdcButton';

const USDCFaucet = () => (
  <Card className="w-full max-w-lg">
    <CardHeader>
      <CardTitle className="text-center">USDC Faucet</CardTitle>
      <CardDescription className="text-center">
        Enter your USDC address to receive funds.
      </CardDescription>
    </CardHeader>
    <CardContent className="flex flex gap-4 justify-center">
      <ClaimUsdcButton />
    </CardContent>
  </Card>
);

export default USDCFaucet;
