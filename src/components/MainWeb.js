import React from "react";
import ParaLayout from "./ParaLayout/ParaLayout";
import Benefitsbox from "./Features/Benefitsbox";
import Flexibility from "../assets/flexibility.jpg";
import Coverage from "../assets/coverage.jpg";
import Consistency from "../assets/consistency.jpg";
import Enablement from "../assets/enablement.jpg";
import Scalibility from "../assets/scalibility.jpg";
import Comprehensiveness from "../assets/comprehensiveness.jpg";
import ServicesImg from "../assets/services.jpg";
import ScheduleConsultation from "./Buttons/ScheduleConsultation";

const MainWeb = () => {
  return (
    <div className="flex flex-col gap-8 text-lg">
      <ParaLayout
        title="Your application never be under threat."
        description="Today sophisticated attackers continue to circumvent perimeter defenses and target the data and applications at the heart of your business. Their goal is to attack the very systems and data that help you to create and keep customers, manage and create intellectual property, and maintain a positive cash flow."
      />

      <ParaLayout description="At A to Z Security we have a proven approach to network security and we provide the best detection and the greatest coverage by identifying malicious content, communications, and behavior across every stage of the attack sequence." />

      <ParaLayout className="w-full" description="We provide you with the latest testing services that covers the following domains:">
        <div className="flex flex-col w-full md:flex-row justify-between  items-center gap-8">
          <ul className="list-disc flex flex-col gap-2 ml-6 order-1 sm:order-[0]">
            <li className="!text-lg">Web Application Security Testing</li>
            <li className="!text-lg">Mobile Application Security Testing</li>
            <li className="!text-lg">Penetration Testing Service</li>
            <li className="!text-lg">Vulnerability Assessment Service</li>
            <li className="!text-lg">Source Code Audit Service</li>
            <li className="!text-lg">
              Annual Website Security Management Service
            </li>
          </ul>
          <img src={ServicesImg} className="w-full  md:w-96 rounded  border" />
        </div>
      </ParaLayout>

      <hr />

      <section className="flex flex-col gap-12">
        <h3 className="font-semibold text-center text-xl">
          Key Benefits of our testing services
        </h3>
        <div className="flex flex-col gap-2 w-full">
          <Benefitsbox
            title="Flexibility"
            imagePos="right"
            description="As business requirements and threats change, manage your assessments, plan tests, decide on the required level of testing, and make adjustments."
            image={Flexibility}
            alt="flex-image"
          />
          <Benefitsbox
            imagePos="left"
            title="Coverage"
            description="Test mobile applications you might miss owing to resource constraints"
            image={Coverage}
            alt="flex-image"
          />
          <Benefitsbox
            title="Consistency"
            imagePos="right"
            description="Receive consistent, high-quality MAST results for any mobile application."
            image={Consistency}
            alt="flex-image"
          />
          <Benefitsbox
            imagePos="left"
            title="Enablement"
            description="We walk you through your test results and help you develop a remediation plan best suited to your needs."
            image={Enablement}
            alt="flex-image"
          />
          <Benefitsbox
            title="Scalability"
            imagePos="right"
            description="We provide scalable MAST delivery through our Assessment Centers without compromising manual reviews."
            image={Scalibility}
            alt="flex-image"
          />
          <Benefitsbox
            imagePos="left"
            title="Comprehensiveness"
            description="We use a hybrid manual and tool-based assessment technique that includes in-depth findings analysis, full reporting, and actionable remediation guidance."
            image={Comprehensiveness}
            alt="flex-image"
          />
        </div>
      </section>
      
      <ScheduleConsultation />
    </div>
  );
};

export default MainWeb;
