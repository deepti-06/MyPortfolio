import { motion } from 'framer-motion';

import { Link } from "react-router-dom"

const Projects = ({title, content,language,image,link})=>{
  console.log("language prop:", language);
  return(
    

    <motion.div 
    initial={{ rotateY: 180, opacity: 0 }}
  whileInView={{ rotateY: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  style={{ transformStyle: 'preserve-3d' }}
    className="max-w-2xl mx-auto rounded-lg shadow-md border-1 border-white overflow-hidden flex flex-col md:flex-row hover:shadow-2xl">
  {/* Text Section */}
  <div className="p-6 flex flex-col justify-center md:w-1/2">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-gray-700">
      {content}
     
    </p>
    <div className="skillName space-x-1 max-w-3xl gap-0.5 mt-6 ">
      {language.map((skill)=>
   
      <h5 className="text-sm text-white bg-black px-4 py-2 rounded shadow">{skill}</h5>
      
      )}
     </div>
     <div className=" fw-full max-w-xs break-words mt-6">
     <Link to= {link} className="text-blue-500 hover:text-blue-800 font-medium transition break-words w-full md:w-auto">
     {link}
     </Link>
     </div>

  </div>

  {/* Image Section */}
  <div className="md:w-1/2">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>

    
  )
}
export default Projects