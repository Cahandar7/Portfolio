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
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    const preloadVideo = (src) => {
      return new Promise((resolve) => {
        const video = document.createElement("video");
        video.src = src;
        video.preload = "auto";
        video.oncanplaythrough = () => resolve();
        video.onerror = () => resolve(); // don't block on error
      });
    };

    const preloadImages = () => {
      const images = Array.from(document.images);
      const promises = images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      });
      return Promise.all(promises);
    };

    const waitForLazyComponents = () => {
      return Promise.all([
        import("./layouts/MainCard"),
        import("./layouts/MainContent"),
      ]);
    };

    const init = async () => {
      await Promise.all([
        preloadVideo(bg_video),
        preloadImages(),
        waitForLazyComponents(),
      ]);
      // Smooth transition
      setTimeout(() => setIsAppLoaded(true), 300);
    };

    init();
  }, []);

  return (
    <>
      {!isAppLoaded && (
        <div className="loading-screen">
          <div className="spinner" />
        </div>
      )}

      {isAppLoaded && (
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
      )}
    </>
  );
};

export default App;
