import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icons
import {Link} from "react-router-dom"

const Header =()=>{
  const [isOpen, setIsOpen] = useState(false);
  return(
    <>
    <header className="sticky top-0 z-50 mt-4 px-4">
  {/* Header container */}
  <div className="bg-white text-black rounded-full px-6 py-3 shadow-md flex items-center justify-between md:max-w-3xl md:mx-auto md:w-full w-fit ml-auto">
    
    {/* Desktop nav only */}
    <nav className="hidden md:flex gap-12 font-semibold text-sm mx-auto">
      <a href="#home" className="hover:text-blue-900">Home</a>
      <a href="#about" className="hover:text-blue-900">About</a>
      <a href="#skills" className="hover:text-blue-900">Skills</a>
      <a href="#projects" className="hover:text-blue-900">Projects</a>
      <a href="#experience" className="hover:text-blue-900">Experience</a>
      <a href="#contact" className="hover:text-blue-900">Contact</a>
    </nav>

    {/* Mobile hamburger icon (right-aligned) */}
    <button
      className="md:hidden ml-auto"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle Menu"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {/* Mobile dropdown nav */}
  {isOpen && (
    <div className="md:hidden mt-2 flex flex-col items-center gap-3 bg-white text-black rounded-xl px-4 py-3 shadow-md w-[90%] mx-auto">
      <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
      <a href="#about" onClick={() => setIsOpen(false)}>About</a>
      <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
      <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
      <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
    </div>
  )}
</header>
    </>
  )
}
export default Header