import Header from "./_component/Layout/Header";
import LogoCloud from "./_component/landing/LogoCloud";
import InfoBlocks from "./_component/landing/InfoBlocks";
import InfoBlocksWhy from "./_component/landing/InfoBlocksWhy";
import Feature from "./_component/landing/Feature";
import LogoCloudData from "./_component/landing/LogoCloudData";
import DemoBanner from "./_component/landing/DemoBanner";
import Footer from "./_component/Layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <LogoCloud text=" Event Teams That Trust Nunify Since 2014​" />
      <InfoBlocks />
      <InfoBlocks showImageRight={true} />
      {/* <InfoBlocks />
      <InfoBlocks showImageRight={true} />
      <InfoBlocks />
      <InfoBlocks showImageRight={true} />
      <InfoBlocks /> */}
      <Feature />
      <LogoCloudData
        text="Your Data is Safe with us."
        paragraph="We have the the most stringent data security and privacy in place."
      />
      <InfoBlocksWhy showImageRight={true} />
      <DemoBanner
        text=" Ready to test-drive our product?"
        paragraph="Get a guided walk-through of  nunify’s event technology platform to experience why we’re setting new standards for webinars, virtual events, in-person events , and Hybrid events!"
      />
      <Footer
        mission=" Making the world a better place through constructing elegant
              hierarchies"
      />
    </main>
  );
}
