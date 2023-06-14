import React from "react";
import ParaLayout from "./ParaLayout/ParaLayout";
import Image from "../assets/SourceCodeAuditService.png";
import ScheduleConsultation from "./Buttons/ScheduleConsultation";

const SourceCode = () => {
  return (
    <div>
      <ParaLayout
        title="Source Code Audit Service"
        description="If you're concerned that your web application has security issues, and you're looking for an independent review that will not just take your money and declare everything is fine without even considering the obvious don't worry, A to Z Security’s Source Code Security Analysis is a perfect way to have your web application source checked for vulnerabilities and design flaws that could jeopardize your business. A to Z Security also takes care of web application security analysis service."
        image={Image}
        imagePos="right"
      />

      <ScheduleConsultation />
    </div>
  );
};

export default SourceCode;
