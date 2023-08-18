import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const handleResetForm = async () => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  };

  return (
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
      name="contact"
      className="w-full h-full  flex justify-center items-center p-4"
    >
      <form
        target="_blank"
        onSubmit={onSubmit}
        action="https://formsubmit.co/b31441f07cc1b7ddd418fe45f2aa3670"
        method="POST"
        className="flex flex-col max-w-[1000px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#eb5e28] ">
            Contact
          </p>
          <p className=" py-4">Fill out the form below and get in touch!</p>
        </div>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          id="name"
          className="bg-[#ffe6a7] dark:bg-[#956d61]  p-2"
          {...register("name", { required: true, maxLength: 50 })}
        />
        {errors.name && (
          <span className="text-red mt-1">
            {errors.name.type === "required" && "This field is required"}
            {errors.name.type === "maxLength" && "Max length exceeded"}
          </span>
        )}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="my-4 p-2 bg-[#ffe6a7] dark:bg-[#956d61]"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <span className="text-red mt-1">
            {errors.email.type === "required" && "This field is required"}
            {errors.email.type === "pattern" && "Invalid email"}
          </span>
        )}
        <textarea
          name="message"
          rows="5"
          className="bg-[#ffe6a7] dark:bg-[#956d61] p-2"
          placeholder="Message"
          {...register("message", { required: false, maxLength: 400 })}
        ></textarea>
        {errors.message && (
          <span className="text-red mt-1">
            {errors.message.type === "maxLength" && "Max length exceeded"}
          </span>
        )}
        <button
          onClick={handleResetForm()}
          type="submit"
          className=" border-2 dark:border-gray-300 border-[#252422] hover:bg-[#eb5e28]  px-4 py-3 my-8 mx-auto flex items-center"
        >
          Send Message
        </button>{" "}
      </form>
    </motion.div>
  );
};

export default Contact;
