import { motion } from "framer-motion";


 const HeroComponent=() =>{
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative isolate overflow-auto py-12 sm:py-32 flex justify-center flex-col">
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
       
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:mx-0 ">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl flex justify-center">
            Deepti
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8 flex justify-center">
          Hi, I’m a Frontend Developer with over 4 years of experience in building responsive and scalable web applications using React.js, Redux, HTML, CSS, and JavaScript. I enjoy crafting simple, clean, and polished websites that deliver real value to users.
          </p>
        </div>
        <div className="mt-8 flex flex-row gap-4 justify-center" >
        <a href ="#contact"
          type="button"
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors duration-300 flex justify-center"
        >
          Connect with Me 
        </a>
        <a href= "./cv.pdf"
          download
          
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition
          flex justify-center"
        >
          Download CV
        </a>
      </div>
      </div>
    </motion.div>
  );
}

export default HeroComponent;
