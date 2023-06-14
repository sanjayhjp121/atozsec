import React from "react";
import ParaLayout from "./ParaLayout/ParaLayout";
import Image from "../assets/WebApplication.png";
import ScheduleConsultation from "./Buttons/ScheduleConsultation";

const WebApp = () => {

  return (
    <div className="flex flex-col gap-8">
      <ParaLayout
        title="Web Application Security Testing Service"
        description="Application Security Testing Service is meant to discover security vulnerabilities in your web site from an attacker's perspective. At A to Z Security, Our inhouse team of web security experts will analyze your web site with web security scanners, custom security tools, and comprehensive manual inspection to identify each potential point of intrusion into your web site."
        imagePos="right"
        image={Image}
      />

      <ParaLayout description="You're producing more complicated software more quickly than ever, but can your team test it for security flaws because they lack the application security expertise and resources? A to Z security testing services provide continuous access to security testing experts with the skills, tools, and discipline needed to cost-effectively analyze any application, at any depth, at any time." />

      <ParaLayout description="We provide you the freedom to choose the time and duration of the testing as you see fit. The software security experts at Synopsys can also assist in tailoring tests to the requirements of your particular applications. As business requirements change or new threats emerge, you can always make changes to your tests." />

      <h3 className="font-semibold text-lg">
        Our team of security professionals can help fill in resource gaps.
      </h3>

      <ParaLayout description="Application security specialists are hard to find and keep.  The majority of teams are understaffed, which causes holes in security testing initiatives. Your team may utilise your internal resources to their fullest potential with the help of Synopsys application security testing services, which offer a cost-effective solution to your resource problems." />

      <section className="team-experts">
        <h3 className="font-semibold text-2xl">Our Team of Experts</h3>
        <ul className="list-disc ml-8 mt-4 text-lg">
          <li>Have years of experience securing a range of applications.</li>
          <li>Conduct countless tests each month</li>
          <li>Won’t leave you with a laundry list of bugs</li>
          <li>Ensure each identified vulnerability is carefully reviewed</li>
          <li>Provide actionable mitigation and remediation guidance</li>
        </ul>
      </section>

      <ScheduleConsultation />
    </div>
  );
};

export default WebApp;
