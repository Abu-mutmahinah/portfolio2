import leverage from "../Images/t.jpg";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xtwzt9u",
        "template_904pk5i",
        e.target,
        "mZLt2J5yIjaLg-0-1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="bg-gray-800 py-10 lg:px-32" id="Contact">
      <div className="pl-10  text-gray-300">
        <h1 className="text-5xl font-bold  mb-3 pt-10 ">Let's Talk</h1>
        <p className="text-xl">
          Don't wait until tomorrow. Let me help you <br /> create a new
          astonishing look for your brand. Talk to me Today!
        </p>
      </div>

      <div className="flex justify-center flex-col lg:flex-row items-center mt-10 gap-20">
        <div>
          <h1 className=" text-gray-500 uppercase">
            Contact Me and i will get back to you in 24 hours
          </h1>
          <form
            onSubmit={sendEmail}
            className="flex flex-col gap-5 justify-center items-center "
          >
            <input
              name="name"
              type="Text"
              placeholder="Enter Your Full Name"
              required
              className="w-[450px] p-2 bg-gray-800 border-2 border-sky-400 outline-none text-gray-300 mt-5"
            />
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              required
              className="w-[450px] p-2 bg-gray-800 border-2 border-sky-400 outline-none text-gray-300 mt-5"
            />
            <textarea
              className="w-[450px] p-2 bg-gray-800 border-2 border-sky-400 outline-none text-gray-300 mt-5"
              name="message"
              id=""
              cols="20"
              rows="3"
              placeholder="Message. . ."
              required
            ></textarea>
            <input
              type="submit"
              value="Submit Message"
              className=" border-2 border-sky-400 hover:bg-sky-400 transition-all duration-500 ease-out px-5 py-2 rounded text-xl font-semibold text-gray-200 shadow-xl mt-10"
            />
          </form>
        </div>
        <div className="hover:scale-[0.9] transition-all duration-700 ease-out mt-5">
          <img src={leverage} alt="" className="w-[500px] h-[450px]" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
