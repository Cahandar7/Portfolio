import React, { useEffect, useState } from "react";
import IntroHeader from "./IntroHeader";
import TextCardContent from "./TextCardContent";
import IconCardContent from "./IconCardContent";
import SkillCard from "./SkillCard";
import BlogCard from "./BlogCard";
import ReviewCardBig from "./ReviewCardBig";
import ReviewCardSmall from "./ReviewCardSmall";
import logo_views from "../assets/images/others1.png";
import arrow_img from "../assets/images/arrow1.svg";
import home2 from "../assets/images/home2.svg";
import home3 from "../assets/images/home3.svg";
import home4 from "../assets/images/home4.svg";
import home5 from "../assets/images/home5.svg";
import { FaGithub, FaEnvelope, FaArrowRight } from "react-icons/fa";
import skill1 from "../assets/images/skill1.svg";
import skill2 from "../assets/images/skill2.svg";
import skill3 from "../assets/images/skill3.svg";
import skill4 from "../assets/images/skill4.svg";
import skill5 from "../assets/images/skill5.svg";
import skill6 from "../assets/images/skill6.svg";
import portfolio1 from "../assets/images/portfolio-img1.png";
import portfolio2 from "../assets/images/portfolio-img2.png";
import portfolio3 from "../assets/images/portfolio-img3.png";
import portfolio4 from "../assets/images/portfolio-img4.png";
import blog1 from "../assets/images/blog-img1.png";
import blog2 from "../assets/images/blog-img2.png";
import blog3 from "../assets/images/blog-img3.png";
import blog4 from "../assets/images/blog-img4.png";
import tes1 from "../assets/images/tesi-img1.png";
import tes2 from "../assets/images/tesi-img2.png";
import tes3 from "../assets/images/tesi-img3.png";
import footer_logo from "../assets/images/header_logo.png";
import elements_img from "../assets/images/elements.png";

