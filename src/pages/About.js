import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import SecurityImg from "../assets/security.jpg";
import AboutBox from "../components/Features/AboutBox";
import WebAppImg from "../assets/webapp.jpg";
import MobAppImg from "../assets/mobapp.jpg";
import PenetrationImg from "../assets/penetration.jpg";
import VulnerrabilityImg from "../assets/vulnerability.jpg";
import ParaLayout from "../components/ParaLayout/ParaLayout";

const About = () => {
  return (
    <>
      <Layout className="min-h-[90vh] mb-20">
        <div className="flex flex-col  md:flex-row gap-10  overflow-y-scroll mb-20">
          <div className="flex flex-col gap-10 px-10 md:px-20 mt-20">
            <h1 className="text-4xl font-semibold">About Us</h1>
            <p className="text-lg text-gray-600">
              A TO Z Security is a leading cybersecurity company specializing in
              providing comprehensive and cutting-edge security services to
              businesses of all sizes. With a dedicated team of highly skilled
              professionals, we offer a wide range of services tailored to
              address the growing threats in the digital landscape.
            </p>

            <p className="text-lg text-gray-600">
              At A to Z Security we understand the criticality of web
              application security in today's interconnected world. Our expert
              security analysts perform thorough and systematic testing on web
              applications to identify vulnerabilities, weaknesses, and
              potential entry points for cyber attacks. We utilize advanced
              tools and methodologies to assess and mitigate risks, ensuring
              your web applications remain secure.
            </p>
          </div>
          <img src={SecurityImg} className="w-[450px] mx-auto" />
        </div>
        <hr className="my-8"></hr>
        <h1 className="text-4xl text-center my-12">About what we do?</h1>
        <section className="about__headers flex flex-col gap-2 px-10 md:px-20 mt-14">
          <AboutBox
            description="At A to Z Security we understand the criticality of web application security in today's interconnected world. Our expert security analysts perform thorough and systematic testing on web applications to identify vulnerabilities, weaknesses, and potential entry points for cyber attacks. We utilize advanced tools and methodologies to assess and mitigate risks, ensuring your web applications remain secure.."
            image={WebAppImg}
            imgPos="left"
          />
          <hr className="my-8" />
          <AboutBox
            description="In the mobile-driven era, securing mobile applications is paramount. Our mobile application security testing services assess the security posture of your mobile apps, uncovering vulnerabilities that could be exploited by malicious actors. By conducting comprehensive tests across different platforms, we help safeguard your mobile applications and protect sensitive user data."
            image={MobAppImg}
            imgPos="right"
          />
          <hr className="my-8" />
          <AboutBox
            description="In the mobile-driven era, securing mobile applications is paramount. Our mobile application security testing services assess the security posture of your mobile apps, uncovering vulnerabilities that could be exploited by malicious actors. By conducting comprehensive tests across different platforms, we help safeguard your mobile applications and protect sensitive user data."
            imgPos="left"
            image={PenetrationImg}
          />
          <hr className="my-8" />
          <AboutBox
            description="Vulnerability assessment service assists businesses in identifying weaknesses and potential security loopholes in their IT environment. Through a combination of automated scans and manual testing, we conduct an in-depth evaluation of your systems, networks, and applications. Our detailed reports provide a comprehensive overview of vulnerabilities, empowering you to prioritize and address them effectively."
            imgPos="right"
            image={VulnerrabilityImg}
          />
        </section>

        <hr className="my-8 mt-20"></hr>
        <section className="about__headers flex flex-col gap-10 px-10 md:px-20 mt-14">
          <h1 className="text-4xl font-semibold text-center text-gray-600">
            Our Mission
          </h1>
          <ParaLayout description="We provide actionable recommendations to enhance the security posture of your codebase. We ensures that your website remains secure, minimizing the risk of cyber threats and ensuring a seamless user experience. we prioritize delivering exceptional customer service, staying up-to-date with the latest security trends, and employing best practices to safeguard our clients' digital assets. Partner with us to secure your critical applications, systems, and infrastructure from evolving cyber threats. We hope that you will support us. Feel free to contact us and select any consultation service you want." />
        </section>
      </Layout>
      <Footer />
    </>
  );
};

export default About;
