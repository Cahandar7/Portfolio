import React, { Suspense, useEffect, useState } from "react";
import Header from "./layouts/Header";
import SideBar from "./layouts/SideBar";
import MainCard from "./layouts/MainCard";
import MainContent from "./layouts/MainContent";
import bg_video from "./assets/videos/bg_video.mp4";
import CustomCursor from "./components/CustomCursor";
import { Col, Container, Row } from "react-bootstrap";

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleVideoPlaying = () => {
    setLoading(false);
  };

  useEffect(() => {
    const canvas = document.getElementById("particles-canvas");
    const ctx = canvas.getContext("2d");

    let width, height;
    const particles = [];
    const particleCount = 120;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = 1 + Math.random() * 2.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.alpha = 0.3 + Math.random() * 0.7;
        this.alphaSpeed = 0.005 + Math.random() * 0.01;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;

        this.alpha += this.alphaSpeed;
        if (this.alpha <= 0.3 || this.alpha >= 1) this.alphaSpeed *= -1;
      }
      draw(ctx) {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius * 5
        );
        gradient.addColorStop(0, `rgba(255, 179, 0, ${this.alpha})`);
        gradient.addColorStop(1, "rgba(255, 179, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationFrameId;

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Optionally draw connecting lines between close particles for ultra effect
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.strokeStyle = `rgba(255, 179, 0, ${(90 - dist) / 90 / 4})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="godlevel-loading-screen">
          <canvas id="particles-canvas"></canvas>

          <div className="spinner-container">
            <div className="spinner-ring layered-ring ring1"></div>
            <div className="spinner-ring layered-ring ring2"></div>
            <div className="spinner-ring layered-ring ring3"></div>
            <div className="spinner-center"></div>
            <p className="loading-text">
              Loading your <span className="shimmer">awesome</span>{" "}
              experience...
            </p>
          </div>
        </div>
      )}

      <div className="video-container">
        <video
          src={bg_video}
          autoPlay
          loop
          muted
          className="bg-video"
          preload="auto"
          poster="/preview.jpg"
          onPlaying={handleVideoPlaying}
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