const MainContent = () => {
  return (
    <div className="main-content">
      <section id="home-sec">
        <IntroHeader
          h2={"Hi, I'm Alex, UI/UX Designer"}
          top_h1={"Designing Intuitive"}
          bottom_h1={"Experiences"}
          bottom_h1_high={"Inspire"}
        />
        <p className="top-p">
          Your gateway to innovative design, seamless user experiences, and
          impactful solutions. Turning complex ideas into user-friendly designs.
        </p>
        <div className="rotate-circle">
          <div className="circle-wrapper">
            <div className="circle">
              {/* {arr.map((el, index) => (
                <span key={index} style={{ "single-span": index }}>
                  {el}
                </span>
              ))} */}
              <img src={elements_img} alt="image" />
            </div>
            <img src={arrow_img} alt="logo" className="rot-arr-logo" />
          </div>
          <div className="logo-views">
            <img src={logo_views} alt="logo" />
            <div>
              <p>2k+ reviews</p>
              <p>(4.90 of 5)</p>
            </div>
          </div>
        </div>
        <a href="#home-sec">
          <span>Lets Work Together</span> <FaArrowRight id="arrow-icon" />
        </a>
      </section>

      <section id="about-us-sec">
        <IntroHeader
          h2={"About Us"}
          top_h1={"Crafting Seamless"}
          bottom_h1={"User"}
          bottom_h1_high={"Experiences"}
        />
        <TextCardContent
          title={"Alex Carry"}
          desc={
            "Hi, I'm Alex Carry, a dedicated UI/UX Designer with 10 years of experience creating meaningful digital experiences. I specialize in crafting user-centered designs that enhance engagement and drive results. By combining research, creativity, and technical skills, I deliver solutions that not only look great but also function seamlessly."
          }
        />
        <div className="icon-cards-container">
          <IconCardContent
            icon={home2}
            title={"UI/UX Design"}
            desc={
              "Designing intuitive, user-focused interfaces that prioritize functionality & seamless navigation."
            }
          />
          <IconCardContent
            icon={home3}
            title={"User Research & Prototyping"}
            desc={
              "Conducting in-depth user research and creating interactive prototypes to validate ideas and refine designs."
            }
          />
          <IconCardContent
            icon={home4}
            title={"Responsive Web Design"}
            desc={
              "Crafting designs adapt seamlessly across all devices ensuring and a consistent user experience."
            }
          />
          <IconCardContent
            icon={home5}
            title={"Wireframing & Visual Design"}
            desc={
              "Creating detailed wireframes and visually stunning designs to bring ideas into focus."
            }
          />
        </div>

        <div className="date-cards-container">
          <div>
            <div className="date-card-wrapper">
              <h1 className="title">Work Experience</h1>
              <div className="date-card">
                <div className="part">
                  <p className="top">2015 - 2020</p>
                  <h1>UI/UX Designer</h1>
                  <p className="bottom">Creative Spark Agency</p>
                </div>
                <div className="part">
                  <p className="top">2020 - Present</p>
                  <h1>Senior UI/UX Designer</h1>
                  <p className="bottom">Visionary Tech</p>
                </div>
              </div>
            </div>
            <div className="icons-wrapper">
              <h1>Stay With Me</h1>
              <div className="icons">
                <div>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="twitter"
                  >
                    <g clip-path="url(#clip0_8679_11857)">
                      <g clip-path="url(#clip1_8679_11857)">
                        <path
                          d="M18.901 0.923065H22.581L14.541 10.3083L24 23.0769H16.594L10.794 15.3318L4.156 23.0769H0.474L9.074 13.0381L0 0.924086H7.594L12.837 8.00335L18.901 0.923065ZM17.61 20.8281H19.649L6.486 3.0544H4.298L17.61 20.8281Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_8679_11857">
                        <rect width="100%" height="100%" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_8679_11857">
                        <rect width="100%" height="100%" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="instagram"
                  >
                    <g clip-path="url(#clip0_8679_11863)">
                      <path
                        d="M2.18164 11.6364C2.18164 7.17946 2.18164 4.951 3.56622 3.56641C4.95082 2.18182 7.17927 2.18182 11.6362 2.18182C16.0931 2.18182 18.3215 2.18182 19.7062 3.56641C21.0907 4.951 21.0907 7.17946 21.0907 11.6364C21.0907 16.0932 21.0907 18.3217 19.7062 19.7064C18.3215 21.0909 16.0931 21.0909 11.6362 21.0909C7.17927 21.0909 4.95082 21.0909 3.56622 19.7064C2.18164 18.3217 2.18164 16.0932 2.18164 11.6364Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M15.9997 11.6364C15.9997 14.0464 14.0461 16 11.6361 16C9.22613 16 7.27246 14.0464 7.27246 11.6364C7.27246 9.2264 9.22613 7.27274 11.6361 7.27274C14.0461 7.27274 15.9997 9.2264 15.9997 11.6364Z"
                        stroke="white"
                        stroke-width="2"
                      />
                      <path
                        opacity="0.4"
                        d="M17.4637 6.54544H17.4541"
                        stroke="white"
                        stroke-width="2.14118"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_8679_11863">
                        <rect width="100%" height="100%" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="facebook"
                  >
                    <g clip-path="url(#clip0_8679_11871)">
                      <path
                        d="M13.398 20.9972V12.8012H16.163L16.574 9.59217H13.398V7.54817C13.398 6.62217 13.656 5.98817 14.985 5.98817H16.669V3.12717C15.8496 3.03936 15.0261 2.99696 14.202 3.00017C11.758 3.00017 10.08 4.49217 10.08 7.23117V9.58617H7.33301V12.7952H10.086V20.9972H13.398Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_8679_11871">
                        <rect width="100%" height="100%" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="linkedin"
                  >
                    <g clip-path="url(#clip0_8679_11877)">
                      <path
                        d="M4.60588 9.45456H4.12103C3.20679 9.45456 2.74968 9.45456 2.46566 9.74425C2.18164 10.034 2.18164 10.5002 2.18164 11.4327V19.84C2.18164 20.7725 2.18164 21.2388 2.46566 21.5285C2.74968 21.8182 3.20679 21.8182 4.12103 21.8182H4.60588C5.52012 21.8182 5.97724 21.8182 6.26126 21.5285C6.54528 21.2388 6.54528 20.7725 6.54528 19.84V11.4327C6.54528 10.5002 6.54528 10.034 6.26126 9.74425C5.97724 9.45456 5.52012 9.45456 4.60588 9.45456Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                      <path
                        opacity="0.4"
                        d="M6.54528 4.36364C6.54528 5.56863 5.56844 6.54546 4.36346 6.54546C3.15847 6.54546 2.18164 5.56863 2.18164 4.36364C2.18164 3.15866 3.15847 2.18182 4.36346 2.18182C5.56844 2.18182 6.54528 3.15866 6.54528 4.36364Z"
                        stroke="white"
                        stroke-width="2"
                      />
                      <path
                        d="M12.2493 9.45456H11.4323C10.4998 9.45456 10.0335 9.45456 9.74379 9.74425C9.4541 10.034 9.4541 10.5002 9.4541 11.4327V19.84C9.4541 20.7725 9.4541 21.2388 9.74379 21.5285C10.0335 21.8182 10.4998 21.8182 11.4323 21.8182H11.9268C12.8593 21.8182 13.3256 21.8182 13.6153 21.5285C13.905 21.2388 13.905 20.7725 13.905 19.84L13.9051 16.3783C13.9051 14.7396 14.4273 13.411 15.9701 13.411C16.7414 13.411 17.3668 14.0753 17.3668 14.8947V19.3456C17.3668 20.2781 17.3668 20.7443 17.6565 21.034C17.9461 21.3237 18.4124 21.3237 19.3449 21.3237H19.8382C20.7705 21.3237 21.2367 21.3237 21.5264 21.0341C21.8161 20.7445 21.8162 20.2784 21.8164 19.3461L21.8177 13.9057C21.8177 11.4476 19.4798 9.4548 17.1658 9.4548C15.8484 9.4548 14.6732 10.1005 13.9051 11.1103C13.905 10.4871 13.905 10.1755 13.7697 9.94416C13.6839 9.79764 13.5619 9.67565 13.4154 9.58994C13.184 9.45456 12.8725 9.45456 12.2493 9.45456Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_8679_11877">
                        <rect width="100%" height="100%" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <FaGithub className="social-media-icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="date-card-wrapper">
            <div className="title">Education</div>
            <div className="date-card">
              <div className="part">
                <p className="top">2010 - 2013</p>
                <h1>Bachelor's Degree in Graphic Design</h1>
                <p className="bottom">University of California</p>
              </div>
              <div className="part">
                <p className="top">2013 - 2015</p>
                <h1>Master's Degree in User Experience</h1>
                <p className="bottom">
                  Design Massachusetts Institute of Technology (MIT)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-service-sec">
        <IntroHeader
          h2={"My Services"}
          top_h1={"Elevating Brands"}
          bottom_h1={"Intuitive"}
          bottom_h1_high={"Design"}
        />
        <TextCardContent
          title={"UI/UX Design"}
          desc={
            "Designing intuitive, user-focused interfaces that prioritize functionality and seamless navigation."
          }
        />
        <TextCardContent
          title={"User Research & Prototyping"}
          desc={
            "Conducting in-depth user research and creating interactive prototypes to validate ideas and refine designs."
          }
        />
        <TextCardContent
          title={"Responsive Web Design"}
          desc={
            "Crafting designs that adapt seamlessly across all devices, ensuring a consistent user experience."
          }
        />
        <TextCardContent
          title={"Wireframing & Visual Design"}
          desc={
            "Creating detailed wireframes and visually stunning designs to bring ideas into focus."
          }
        />
      </section>

      <section id="my-skill-sec">
        <IntroHeader
          h2={"My Skill"}
          top_h1={"The Tools Behind"}
          bottom_h1={"Exceptional"}
          bottom_h1_high={"Design"}
        />
        <div className="skill-cards-container">
          <SkillCard icon={skill1} h1_text={"96%"} p_text={"Figma"} />
          <SkillCard icon={skill2} h1_text={"87%"} p_text={"Photoshop"} />
          <SkillCard icon={skill3} h1_text={"90%"} p_text={"Illustrator"} />
          <SkillCard icon={skill4} h1_text={"89%"} p_text={"Sketch"} />
          <SkillCard icon={skill5} h1_text={"92%"} p_text={"Adobe XD"} />
          <SkillCard icon={skill6} h1_text={"85%"} p_text={"Wordpress"} />
        </div>
      </section>

      <section id="portfolio-sec">
        <IntroHeader
          h2={"My Portfolio"}
          top_h1={"Innovation Designs"}
          bottom_h1={"Real"}
          bottom_h1_high={"Results"}
        />

        <div className="big-portfolio-card">
          <div>
            <img src={portfolio1} alt="image" />
          </div>
          <h1>Reelup - E commercer Video Platform</h1>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="small-portfolio-card">
            <div>
              <img src={portfolio3} alt="image" />
            </div>
            <h1>Academy - Sales Career</h1>
          </div>

          <div className="small-portfolio-card">
            <div>
              <img src={portfolio4} alt="image" />
            </div>
            <h1>Leadlogic- Dashboard Design</h1>
          </div>
        </div>

        <div className="big-portfolio-card">
          <div>
            <img src={portfolio2} alt="image" />
          </div>
          <h1>Reelup - E commercer Video Platform</h1>
        </div>
      </section>

      <section id="testimonial-sec">
        <IntroHeader
          h2={"Testimonial"}
          top_h1={"What Client Says"}
          bottom_h1={"About"}
          bottom_h1_high={"My Work"}
        />
        <div className="review-cards-container">
          <ReviewCardBig
            profile_icon={tes1}
            text={
              '"Working with Alex was a game-changer for our brand. Their attention to detail and focus on creating a seamless user experience truly transformed our website. We have seen an incredible boost in user engagement and satisfaction."'
            }
            bot_h4={"David Elson"}
            bot_p={"Ezhe Source"}
          />
          <ReviewCardSmall
            profile_icon={tes2}
            text={
              '"Alex exceeded all expectations with their innovative designs and collaborative approach. Reality that perfectly resonates with our audience."'
            }
            bot_h4={"Chris Glasser"}
            bot_p={"Auto Works"}
          />
          <ReviewCardSmall
            profile_icon={tes3}
            text={
              '"The designs delivered by [Your Name] were intuitive and engaging, making a significant difference in how users interacted with our platform."'
            }
            bot_h4={"Rodger Struck"}
            bot_p={"Specialty Restaurant Group"}
          />
          <ReviewCardBig
            profile_icon={tes3}
            text={
              '"From wireframes to the final product, Alex brought creativity and functionality together beautifully. The final design not only looks fantastic but also works flawlessly across devices."'
            }
            bot_h4={"Mary Freund"}
            bot_p={"Rink's"}
          />
        </div>
      </section>

      <section id="our-blog-sec">
        <IntroHeader
          h2={"Our Blog"}
          top_h1={"Our Latest Blog Idea"}
          bottom_h1={"UI/UX"}
          bottom_h1_high={"Trends"}
        />
        <div className="blog-cards-container">
          <BlogCard
            image={blog1}
            title={"Behind the Pixels: My Favorite Design Projects"}
          />
          <BlogCard
            image={blog2}
            title={"Crafting Seamless Experiences: My UI/UX Design Philosophy"}
          />
          <BlogCard
            image={blog3}
            title={"Staying Ahead: Trends Shaping UI/UX in 2024"}
          />
          <BlogCard
            image={blog4}
            title={"From Concept to Reality: My Design Process"}
          />
        </div>
      </section>

      <section id="contact-us-sec">
        <IntroHeader
          h2={"Contact Me"}
          top_h1={"Have Any Project in"}
          bottom_h1={"Mind,"}
          bottom_h1_high={"Lets Talk"}
        />

        <div className="form-wrapper">
          <h1>Let's Work Together!</h1>
          <form action="">
            <div className="top-inputs">
              <input placeholder="Full Name" type="text" />
              <input placeholder="Email Address" type="email" />
              <input placeholder="Phone Number" type="tel" />
              <input placeholder="Subject" type="text" />
            </div>
            <input
              placeholder="Your Budget (optional)"
              type="text"
              className="budget-input"
            />
            <input
              placeholder="Message"
              type="text"
              className="message-input"
            />
            <button type="submit">
              SEND <FaEnvelope />
            </button>
          </form>
        </div>
      </section>

      <footer>
        <img src={footer_logo} alt="" />
        <p>
          <b>© 2024 OVRO. All Rights Reserved.</b>
        </p>
      </footer>
    </div>
  );
};

export default MainContent;
