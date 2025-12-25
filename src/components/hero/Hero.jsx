import { motion } from "motion/react";
import "./hero.css";
import Speech from "./Speech";
import { awardVariant, followVariant } from "./heroHelpers";
import { Canvas } from "@react-three/fiber";
import Shape from "./Shape";
import { Suspense } from "react";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/*TITLE*/}
        <motion.h1
          animate={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>I&apos;m Chaitanya</span>
        </motion.h1>
        {/* AWARDS */}
        <motion.div
          variants={awardVariant}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariant}>Top Rated Developer</motion.h2>
          <motion.p variants={awardVariant}>
            Following are the certificates I have received
          </motion.p>
          <motion.div variants={awardVariant} className="awardList">
            <motion.a
              variants={awardVariant}
              href="https://portal.itscredible.com/qr/942054564185"
              target="_blank"
            >
              <motion.img
                src="/javascript-48.png"
                alt="Full Stack Certificate"
              />
            </motion.a>
            <motion.a
              variants={awardVariant}
              href="https://portal.itscredible.com/qr/876117144417"
              target="_blank"
            >
              <motion.img src="/python-48.png" alt="Data Analyst certificate" />
            </motion.a>
            <motion.a
              variants={awardVariant}
              href="https://namastedev.com/asaryanshinde/certificates/namaste-javascript"
              target="_blank"
            >
              <motion.img src="/javascript-48.png" alt="ReactJS Certificate" />
            </motion.a>
            <motion.a
              variants={awardVariant}
              href="https://namastedev.com/asaryanshinde/certificates/namaste-react"
              target="_blank"
            >
              <motion.img src="/react-48.png" alt="ReactJS Certificate" />
            </motion.a>
          </motion.div>
        </motion.div>
        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      <div className="hSection right">
        {/* FOLLOW */}
        <motion.div
          variants={followVariant}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a
            variants={followVariant}
            href="https://www.linkedin.com/in/chaitanya-shinde13/"
            target="_blank"
          >
            <img src="/linkedin-48.png" alt="LinkedIn logo" />
          </motion.a>
          <motion.a
            variants={followVariant}
            href="https://github.com/s-chaitanya-m"
            target="_blank"
          >
            <img src="/github-48.png" alt="GitHub logo" />
          </motion.a>
          <motion.a
            variants={followVariant}
            href="https://leetcode.com/u/ZJuhVgDjlZ/"
            target="_blank"
          >
            <img src="/leetcode-48.png" alt="LeetCode logo" />
          </motion.a>
          <motion.div variants={followVariant} className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </motion.div>
        </motion.div>
        {/* BUBBLE */}
        <Speech />
        {/* CERTIFICATE */}
        {/* <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="certificate"
        >
          <img src="/certificate.png" alt="certificate logo" />
          TIGER CERTIFIED <br /> PROFESSIONAL <br />• ANALYST <br /> •
          APPLICATION DEVELOPER
        </motion.div> */}
        {/* CONTACT BUTTON */}
        <motion.a
          href="/#contact"
          className="contactLink"
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="50%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3D */}
        <Canvas>
          <Suspense fallback="Loading ....">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src="/hero2.png" alt="Photo Self" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
