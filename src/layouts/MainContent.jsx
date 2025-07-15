import React from "react";
import IntroHeader from "../components/IntroHeader";
import TextCard from "../components/TextCard";
import SkillCard from "../components/SkillCard";
import ContactForm from "../components/ContactForm";
import arrow_img from "../assets/images/arrow1.svg";
import { FaArrowRight } from "react-icons/fa";
import portfolio1 from "../assets/images/portfolio_img1.png";
import portfolio2 from "../assets/images/portfolio_img2.png";
import portfolio3 from "../assets/images/portfolio_img3.png";
import portfolio4 from "../assets/images/portfolio_img4.png";
import intern_itelligence_logo from "../assets/images/intern_itelligence_logo.png";
import webluna_software_logo from "../assets/images/webluna_software_logo.png";
import unec_logo from "../assets/images/unec_logo.png";
import matrix_academy_logo from "../assets/images/matrix_academy_logo.png";
import div_academy_logo from "../assets/images/div_academy_logo.png";
import idschool_logo from "../assets/images/idschool_logo.png";
import freelance_logo from "../assets/images/freelance_logo.png";
import cubics_tech_logo from "../assets/images/cubics_tech_logo.png";
import Intern_Intelligence_Certificate from "../assets/images/Intern_Intelligence_Certificate.png";
import matrix_certificate from "../assets/images/matrix_certificate.jpg";
import rotated_circle from "../assets/images/rotated_circle.png";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import TextImageCard from "../components/TextImageCard";

