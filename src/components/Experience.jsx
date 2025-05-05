import { Briefcase } from "lucide-react";
import {motion} from "framer-motion"
const experiences = [
  {
    title: "Senior FrontEnd Developer | XCDM Limited",
    date: "May,2023 - Sept,2023",
    icon: <Briefcase />,
    description:
      "Developed responsive website of NikelToken using React,HTML and Tailwind CSS. Also,Translated Figma designs into Webflow interfaces and Conducted research on frontend stacks.",
    side: "left",
  },
  {
    title: "Frontend Software Developer | MarketPlug India",
    date: "May,2021 - April,2023",
    icon: <Briefcase />,
    description:
      "Built and deployed websites using React,Docker, Bootstrap CSS.Also created Docker files and its images for running it on to the server.Created the Setup of CI/CD pipeline for automating the process.",
    side: "right",
  },
];


const Experience =()=>{
  return(

    <div className="skillsDiv relative  mx-auto px-4  bg-gradient-to-r from-gray-100 via-blue-300 to-white "
    id ="experience">
          <h2 className="aboutTitle"> Latest Experience </h2>

      

      {experiences.map((exp, idx) => (
        <motion.div
        initial={{ rotate: -10, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
          key={idx}
          className={` max-w-4xl mt-5 mb-12 flex flex-col md:flex-row items-center  ${
            exp.side === "left" ? "md:justify-start" : "md:justify-end"
          }`}
        >
          <div
            className={"md:w-1/2 md:pr-8 text-left"}
          >
            <div className="bg-gradient-to-r from-gray-100 via-blue-200 to-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold">{exp.title}</h3>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          </div>

          <div className="z-10 w-10 h-10 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-600 mx-4 my-4">
            {exp.icon}
          </div>

          <div className=" md:block text-sm text-gray-600">
            {exp.date}
          </div>
        </motion.div>
      ))}
    </div>

  )
}

export default Experience