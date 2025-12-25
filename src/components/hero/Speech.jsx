import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
const Speech = () => {
  console.log("lalal");

  // const textSamples = [
  //   "My name is Chaitanya Shinde",
  //   "I am a Full Stack Developer",
  // ];
  // const [indexArr, setIndexArr] = useState(0);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [currentText, setCurrentText] = useState("");
  // console.log(indexArr, currentIndex, currentText);

  // useEffect(() => {
  //   let timeout;

  //   if (indexArr >= textSamples.length) {
  //     setIndexArr(0);
  //   } else {
  //     if (currentIndex < textSamples[indexArr].length) {
  //       timeout = setTimeout(() => {
  //         setCurrentText(
  //           (prevText) => prevText + textSamples[indexArr][currentIndex]
  //         );
  //         setCurrentIndex((prevCurrIndex) => prevCurrIndex + 1);
  //       }, 100);
  //     } else {
  //       timeout = setTimeout(() => {
  //         setCurrentText("");
  //         setCurrentIndex(0);
  //         setIndexArr((prevIndex) => prevIndex + 1);
  //       }, 1000);
  //     }
  //   }

  //   return () => clearTimeout(timeout);
  // }, [currentText, indexArr]);
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            1000,
            "My name is Chaitanya Shinde",
            1000,
            "I am a Full Stack Developer",
            1000,
            "Please Scroll for more info",
            1000,
          ]}
          wrapper="span"
          speed={50}
          cursor
          style={{ fontSize: "1rem", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="Photo" />
    </motion.div>
  );
};

export default Speech;
