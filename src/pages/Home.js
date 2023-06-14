import React from "react";
import SlideBar from "../components/Bars/SlideBar";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
const Home = (props) => {
  return (
    <Layout className="Home">
      <div className="h-[92.5vh] flex">
        <SlideBar
          toggleDocsMenu={props.toggleDocsMenu}
          openDocsMenu={props.openDocsMenu}
        />
        <div className="px-8 md:px-16 flex-1 overflow-y-scroll mt-12 pb-12">
          <Outlet />
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default Home;
