import React from "react";
import Header from "./layouts/Header";
import SideBar from "./layouts/SideBar";
import MainCard from "./layouts/MainCard";
import MainContent from "./layouts/MainContent";
import bg_video from "./assets/videos/bg_video.mp4";
import { Col, Container, Row } from "react-bootstrap";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <Container style={{ padding: "10px 30px", maxWidth: "100vw" }}>
      <CustomCursor />
      <div className="video-container">
        <video src={bg_video} autoPlay loop muted className="bg-video"></video>
      </div>
      <div className="overlay-container">
        <div className="overlay"></div>
      </div>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col xs={12} sm={3} md={12} lg={12} xl={1}>
          <SideBar />
        </Col>

        <Col xs={12} sm={9} md={5} lg={5} xl={4}>
          <MainCard />
        </Col>

        <Col xs={12} sm={12} md={7} lg={7} xl={7}>
          <MainContent />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
