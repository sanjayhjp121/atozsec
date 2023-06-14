import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Bars/Navbar";
import Footer from "./components/Footer";
import { Navigate } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const MobApp = React.lazy(() => import("./components/MobApp"));
const Penetration = React.lazy(() => import("./components/Penetration"));
const SourceCode = React.lazy(() => import("./components/SourceCode"));
const WebApp = React.lazy(() => import("./components/WebApp"));
const AnnualWebsite = React.lazy(() => import("./components/AnnualWebsite"));
const Vulnerability = React.lazy(() => import("./components/Vulnerability"));
const MainWeb = React.lazy(() => import("./components/MainWeb"));

//  for contact page

const Contact = React.lazy(() => import("./pages/Contact"));
const About = React.lazy(() => import("./pages/About"));

const App = () => {
  const [openDocsMenu, setopenDocsMenu] = useState(false);

  const toggleDocsMenuHandler = () => {
    setopenDocsMenu(!openDocsMenu);
  };

  return (
    <>
      <Navbar
        openDocsMenu={openDocsMenu}
        toggleDocsMenu={toggleDocsMenuHandler}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={<div className="my-20 mx-auto">Loading...</div>}
            >
              <Home
                toggleDocsMenu={toggleDocsMenuHandler}
                openDocsMenu={openDocsMenu}
              />
            </Suspense>
          }
        >
          <Route
            path="/"
            element={
              <Suspense
                fallback={<div className="my-20 mx-auto">Loading...</div>}
              >
                <MainWeb />
              </Suspense>
            }
          />
          <Route
            path="/WebApp"
            element={
              <Suspense
                fallback={<div className="my-20 mx-auto">Loading...</div>}
              >
                <WebApp />
              </Suspense>
            }
          />
          <Route
            path="/MobApp"
            element={
              <Suspense
                fallback={<div className="my-20 mx-auto">Loading...</div>}
              >
                <MobApp />
              </Suspense>
            }
          />
          <Route
            path="/Penetration"
            element={
              <Suspense
                fallback={<div className="my-20 mx-auto">Loading...</div>}
              >
                <Penetration />
              </Suspense>
            }
          />
          <Route
            path="/SourceCode"
            element={
              <Suspense
                fallback={<div className="my-20 mx-auto">Loading...</div>}
              >
                <SourceCode />
              </Suspense>
            }
          />
          <Route
            path="/AnnualWebsite"
            element={
              <Suspense
                fallback={<div className="my-20 mx-auto">Loading...</div>}
              >
                <AnnualWebsite />
              </Suspense>
            }
          />
          <Route
            path="/Vulnerability"
            element={
              <Suspense
                fallback={<div className="my-20 mx-auto">Loading...</div>}
              >
                <Vulnerability />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/contact"
          element={
            <Suspense
              fallback={<div className="my-20 mx-auto">Loading...</div>}
            >
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense
              fallback={<div className="my-20 mx-auto">Loading...</div>}
            >
              <About />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
