import Express from "../assets/coding-logos/Express.jsx";
import { SiExpress } from "react-icons/si";
import {
  DiNodejsSmall,
  DiJsBadge,
  DiJava,
  DiDatabase,
  DiMongodb,
  DiReact,
  DiGit,
} from "react-icons/di";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      name="skills"
      className="w-full "
    >
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  my-4">
        <div>
          <p className="text-xl font-semibold inline  border-[#eb5e28] text-left ">
            Some technologies I've worked with
          </p>
        </div>

        {/*Icon container*/}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 place-self-center text-center">
          <div>
            <DiNodejsSmall className="w-20 mx-auto text-9xl  hover:text-[#3c873a] hover:scale-125 duration-500" />
            <p className="my-2">NodeJS</p>
          </div>
          <div>
            <DiJsBadge className="w-20 mx-auto text-9xl hover:text-yellow-400 hover:scale-125 duration-500" />
            <p className="my-2">Javascript</p>
          </div>
          <div>
            <DiJava className="w-20 mx-auto text-9xl hover:scale-125 duration-500 hover:text-orange-500" />
            <p className="my-2">Java</p>
          </div>
          <div>
            <DiGit className="w-20 mx-auto text-9xl hover:scale-125 duration-500 hover:text-[#f34f29]" />
            <p className="my-2">Git</p>
          </div>

          <div>
            <DiDatabase className="w-20 mx-auto text-9xl hover:scale-125 duration-500 hover:text-gray-700" />
            <p className="my-2">SQL</p>
          </div>
          <div>
            <DiMongodb className="w-20 mx-auto text-9xl hover:scale-125 duration-500 hover:text-[#00ED64]" />
            <p className="my-2">MongoDB</p>
          </div>
          <div>
            <DiReact className="w-20 mx-auto text-9xl hover:scale-125 duration-500 hover:text-[#61dbfb]" />
            <p className="my-2">React</p>
          </div>
          <div>
            <SiExpress className="w-20 mx-auto text-9xl hover:scale-125 duration-500 hover:text-black" />
            <p className="my-2">Express.js</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
