import myImage from "../assets/img/me.jpeg";
import Skills from "./Skills.jsx";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div name="about" className="w-full h-full  bg-[#ffe6a7] shadow-2xl ">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="max-w-[1000px] w-full grid grid-cols-2 gap-8"
        >
          <div className="mt-4 pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#eb5e28]">
              About me.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4"
        >
          <div className="justify-center  ">
            <img
              src={myImage}
              alt=""
              className="h-[52vh] w-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 "
            />
          </div>
          <div className="text-center flex-1 flex flex-col">
            <p className="text-2xl lg:text-4xl font-bold  ">
              Ariel here, nice to meet you. Please take a look around!
            </p>
            <p className="text-sm lg:text-base m-5 text-justify ">
              I'm a 22-year-old Computer Science student and developer based in
              Buenos Aires, Argentina. Throughout my academic journey, I've
              strengthened my foundation in software development, delving into
              essential concepts such as design patterns, data structures, and
              microservices architectures. Coding is more than a hobby for me;
              it's a passion. I've explored object-oriented programming
              languages like Java and Python, primarily through my college
              coursework. Additionally, I've dived into technologies like
              JavaScript, Node.js, and JavaScript-based frameworks such as
              React.js. While I'm currently not employed, I'm actively engaged
              in multiple projects, honing my skills and gaining practical
              experience. Feel free to continue scrolling to discover more about
              me!
            </p>
          </div>
        </motion.div>
        <Skills />
      </div>
    </div>
  );
};

export default About;
