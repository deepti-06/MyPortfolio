import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="skillsDiv  flex justify-center  space-x-4 bg-black py-4 px-4">
      <h2 className="aboutTitle">Contact Me</h2>
      <p className="text-white mt-4">
        Please contact me at <u>deepti.verma0602@gmail.com </u>or
        connect me on{" "}
        <Link
          to="https://www.linkedin.com/in/deepti-b3990b42/"
          className="text-blue-500 hover:text-blue-800 font-medium transition"
        >
          Linkedin
        </Link>{" "}
      </p>
    </div>
  );
};
export default Contact;
