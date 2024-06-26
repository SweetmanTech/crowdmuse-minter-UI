import MadeBySweets from '../MadeBySweets';
import CollectButton from './CollectButton';
import LandingPageHeader from './LandingPageHeader';

const LandingPageContent = () => (
  <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
    <LandingPageHeader />
    <CollectButton />
    <MadeBySweets />
  </div>
);

export default LandingPageContent;
