import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        whileFocus="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full"
      >
        <p className=" ">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-semibold ">ARIEL VITALI</h1>
        <h2 className="text-2xl sm:text-5xl ">Software developer</h2>
        <p className="text-[#eb5e28] py-4 max-w-[700px]">
          I'm a full-stack developer specialiced in building digital solutions.
          Currently, I'm focused on gaining experience in the backend scences of
          a web application.
        </p>

        <div>
          <button className="group border-2 px-6 py-3 my-2 flex items-center dark:border-gray-300 border-[#252422] hover:bg-[#eb5e28] ">
            <Link to="projects" smooth={true} duration={500}>
              View work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
