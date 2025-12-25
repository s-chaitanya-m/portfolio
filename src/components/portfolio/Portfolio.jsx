import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useScroll, useTransform } from "motion/react";
import { items } from "./portfoliohelpers";
import ListItem from "./ListItem";

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setContainerDistance(rect.left);
    }
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
          }}
        ></div>
        {items.map((p) => (
          <ListItem item={p} key={p.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx={"80"}
            cy={"80"}
            r={"70"}
            fill="none"
            stroke="#fff"
            strokeWidth={20}
          />
          <motion.circle
            cx={"80"}
            cy={"80"}
            r={"70"}
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
