import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainCard from "./components/MainCard";
import MainContent from "./components/MainContent";
import bg_video from "./assets/videos/bg_video.mp4";
import { Col, Container, Row } from "react-bootstrap";

const App = () => {
  return (
    <>
      <div className="video-container">
        <video src={bg_video} autoPlay loop muted className="bg-video"></video>
      </div>
      <div className="overlay-container">
        <div className="overlay"></div>
      </div>
      <Header />
      <Container fluid style={{ padding: "10px 30px", maxWidth: "100vw" }}>
        <Row>
          <Col sm={12} md={2} lg={1} className="d-none d-md-block">
            <SideBar />
          </Col>

          <Col sm={12} md={5} lg={3}>
            <MainCard />
          </Col>

          <Col sm={12} md={5} lg={8}>
            <MainContent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
