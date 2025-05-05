import Projects from "./Projects"

const ProjectList =()=>{

  return(
    <div className="skillsDiv  flex justify-center space-y-4 space-x-4 bg-gradient-to-r from-gray-100 via-blue-200 to-white py-12 px-4 gap-2">
    <h2 className="aboutTitle">My Projects</h2>

    <Projects title="StyleNest"
    content="This is a personal project of an ecommerce website with features like login, add to cart, view cart and mark favorites. For backend there are api calls and server is hosted on Glitch."
    language={["React","Bootstrap", "Glitch","redux toolkit","Javascript","Vite"]}
    image="./img1.png"
    link= "https://deepti-06.github.io/ProjectEcom/"/>

    <Projects title="NikelToken"
    content="This is website which I worked on as a team member when I was working with my last company XCDM ltd. It is mainly built using React and Typescript. For css we have used tailiwnd Css."
    language={["React","Tailwind","Typescript"]}
    image="./img2.png"
    link="https://nikeltoken.com/"/>

<Projects title="Marketplug Crypto website"
    content="This is website which I worked on as a team member when I was working with the company MarketPlug. It is mainly built using React and Javascript For css we have used Bootstrap Css. "
    language={["React","Bootstrap","Javascript", "Framer Motion"]}
    image="./img4.png"
    link="https://web.archive.org/web/20230428103730/https://token.marketplug.com/"/>

    <Projects title="Marketplug Investors website"
    content="This is a investor website which I worked on  when I was working with the company MarketPlug. This website was created for the investors to showcase our ability for funding.It is mainly built using React and Javascript For css we have used Bootstrap Css."
    language={["React","Bootstrap","Javascript"]}
    image="./img5.png"
    link="https://web.archive.org/web/20230428103329/https://invest.marketplug.com/"/>

<Projects title="Counter App"
    content="This is a basic Counter App which I created for basic counter functions, using React, JavaScript and redux for state management."
    language={["React","Bootstrap","Javascript", "Vite"]}
    image="./img3.png"
    link="https://deepti-06.github.io/Counter/"/>
   

    </div>
  )
}
export default ProjectList