import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import MainCard from "./MainCard";
import MainContent from "./MainContent";
import bg_video from "../assets/videos/bg_video.mp4";

const App = () => {
  return (
    <>
      <video src={bg_video} autoPlay loop muted></video>
      <div className="overlay"></div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <MainCard />
        <MainContent />
      </div>
    </>
  );
};

export default App;
