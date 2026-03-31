import React, { Suspense, useState, useRef, useEffect } from "react";
import Header from "./layouts/Header";
import SideBar from "./layouts/SideBar";
import MainCard from "./layouts/MainCard";
import MainContent from "./layouts/MainContent";
import bg_video from "./assets/videos/bg_video.mp4";
import CustomCursor from "./components/CustomCursor";
import { Col, Container, Row } from "react-bootstrap";

const App = () => {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.readyState >= 2) {
      setVideoReady(true);
      return;
    }

    const handleLoaded = () => setVideoReady(true);
    video.addEventListener("loadeddata", handleLoaded);

    const fallback = setTimeout(() => setVideoReady(true), 1500);

    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <>
      {!videoReady && (
        <div className="loader-overlay">
          <div className="spinner-wrapper">
            <div className="spinner" />
          </div>
        </div>
      )}

      <div className="video-container">
        <video
          ref={videoRef}
          src={bg_video}
          autoPlay
          loop
          muted
          playsInline
          className="bg-video"
          preload="auto"
          poster="/preview.jpg"
        />
      </div>

      <CustomCursor />

      <div className="overlay-container">
        <div className="overlay" />
      </div>

      <Container style={{ padding: "10px 30px", maxWidth: "100vw" }}>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col xs={12} sm={3} md={12} lg={12} xl={1}>
            <SideBar />
          </Col>
          <Suspense fallback={<div>Loading...</div>}>
            <Col xs={12} sm={9} md={5} lg={5} xl={4}>
              <MainCard />
            </Col>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
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
