import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaRegMoon,
  FaRegSun,
} from "react-icons/fa";

import MyLogo from "../assets/myLogo/MyLogo.jsx";
import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import useTheme from "../components/Theme.jsx";

const NavBar = () => {
  const { theme, handleThemeChange } = useTheme();
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const handleClick = () => setNav(!nav);
  const handleSectionSelected = (section) => setActiveSection(section);
  const sectionActive = "text-[#eb5e28] transition duration-200";
  const sectionNotActive = " hover:text-[#eb5e28] transition duration-300";

  return (
    <div className="max-w-[1000px] mx-auto h-[100px] flex justify-between items-center px-4  ">
      {/*Logo */}
      <Link to="home" smooth={true} duration={500}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -25 },
            visible: { opacity: 1, y: 0 },
          }}
          className=" w-[60px] sm: ml-3"
        >
          <MyLogo />
        </motion.div>
      </Link>

      {/*Menu */}
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="hidden md:flex font-semibold items-center"
      >
        <li>
          <button
            onClick={handleThemeChange}
            className="border-solid border-2 border-[#252422] rounded-full p-1 mr-4 hover:bg-yellow-300  dark:hover:bg-blue-500 transition duration-300  dark:border-[#ffffff]"
          >
            {theme === "dark" ? (
              <FaRegSun className="text-white text-xl" />
            ) : (
              <FaRegMoon className="text-xl" />
            )}
          </button>
        </li>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={
              activeSection === "home"
                ? `${sectionActive}`
                : `${sectionNotActive}`
            }
            onClick={() => handleSectionSelected("home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={
              activeSection === "About"
                ? `${sectionActive}`
                : `${sectionNotActive}`
            }
            onClick={() => handleSectionSelected("About")}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={
              activeSection === "Projects"
                ? `${sectionActive}`
                : `${sectionNotActive}`
            }
            onClick={() => handleSectionSelected("Projects")}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={
              activeSection === "Contact"
                ? `${sectionActive}`
                : `${sectionNotActive}`
            }
            onClick={() => handleSectionSelected("Contact")}
          >
            Contact
          </Link>
        </li>
      </motion.ul>

      {/*Hamburger */}

      <div className=" md:hidden z-10 relative flex items-center">
        <button
          onClick={handleThemeChange}
          className="border-solid border-2 border-[#252422] rounded-full p-1 mr-4 hover:bg-yellow-300  dark:hover:bg-blue-500 transition duration-300  dark:border-[#ffffff]"
        >
          {theme === "dark" ? (
            <FaRegSun className="text-white text-xl" />
          ) : (
            <FaRegMoon className="text-xl" />
          )}
        </button>
        <div
          onClick={handleClick}
          className=" md:hidden z-10 relative flex items-center"
        >
          {!nav ? (
            <FaBars className="text-2xl ml-3" />
          ) : (
            <FaTimes className="text-2xl ml-3" />
          )}
        </div>
      </div>

      {/*Mobile menu */}

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        className={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 w-full h-full bg-[#ffe6a7] dark:bg-[#a76129] flex flex-col justify-center items-center overflow-hidden"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={false}
            duration={500}
          >
            Contact
          </Link>
        </li>
        {/* Social Icons within mobile menu */}
        <div className="fixed bottom-[5%] flex space-x-4  mx-6 bg-black rounded-full ">
          <a
            href="https://www.linkedin.com/in/ariel~gonzalez~vitali-a033aa1bb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BcFIJiN9bSYiB8hlRBjyDoA%3D%3D"
            className="text-white hover:text-blue-600"
          >
            <FaLinkedin size={30} className="m-4" />
          </a>
          <a
            href="https://github.com/ArielVitali"
            className="text-white hover:text-[#333333] "
          >
            <FaGithub size={30} className="m-4" />
          </a>
          <a
            href="https://twitter.com/vitali_ariel"
            className="text-white hover:text-yellow-400"
          >
            <FaTwitter size={30} className="m-4" />
          </a>
        </div>
      </motion.ul>

      {/*Social Icons */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="hidden lg:flex fixed flex-col bottom-[5%] right-0 mx-6 bg-[#eb5e28] rounded-full z-50"
      >
        <ul>
          <li className="w-[60px] h-[60px] flex justify-between items-center  hover:scale-125 duration-300  ">
            <a
              className="flex justify-between items-center w-full text-white  hover:text-blue-600 border-solid"
              href="https://www.linkedin.com/in/ariel~gonzalez~vitali-a033aa1bb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BcFIJiN9bSYiB8hlRBjyDoA%3D%3D"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex justify-between items-center  hover:scale-125 duration-300 ">
            <a
              className="flex justify-between items-center w-full text-white hover:text-[#333333]"
              href="https://github.com/ArielVitali"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex justify-between items-center  hover:scale-125 duration-300">
            <a
              className="flex justify-between items-center w-full text-white hover:text-yellow-400"
              href="https://twitter.com/vitali_ariel"
            >
              <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default NavBar;
