import React, { useEffect, useState, Suspense, lazy } from "react";
import Header from "./layouts/Header";
import SideBar from "./layouts/SideBar";
import bg_video from "./assets/videos/bg_video.mp4";
import CustomCursor from "./components/CustomCursor";
import { Col, Container, Row } from "react-bootstrap";

// Lazy-loaded components
const MainCard = lazy(() => import("./layouts/MainCard"));
const MainContent = lazy(() => import("./layouts/MainContent"));

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 300); // Optional delay for transition
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="video-container">
        <video
          id="bg-video"
          src={bg_video}
          autoPlay
          loop
          muted
          className="bg-video"
          preload="auto"
          poster="/preview.jpg"
        />
      </div>

      <CustomCursor />

      <div className="overlay-container">
        <div className="overlay"></div>
      </div>

      <Container style={{ padding: "10px 30px", maxWidth: "100vw" }}>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col xs={12} sm={3} md={12} lg={12} xl={1}>
            <SideBar />
          </Col>

          <Suspense fallback={<div>Loading MainCard...</div>}>
            <Col xs={12} sm={9} md={5} lg={5} xl={4}>
              <MainCard />
            </Col>
          </Suspense>

          <Suspense fallback={<div>Loading MainContent...</div>}>
            <Col xs={12} sm={12} md={7} lg={7} xl={7}>
              <MainContent />
            </Col>
          </Suspense>
        </Row>
      </Container>
    </>
  );
};

export default App;
