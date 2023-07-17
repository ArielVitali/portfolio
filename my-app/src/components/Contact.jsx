import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f]  flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[1000px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 ">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form bellow or shoot me an email caca@gmail.com
          </p>
        </div>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          id="name"
          className="bg-[#ccd6f6] p-2"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          name="message"
          rows="10"
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>{" "}
      </form>
    </div>
  );
};

export default Contact;
