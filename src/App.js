
import NewComponent from "./components/NewComponents/NewComponent";
import SuccessStory from "./components/SuccessStory/SuccessStory";
import HiringAudit from "./components/HiringAudit/HiringAudit";
import TalentAssistements from "./components/TalentAssistements/TalentAssistements";
import BrandCard from "./components/BrandCard/BrandCard";
import Pricing from "./components/Pricing/Pricing";
import CustomerTest from "./components/CustomerTest/CustomerTest";
import NavHeader from "./components/NavHeader/NavHeader";
import HiringPlatform from "./components/HiringPlatform/HiringPlatform";
import SystemOperates1 from "./components/SystemOperate1/SystemOperates1";
import FAQSectionDiv from "./components/FAQSectionDiv/FAQSectionDiv";




function App() {

  return (

    <div className="container">
      <NavHeader></NavHeader>
      <BrandCard></BrandCard>
      <NewComponent></NewComponent>
      <SystemOperates1></SystemOperates1>
      <Pricing></Pricing>
      <TalentAssistements></TalentAssistements>
      <CustomerTest></CustomerTest>
      <HiringPlatform></HiringPlatform>
      <SuccessStory></SuccessStory>
      <FAQSectionDiv></FAQSectionDiv>
      <HiringAudit></HiringAudit>

    </div>

  );
}
export default App;
