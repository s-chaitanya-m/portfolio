export const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Project1",
    desc: "this is my project 1",
    link: "/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "Project2",
    desc: "this is my project 1",
    link: "/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Project3",
    desc: "this is my project 3",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Project4",
    desc: "this is my project 4",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Project5",
    desc: "this is my project 5",
    link: "/",
  },
];

export const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.25,
    },
  },
};
