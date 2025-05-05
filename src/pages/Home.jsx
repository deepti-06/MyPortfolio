import Header from "../components/Header";
import HeroComponent from "../components/HeroComponent";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import ProjectList from "../components/ProjectList";
import Contact from "../components/Contact";
import Experience from "../components/Experience";


const Home = () => {

  return (
    <div className="relative min-h-screen overflow-auto">
      <Header />
      <div className="absolute inset-0  bg-gradient-to-b from-blue-300 via-gray-600 to-white">
        
      <div id ="home"><HeroComponent /></div>
      
        <div id ="about"><AboutMe/></div>
        <div id ="skills"> <Skills/></div>
        <div id= "projects"><ProjectList/></div>
        <Experience/>
        <div id= "contact"><Contact/></div>


       
        
        
      </div>
    </div>
  );
};
export default Home;

//https://nikunjborad.tech/#contact
