import React from 'react'
import ParaLayout from './ParaLayout/ParaLayout'
import Image from "../assets/PenetrationTestingService.png";
import ScheduleConsultation from './Buttons/ScheduleConsultation';

const Penetration = () => {
  return (
    <div>
      <ParaLayout 
      title="Penetration Testing Service" 
      description="At A to Z Security we help you identify security vulnerabilities in your system before they explode.A to Z Security discovers vulnerabilities before hackers do,audits the effectiveness of implemented security measures,prevents from data loss and also has the ability to manage IT security risks and plan for the future."
      imagePos="right"
      image={Image}
      />

      <ScheduleConsultation />
    </div>
  )
}

export default Penetration