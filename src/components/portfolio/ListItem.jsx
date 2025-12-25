import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { imgVariants, textVariants } from "./portfoliohelpers";

const ListItem = ({ item }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt={item.title} />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link} target="_blank">
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ListItem;
