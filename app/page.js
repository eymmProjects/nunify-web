import Header from "./_component/Layout/Header";
import LogoCloud from "./_component/landing/LogoCloud";
import InfoBlocks from "./_component/landing/InfoBlocks";
import InfoBlocksWhy from "./_component/landing/InfoBlocksWhy";
import InfoBlocksHeader from "./_component/landing/InfoBlocksHeader";
import Feature from "./_component/landing/Feature";
import LogoCloudData from "./_component/landing/LogoCloudData";
import DemoBanner from "./_component/landing/DemoBanner";
import Footer from "./_component/Layout/Footer";
import InfoBlockCEO from "./_component/landing/InfoBlockCEO";
import { MdEditDocument } from "react-icons/md";
import InfoBlocksContainer from "./_component/landing/InfoBlocks";
import LogoPlaceholder from "@/public/Images/logo-placeholder-image.png";

const infoBlocksData_1 = [
  {
    title: "CMS / Automation",
    subtitle: "Set up AI auto follow up and CMS Automations",
    // icon: MdEditDocument,
    content:
      "This module handles all your leads from all your different modules and inbound marketing. Where you can categorize and sort your contacts in one place. This includes the settings for your AI auto follow up bot which can be trained on your personal data to give exact qualifications just like you would. Did the lead answer questions that would disqualify them from fitting your buy box? Automatically send them to a disqualified list. Did they answer in a way that makes them a qualified lead? Move them to a qualified lead list, schedule a call with you to close, or send them a contract automatically for digital signature. All from directly inside REIOS, and all automatically.",
  },
];
const infoBlocksData_2 = [
  {
    title: "DATA & SKIPTRACE",
    subtitle:
      "The highest quality and most specific data lists and skip tracing on the market",
    // icon: MdEditDocument,
    content:
      "Pulling quality data lists and doing skiptracing should not be a full time job. Other platforms are bulky, slow, and a chore to use. You should not be spending your time learning how to pull data somewhere else. We have curated the most specific and responsive data lists which we call “Golden Filters”. As well as give you access to the most granular searches you can find. All with a few clicks of a button. Once you use REIOS to pull data and skip trace once. You will never want to use another system again. ",
  },
];
const infoBlocksData_3 = [
  {
    title: "COLD CALLERS/ TC's",
    subtitle:
      "Finally an actual way to automate your business, with Cold Callers and Transaction Coordinators",
    // icon: MdEditDocument,
    content:
      "Gone are the days of trying to find, train, hire, and manage cold callers to make phone calls for you. REIOS has a built in Cold Caller system like no other. You upload a list that you have skiptraced from REIOS or anywhere else, click upload, and set how many hours you would like cold callers to call on that list. That’s it. We take care of the rest.  ",
  },
];

const infoBlocksData_4 = [
  {
    title: "DISPOSITION",
    subtitle: "Sell your deals quickly and easily ",
    // icon: MdEditDocument,
    content:
      "Our Built in Dispo module will give you a place to post any deal that you are looking to sell. Whether you are a wholesaler looking to assign your contracts, or a home owner looking to sell. You can post your deal, and have a group of hungry buyers sending you offers. Not only that, but in REIOS we automate the whole process. With 1 click offer acceptance or counter offers. As well as document uploads and digital signatures, all directly inside your REIOS Account.",
  },
];

const infoBlocksData_5 = [
  {
    title: "TOOLS",
    subtitle: "REIOS has so much more to offer ",
    // icon: MdEditDocument,
    content:
      "Aside from our 6 modules we have so many more tools and offerings that will simplify and improve your business. Including creating purchase agreements and contracts with 1 click, digital signatures and online notarizations, Training Library and mentorship, driving for dollars app and more.  ",
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <LogoCloud text=" As featured on the following outlets​" />
      <InfoBlocksHeader />
      <InfoBlocksContainer
        imageUrl={LogoPlaceholder}
        data={infoBlocksData_1}
        showImageRight={true}
      />
      <InfoBlocksContainer
        imageUrl={LogoPlaceholder}
        data={infoBlocksData_2}
        showImageRight={false}
      />
      <InfoBlocksContainer
        imageUrl={LogoPlaceholder}
        data={infoBlocksData_3}
        showImageRight={true}
      />
      <InfoBlocksContainer
        imageUrl={LogoPlaceholder}
        data={infoBlocksData_4}
        showImageRight={false}
      />
      <InfoBlocksContainer
        imageUrl={LogoPlaceholder}
        data={infoBlocksData_5}
        showImageRight={true}
      />

      <Feature />
      <LogoCloudData
        text="Your Data is Safe with us."
        paragraph="We have the the most stringent data security and privacy in place."
      />
      <InfoBlockCEO />
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
