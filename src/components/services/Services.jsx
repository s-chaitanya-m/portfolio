import Counter from "./Counter";
import "./services.css";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};
const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Development",
    counter: 5,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Web Development",
    counter: 15,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Web Development",
    counter: 25,
  },
];
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          How do I help?
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((s) => (
            <motion.div className="service" key={s.id} variants={listVariants}>
              <div className="serviceIcon">
                <img src={s.img} alt="service-img" />
              </div>
              <div className="serviceInfo">
                <h2>{s.title}</h2>
                <h3>{s.counter}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={15} text={"Projects Completed"} />
          <Counter from={0} to={25} text={"Happy Clients"} />
        </div>
      </div>
      <div className="sSection right">def</div>
    </div>
  );
};

export default Services;
