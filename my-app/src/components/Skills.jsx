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

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600  ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        {/*Icon container*/}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div>
            <DiNodejsSmall className="w-20 mx-auto text-9xl text-white hover:text-[#3c873a] hover:scale-125 duration-500" />
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
          <div className="">
            <DiReact className="w-20 mx-auto text-9xl hover:scale-125 duration-500 hover:text-[#61dbfb]" />
            <p className="my-2">React</p>
          </div>
          <div>
            <SiExpress className="w-20 mx-auto text-9xl hover:scale-125 duration-500 hover:text-black" />
            <p className="my-2">Express.js</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
