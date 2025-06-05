import React, { Suspense, lazy } from "react";
import Header from "./layouts/Header";
import SideBar from "./layouts/SideBar";
import bg_video from "./assets/videos/bg_video.mp4";
import CustomCursor from "./components/CustomCursor";
import { Col, Container, Row } from "react-bootstrap";

// Lazy-loaded components
const MainCard = lazy(() => import("./layouts/MainCard"));
const MainContent = lazy(() => import("./layouts/MainContent"));

const App = () => {
  return (
    <>
      <div className="video-container">
        <video
          src={bg_video}
          autoPlay
          loop
          muted
          className="bg-video"
          preload="auto"
          poster="/preview.jpg" // Optional: if you have a preview image
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