const MainContent = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      imgSrc: cubics_tech_logo,
      imgAlt: "cubics_tech_logo",
      imgWidth: 105,
      imgHeight: 40,
      isText: null,
      link: "https://cubics.technology/",
      date: "July 2025 - Present",
      location: "Baku, Azerbaijan (On-site)",
    },
    {
      title: "IT and Web Development Instructor",
      imgSrc: idschool_logo,
      imgAlt: "idschool_logo",
      imgWidth: 40,
      imgHeight: 40,
      isText: "IDSchool",
      link: "https://idtech.edu.az/",
      date: "May 2025 - Present",
      location: "Baku, Azerbaijan (On-site)",
    },
    {
      title: "Frontend Developer Intern",
      imgSrc: webluna_software_logo,
      imgAlt: "webluna_software_logo",
      imgWidth: 40,
      imgHeight: 40,
      isText: "Webluna Software",
      link: "https://webluna.org/",
      date: "April 2025 - July 2025",
      location: "Baku, Azerbaijan (On-site)",
    },
    {
      title: "Frontend Developer Intern",
      imgSrc: intern_itelligence_logo,
      imgAlt: "intern_itelligence_logo",
      imgWidth: 40,
      imgHeight: 40,
      isText: "Intern Intelligence",
      link: "https://www.internintelligence.org/",
      date: "March 2025 - April 2025",
      location: "India (Remote)",
    },
    {
      title: "Game Developer",
      imgSrc: freelance_logo,
      imgAlt: "freelance_logo",
      imgWidth: 40,
      imgHeight: 40,
      isText: "Freelance",
      link: "https://www.freelancer.com/",
      date: "May 2022 - August 2024",
      location: "Baku, Azerbaijan (Freelance)",
    },
  ];

  const educations = [
    {
      title: "Bachelor Degree of Information Technology",
      imgSrc: unec_logo,
      imgAlt: "unec_logo",
      imgWidth: 40,
      imgHeight: 40,
      isText: "Azerbaijan State University of Economics",
      gpa: "GPA: 92.3 / 100",
      score: "University Entrance Score: 624 / 700",
      link: "https://unec.edu.az",
      date: "July 2023 - July 2027",
      location: "Baku, Azerbaijan",
    },
    {
      title: "Frontend Development",
      imgSrc: matrix_academy_logo,
      imgAlt: "matrix_academy_logo",
      imgWidth: 40,
      imgHeight: 40,
      isText: "Matrix Academy",
      gpa: null,
      score: null,
      link: "https://matrixacademy.az/",
      date: "October 2024 - February 2025",
      location: "Baku, Azerbaijan",
    },
    {
      title: "Backend Development",
      imgSrc: div_academy_logo,
      imgAlt: "div_academy_logo",
      imgWidth: 40,
      imgHeight: 40,
      isText: "Div Academy",
      gpa: null,
      score: null,
      link: "https://div.edu.az/",
      date: "October 2024 - November 2024",
      location: "Baku, Azerbaijan",
    },
  ];

  const certificates = [
    {
      title: "Intern Intelligence",
      desc: "Frontend Developer Intern",
      date: "March 2025 - April 2025",
      image: Intern_Intelligence_Certificate,
    },
    {
      title: "Matrix Academy",
      desc: "Frontend Development",
      date: "October 2024 - February 2025",
      image: matrix_certificate,
    },
  ];

  const skills = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      level: 95,
      name: "React.js",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
      level: 75,
      name: "Redux",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
      level: 90,
      name: "SASS",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      level: 95,
      name: "Node.js",
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-logo-freebies-pack-logos-icons-1175138.png",
      level: 90,
      name: "MongoDB",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      level: 85,
      name: "PostgreSQL",
    },
    {
      icon: "https://dmtgy0px4zdqn.cloudfront.net/images/meteor-logo.webp",
      level: 90,
      name: "Meteor.js",
    },
    {
      icon: "https://www.blazejs.org/logo/logo.png",
      level: 70,
      name: "Blaze",
    },
    {
      icon: "https://nestjs.com/logo-small-gradient.d792062c.svg",
      level: 80,
      name: "Nest.js",
    },
  ];

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
      "Game Developer🎮",
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
            Your gateway to innovative frontend design, seamless web
            experiences, and impactful solutions. Turning complex ideas into
            intuitive, user-friendly interfaces.
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
            "Hi, I'm Cahandar Masimov, a passionate Full Stack Developer building powerful and scalable web applications. I specialize in developing both responsive frontends and robust backends that work seamlessly together. By combining modern technologies like React, Node.js, MongoDB, and PostgreSQL, I create efficient solutions that offer smooth user experiences and reliable performance across all platforms."
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
              {experiences.map((experience) => (
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
              {educations.map((education) => (
                <div className="part">
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
          {certificates.map((certificate) => (
            <TextImageCard
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
          h2={"My Skills"}
          top_h1={"Technologies"}
          bottom_h1={"Used In"}
          bottom_h1_high={"Development"}
        />
        <Container className="skill-cards-box">
          <Row>
            {skills.map((skill, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                className="skill-cards-container"
              >
                <SkillCard
                  icon={skill.icon}
                  h1_text={skill.level.toString()}
                  p_text={skill.name}
                />
              </Col>
            ))}
          </Row>
        </Container>
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
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <a
                  href="https://intern-intelligence-ecommerce.vercel.app/"
                  target="_blank"
                >
                  <img src={portfolio1} alt="portfolio1" />
                </a>
                <h1>
                  XStore - E-commerce Web Site ({" "}
                  <a
                    href="https://github.com/Cahandar7/InternIntelligence_Ecommerce"
                    target="_blank"
                  >
                    Github Repo
                  </a>{" "}
                  )
                </h1>
              </motion.div>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6}>
              <motion.div
                className="portfolio-card"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <a
                  href="https://login-register-by-cahandar.vercel.app/"
                  target="_blank"
                >
                  <img src={portfolio4} alt="portfolio4" />
                </a>
                <h1 style={{ fontSize: "1.5em" }}>
                  Login&Register app({" "}
                  <a
                    href="https://github.com/Cahandar7/-InternIntelligence_LoginRegister"
                    target="_blank"
                  >
                    Github Repo
                  </a>{" "}
                  )
                </h1>
              </motion.div>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6}>
              <motion.div
                className="portfolio-card"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <a href="#">
                  <img src={portfolio3} alt="portfolio3" />
                </a>
                <h1 style={{ fontSize: "1.5em" }}>
                  Fresh Vila - E-commerce ({" "}
                  <a
                    href="https://github.com/Cahandar7/FRESH_VILA_WATER"
                    target="_blank"
                  >
                    Github Repo
                  </a>{" "}
                  )
                </h1>
              </motion.div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={12}>
              <motion.div
                className="portfolio-card"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <a href="#">
                    <img src={portfolio2} alt="portfolio2" />
                  </a>
                </div>
                <h1>
                  Grogin - E-commerce Template ({" "}
                  <a
                    href="https://github.com/Cahandar7/Grogin_Template"
                    target="_blank"
                  >
                    Github Repo
                  </a>{" "}
                  )
                </h1>
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
