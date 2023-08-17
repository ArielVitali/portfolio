import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import FooterCopyright from "./FooterCopyright";
import { motion } from "framer-motion";

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub />,
    url: "https://github.com/ArielVitali",
  },
  {
    id: 2,
    icon: <FiTwitter />,
    url: "https://twitter.com/vitali_ariel",
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/ariel~gonzalez~vitali-a033aa1bb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BcFIJiN9bSYiB8hlRBjyDoA%3D%3D",
  },
];

const AppFooter = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileFocus="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="mx-auto"
    >
      <div className=" sm:pt-30 pb-8 pt-10  mt-10 border-t-2 border-primary-light dark:border-secondary-dark">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-">
          <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
            Follow me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className=" hover:text-[#eb5e28] dark:hover:text-[#eb5e28] cursor-pointer rounded-lg hover:bg-gray-100 shadow-md p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>

        <FooterCopyright />
      </div>
    </motion.div>
  );
};

export default AppFooter;
