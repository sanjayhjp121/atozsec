import React from 'react'
import ParaLayout from "./ParaLayout/ParaLayout";
import Image from "../assets/WebsiteSecurityAuditService.png";
import ScheduleConsultation from './Buttons/ScheduleConsultation';

const AnnualWebsite = () => {
  return (
    <div>
      <ParaLayout
        title="Annual Website Security Management Service"
        description="A to Z Security caters organizations that look at end to end solutions for website security. These are some of the packages which we offer under Security Management Service. Annual Application Hardening: We do a formal assessment regarding the configuration of your web and database server and recommend changes."
        image={Image}
        imagePos="right"
      />

      <ScheduleConsultation />
    </div>
  )
}

export default AnnualWebsite