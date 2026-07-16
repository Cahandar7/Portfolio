import IntroHeader from "../components/IntroHeader";
import TextCard from "../components/TextCard";
import TextImageCard from "../components/TextImageCard";
import ContactForm from "../components/ContactForm";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Accordion, Col, Container, Row } from "react-bootstrap";

// datas
import { experiences } from "../data/experiences";
import { educations } from "../data/educations";
import { certificates } from "../data/certificates";
import { backendSkills, frontendSkills, infraSkills } from "../data/skills";

// ui imgs
import rotated_circle from "../assets/images/rotated_circle.png";
import arrow_img from "../assets/images/arrow1.svg";
import { FaArrowRight, FaGithub, FaGlobe } from "react-icons/fa";

// portfolio imgs
import portfolio1 from "../assets/images/portfolio_img1.png";
import portfolio2 from "../assets/images/portfolio_img2.png";
import portfolio3 from "../assets/images/portfolio_img3.png";
import portfolio4 from "../assets/images/portfolio_img4.png";
import SkillRow from "../components/SkillRow";

const MainContent = () => {
  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  };

  const [text] = useTypewriter({
    words: [
      "Frontend Developer💻",
      "Backend Developer🛠️",
      "Full Stack Developer🌐",
      "JavaScript Developer✨",
      "Java Developer✨",
      "Just a Chill Guy😎",
    ],
    loop: {},
    typeSpeed: 60,
    deleteSpeed: 15,
  });

  return (
    <div className="main-content">
      <section id="home-sec">
        <div className="intro-header">
          <motion.h2
            className="type-text"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm Cahandar, {text}
            <Cursor />
          </motion.h2>
          <div className="text">
            <motion.h1
              className="top-h1"
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Developing Intuitive
            </motion.h1>
            <motion.h1
              className="bottom-h1"
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experiences <span>Inspire</span>
            </motion.h1>
          </div>
        </div>

        <motion.div
          className="rotate-circle"
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="circle-wrapper">
            <div className="circle">
              <img src={rotated_circle} alt="image" width="130" height="130" />
            </div>
            <img src={arrow_img} alt="logo" className="rot-arr-logo" />
          </div>
          <p className="top-p">
            Your gateway to modern full-stack development, combining powerful
            backend systems with intuitive frontend experiences. Turning complex
            ideas into scalable, secure, and user-friendly solutions.
          </p>
        </motion.div>

        <motion.a
          className="home-a"
          href="#home-sec"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span>Let's Work Together</span> <FaArrowRight id="arrow-icon" />
        </motion.a>
      </section>

      <section id="about-us-sec">
        <IntroHeader
          h2={"About Me"}
          top_h1={"Here You Can"}
          bottom_h1={"Explore My"}
          bottom_h1_high={"Adventure"}
        />
        <TextCard
          title={"Cahandar Masimov"}
          desc={
            "Hi, I'm Cahandar Masimov, a passionate Full Stack Developer building powerful and scalable web applications. I specialize in developing responsive frontends and robust backend systems using Java, Spring Boot, Node.js, Nest.js, TypeScript, React.js, MongoDB, PostgreSQL, Redis, Docker, Kafka, RabbitMQ, and REST APIs. I also work with modern development practices including CI/CD, Git, and containerized deployments to build secure, scalable, and high-performance applications that deliver seamless user experiences across all platforms."
          }
        />

        <div className="date-cards-container">
          <motion.div
            className="date-card-wrapper"
            initial={{ opacity: 0, y: 50, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 1000,
              damping: 100,
              delay: 0,
            }}
            viewport={{ once: true }}
          >
            <h1 className="title">Work Experience</h1>
            <div className="date-card">
              {experiences.map((experience, index) => (
                <div className="part-wrapper" key={experience.title + index}>
                  <div className="part">
                    <div>
                      <h1>{experience.title}</h1>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() => window.open(experience.link, "_blank")}
                      >
                        <img
                          src={experience.imgSrc}
                          alt={experience.imgAlt}
                          width={experience.imgWidth}
                          height={experience.imgHeight}
                        />
                        {experience.isText ? (
                          <span className="bottom">{experience.isText}</span>
                        ) : null}
                      </div>
                    </div>
                    <div className="location-date">
                      <p className="top">{experience.date}</p>
                      <p className="top">{experience.location}</p>
                    </div>
                  </div>

                  {experience.description ? (
                    <Accordion className="experience-accordion">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Details</Accordion.Header>
                        <Accordion.Body>
                          {experience.description}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="date-card-wrapper"
            initial={{ opacity: 0, y: 50, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 1000,
              damping: 100,
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >
            <div className="title">Education</div>
            <div className="date-card">
              {educations.map((education, index) => (
                <div className="part" key={index}>
                  <div>
                    <h1>{education.title}</h1>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => window.open(education.link, "_blank")}
                    >
                      <img
                        src={education.imgSrc}
                        alt={education.imgAlt}
                        width={education.imgWidth}
                        height={education.imgHeight}
                      />

                      {education.isText ? (
                        <span className="bottom">{education.isText}</span>
                      ) : null}
                    </div>
                    {education.gpa && education.score ? (
                      <p
                        style={{
                          color: "fff",
                          opacity: "1",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <span>{education.gpa}</span>
                        <span
                          style={{
                            height: "25px",
                            width: "2px",
                            backgroundColor: "#ccc",
                            opacity: "0.5",
                          }}
                        ></span>
                        <span>{education.score}</span>
                      </p>
                    ) : null}
                  </div>
                  <div className="location-date">
                    <p className="top">{education.date}</p>
                    <p className="top">{education.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="certificates-sec">
        <IntroHeader
          h2={"My Certificates"}
          top_h1={"Certificates I Gain"}
          bottom_h1={"During"}
          bottom_h1_high={"My Journey"}
        />

        <div className="certificates-box">
          {certificates.map((certificate, index) => (
            <TextImageCard
              key={index}
              title={certificate.title}
              desc={certificate.desc}
              date={certificate.date}
              image={certificate.image}
            />
          ))}
        </div>
      </section>

      <section id="my-skill-sec">
        <IntroHeader
          h2="My Skills"
          top_h1="Technologies"
          bottom_h1="Used In"
          bottom_h1_high="Development"
        />

        <div className="skills-marquee">
          <SkillRow skills={frontendSkills} />
          <SkillRow skills={backendSkills} reverse />
          <SkillRow skills={infraSkills} />
        </div>
      </section>

      <section id="portfolio-sec">
        <IntroHeader
          h2={"My Portfolio"}
          top_h1={"My projects"}
          bottom_h1={"Real"}
          bottom_h1_high={"Results"}
        />
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <motion.div
                className="portfolio-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="card-image-wrap">
                  <a href="https://sabat.az/" target="_blank">
                    <img src={portfolio1} alt="Sabat E-Commerce Book Shop" />
                    <div className="card-overlay" />
                  </a>
                  <span className="card-badge">Real Project</span>
                </div>

                <div className="card-body">
                  <div className="card-header">
                    <h3 className="project-title">
                      Sabat — E-Commerce Book Shop
                    </h3>
                    <a
                      href="https://sabat.az/"
                      target="_blank"
                      className="card-arrow"
                    >
                      <FaArrowRight size={13} />
                    </a>
                  </div>

                  <div className="card-meta">
                    <a
                      href="https://sabat.az/"
                      target="_blank"
                      className="meta-link"
                    >
                      <FaGlobe size={13} /> sabat.az
                    </a>
                  </div>
                </div>
              </motion.div>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6}>
              <motion.div
                className="portfolio-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="card-image-wrap">
                  <a
                    href="https://login-register-by-cahandar.vercel.app/"
                    target="_blank"
                  >
                    <img src={portfolio2} alt="3D Forest" />
                    <div className="card-overlay" />
                  </a>
                  <span className="card-badge">Personal Project</span>
                </div>

                <div className="card-body">
                  <div className="card-header">
                    <h3 className="project-title">3D Forest</h3>
                    <a
                      href="https://login-register-by-cahandar.vercel.app/"
                      target="_blank"
                      className="card-arrow"
                    >
                      <FaArrowRight size={13} />
                    </a>
                  </div>

                  <div className="card-meta">
                    <a
                      href="https://github.com/Cahandar7/-InternIntelligence_LoginRegister"
                      target="_blank"
                      className="meta-link"
                    >
                      <FaGithub size={13} /> GitHub repo
                    </a>
                    <span className="meta-divider" />
                    <a
                      href="https://login-register-by-cahandar.vercel.app/"
                      target="_blank"
                      className="meta-link"
                    >
                      <FaGlobe size={13} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6}>
              <motion.div
                className="portfolio-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="card-image-wrap">
                  <a
                    href="https://intern-intelligence-ecommerce.vercel.app/"
                    target="_blank"
                  >
                    <img src={portfolio3} alt="XStore" />
                    <div className="card-overlay" />
                  </a>
                  <span className="card-badge">Personal Project</span>
                </div>

                <div className="card-body">
                  <div className="card-header">
                    <h3 className="project-title">
                      XStore — E-Commerce Clothes Shop
                    </h3>
                    <a
                      href="https://intern-intelligence-ecommerce.vercel.app/"
                      target="_blank"
                      className="card-arrow"
                    >
                      <FaArrowRight size={13} />
                    </a>
                  </div>

                  <div className="card-meta">
                    <a
                      href="https://github.com/Cahandar7/InternIntelligence_Ecommerce"
                      target="_blank"
                      className="meta-link"
                    >
                      <FaGithub size={13} /> GitHub repo
                    </a>
                    <span className="meta-divider" />
                    <a
                      href="https://intern-intelligence-ecommerce.vercel.app/"
                      target="_blank"
                      className="meta-link"
                    >
                      <FaGlobe size={13} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={12}>
              <motion.div
                className="portfolio-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="card-image-wrap">
                  <a href="https://girlscode.az/" target="_blank">
                    <img src={portfolio4} alt="GirlsCode" />
                    <div className="card-overlay" />
                  </a>
                  <span className="card-badge">Real Project</span>
                </div>

                <div className="card-body">
                  <div className="card-header">
                    <h3 className="project-title">
                      GirlsCode — Women Scholarship Program
                    </h3>
                    <a
                      href="https://girlscode.az/"
                      target="_blank"
                      className="card-arrow"
                    >
                      <FaArrowRight size={13} />
                    </a>
                  </div>

                  <div className="card-meta">
                    <a
                      href="https://girlscode.az/"
                      target="_blank"
                      className="meta-link"
                    >
                      <FaGlobe size={13} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact-us-sec">
        <IntroHeader
          h2={"Contact Me"}
          top_h1={"Have Any Project in"}
          bottom_h1={"Mind,"}
          bottom_h1_high={"Lets Talk"}
        />
        <ContactForm />
      </section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <h1>Thank you</h1>
        <p>
          <b>© 2025 Cahandar M. | All Rights Reserved.</b>
        </p>
      </motion.footer>
    </div>
  );
};

export default MainContent;
