
import { motion } from 'framer-motion';
const Skills =()=>{

  const skills=[
    "React","JavaScript","Typescript","HTML","CSS","Bootstrap","Tailwind","Redux","ReduxToolkit","React-native", "Docker","Webflow","Git","CI/CD","Figma","Glitch","GithubActions","Postman(basic)"
  ]

  return(
    < div className="skillsDiv  flex justify-center space-y-4 space-x-4 bg-black py-12 px-4 ">
     <h2 className="aboutTitle">Technical Skills</h2>

     <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
     className="skillName space-x-4 max-w-3xl gap-2">
      {skills.map((skill)=>
   
      <h3 className="text-lg text-white px-4 py-2 border-1 rounded shadow hover:bg-gray-600">{skill}</h3>
      
      )}
     </motion.div>
    </div>
  )
}
export default Skills