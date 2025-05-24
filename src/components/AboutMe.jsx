import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
    className="aboutMe w-full flex justify-center space-y-4 bg-black">
      <h2 className="aboutTitle">About Me</h2>
      <p className="aboutText text-center max-w-3xl  text-lg ">
        Hey there! 👋 I'm a frontend developer who's all about turning beautiful
        designs into working codes to give user the beautiful experience. My
        journey into coding started with a passion for problem-solving, but it
        was the magic of frontend development that truly stole my heart.<br/> </p>
        <p className="aboutText text-center max-w-3xl  text-lg">
          I am keen into developing websites using React.js with sprinkling in a dash
        of HTML, CSS, and JavaScript to breathe life into designs. From tweaking
        stylesheets to fine-tuning animations, I'm all about those little
        details that make a big difference. And you can bet I've got TypeScript
        in my toolkit, adding that extra layer of stability to my projects.
      </p>
      <p className="aboutText text-center max-w-3xl  text-lg">
      I'm on the lookout for new opportunities to collaborate and bring my frontend expertise to the table. Let's team up and create some digital magic together! ✨
      </p>

    </motion.div>
  );
};
export default AboutMe;
