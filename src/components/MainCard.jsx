import React from "react";
import card_img from "../assets/images/portfolio_img.jpeg";
import { FaGithub, FaDownload } from "react-icons/fa";
import Swal from "sweetalert2";
import cv_down_sound from "../assets/audios/cv_download.wav";

const MainCard = () => {
  const checkFileExists = (filePath) => {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", filePath, false);
    xhr.send();

    return xhr.status === 200;
  };

  const handleDownloadClick = (e) => {
    const fileExists = checkFileExists("/Cahandar_Masimov_CV.pdf");
    if (!fileExists) {
      e.preventDefault();
      Swal.fire({
        title: "Something went wrong",
        text: "CV not found, try later",
        icon: "error",
        customClass: {
          popup: "my-popup",
          title: "swal2-title",
          content: "swal2-content",
          icon: "swal2-icon",
          confirmButton: "swal-button",
        },
      });
    } else {
      const cv_down_audio = new Audio(cv_down_sound);
      cv_down_audio.volume = 0.3;
      cv_down_audio.play();
    }
  };

  return (
    <div className="main-card">
      <div className="main-card-picture">
        <img src={card_img} alt="image" />
      </div>
      <div className="main-card-text">
        <h1>Cahandar Masimov</h1>
        <p>
          Hi, I'm Cahandar, a passionate Frontend Developer focused on building
          great web experiences.
        </p>
      </div>
      <div className="icons">
        <div>
          <a href="#">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="twitter"
            >
              <g clipPath="url(#clip0_8679_11857)">
                <g clipPath="url(#clip1_8679_11857)">
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
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/cahandar_x/" target="_blank">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="instagram"
            >
              <g clipPath="url(#clip0_8679_11863)">
                <path
                  d="M2.18164 11.6364C2.18164 7.17946 2.18164 4.951 3.56622 3.56641C4.95082 2.18182 7.17927 2.18182 11.6362 2.18182C16.0931 2.18182 18.3215 2.18182 19.7062 3.56641C21.0907 4.951 21.0907 7.17946 21.0907 11.6364C21.0907 16.0932 21.0907 18.3217 19.7062 19.7064C18.3215 21.0909 16.0931 21.0909 11.6362 21.0909C7.17927 21.0909 4.95082 21.0909 3.56622 19.7064C2.18164 18.3217 2.18164 16.0932 2.18164 11.6364Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M15.9997 11.6364C15.9997 14.0464 14.0461 16 11.6361 16C9.22613 16 7.27246 14.0464 7.27246 11.6364C7.27246 9.2264 9.22613 7.27274 11.6361 7.27274C14.0461 7.27274 15.9997 9.2264 15.9997 11.6364Z"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  opacity="0.4"
                  d="M17.4637 6.54544H17.4541"
                  stroke="white"
                  strokeWidth="2.14118"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_8679_11863">
                  <rect width="100%" height="100%" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/profile.php?id=61550269134539&locale=ru_RU"
            target="_blank"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="facebook"
            >
              <g clipPath="url(#clip0_8679_11871)">
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
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/cahandar-masimov-3698022b6/"
            target="_blank"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="linkedin"
            >
              <g clipPath="url(#clip0_8679_11877)">
                <path
                  d="M4.60588 9.45456H4.12103C3.20679 9.45456 2.74968 9.45456 2.46566 9.74425C2.18164 10.034 2.18164 10.5002 2.18164 11.4327V19.84C2.18164 20.7725 2.18164 21.2388 2.46566 21.5285C2.74968 21.8182 3.20679 21.8182 4.12103 21.8182H4.60588C5.52012 21.8182 5.97724 21.8182 6.26126 21.5285C6.54528 21.2388 6.54528 20.7725 6.54528 19.84V11.4327C6.54528 10.5002 6.54528 10.034 6.26126 9.74425C5.97724 9.45456 5.52012 9.45456 4.60588 9.45456Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  opacity="0.4"
                  d="M6.54528 4.36364C6.54528 5.56863 5.56844 6.54546 4.36346 6.54546C3.15847 6.54546 2.18164 5.56863 2.18164 4.36364C2.18164 3.15866 3.15847 2.18182 4.36346 2.18182C5.56844 2.18182 6.54528 3.15866 6.54528 4.36364Z"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M12.2493 9.45456H11.4323C10.4998 9.45456 10.0335 9.45456 9.74379 9.74425C9.4541 10.034 9.4541 10.5002 9.4541 11.4327V19.84C9.4541 20.7725 9.4541 21.2388 9.74379 21.5285C10.0335 21.8182 10.4998 21.8182 11.4323 21.8182H11.9268C12.8593 21.8182 13.3256 21.8182 13.6153 21.5285C13.905 21.2388 13.905 20.7725 13.905 19.84L13.9051 16.3783C13.9051 14.7396 14.4273 13.411 15.9701 13.411C16.7414 13.411 17.3668 14.0753 17.3668 14.8947V19.3456C17.3668 20.2781 17.3668 20.7443 17.6565 21.034C17.9461 21.3237 18.4124 21.3237 19.3449 21.3237H19.8382C20.7705 21.3237 21.2367 21.3237 21.5264 21.0341C21.8161 20.7445 21.8162 20.2784 21.8164 19.3461L21.8177 13.9057C21.8177 11.4476 19.4798 9.4548 17.1658 9.4548C15.8484 9.4548 14.6732 10.1005 13.9051 11.1103C13.905 10.4871 13.905 10.1755 13.7697 9.94416C13.6839 9.79764 13.5619 9.67565 13.4154 9.58994C13.184 9.45456 12.8725 9.45456 12.2493 9.45456Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_8679_11877">
                  <rect width="100%" height="100%" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div>
          <a href="https://github.com/Cahandar7" target="_blank">
            <FaGithub className="social-media-icon" />
          </a>
        </div>
      </div>
      <a
        href="/Cahandar_Masimov_CV.pdf"
        download="Cahandar_Masimov_CV.pdf"
        className="download-cv"
        onClick={() => {
          handleDownloadClick();
        }}
      >
        DOWNLOAD CV <FaDownload />
      </a>
      <p style={{ marginTop: "8px" }}>
        <b>© 2025 Cahandar. All Rights Reserved.</b>
      </p>
    </div>
  );
};
export default MainCard;
