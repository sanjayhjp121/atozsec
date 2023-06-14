import React from "react";
import ParaLayout from "./ParaLayout/ParaLayout";
import Image from "../assets/MobileApplication.png";
import FeatureBox from "./Features/FeatureBox";
import Standard from "../assets/standard.png";
import Comprehensive from "../assets/comprehensive.png";
import ScheduleConsultation from "./Buttons/ScheduleConsultation";

const MobApp = () => {
  return (
    <div className="flex flex-col gap-8">
      <ParaLayout
        title="Mobile Application Security Testing Service"
        description="A to Z Security’s Mobile App Security Testing service provides a detailed security analysis of your mobile app.Gartner CIO survey believes mobile technology will remain a disruptive force for the next 10 years.90% of the top mobile apps have access to local files that can contain sensitive customer data, corporate intellectual property, and personally identifiable information.mobi A to Z Security follows these steps to reduce the mobile risk."
        image={Image}
        imagePos="right"
      />

      <ParaLayout description="Reduce your risk of a breach by identifying and eliminating critical security vulnerabilities across your mobile application ecosystem with A to Z security experts. With the help of A to Z Mobile Application Security Testing (MAST), you can swiftly implement client-side code, server-side code, and third-party library analysis to systematically identify and patch security flaws in your mobile applications without access to the source code." />
      <h1 className="font-semibold text-xl mt-4 text-center">
        You can choose from 2 Depths of Mobile AppSec Testing
      </h1>

      <div className="flex flex-col md:flex-row">
        <FeatureBox image={Standard}  title="Standard" description="Uses a combination of automatic and manual analysis to find flaws in mobile application binaries that cannot be identified with automated analysis alone." />
        <FeatureBox image={Comprehensive} title="Comprehensive" description="Extended manual analysis in addition to Standard Service is used to identify vulnerabilities in server-side functionality and application binaries operating on mobile devices." />
      </div>


      <ScheduleConsultation />
    </div>
  );
};

export default MobApp;
