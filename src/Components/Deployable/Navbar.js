import "./Navbar.css";
import { useState, useEffect } from "react";

export default function Navbar({ sections }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Obtén la altura de la barra de navegación
      const navbar = document.querySelector(".navbar");
      const navbarOffsetTop = navbar.offsetTop;

      if (window.scrollY > navbarOffsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Añade el listener del scroll
    window.addEventListener("scroll", handleScroll);

    // Llama a handleScroll para la comprobación inicial
    handleScroll();

    // Limpia el listener al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isFixed ? 'fixed' : ''}`}>
        <ul className="navbar_list">
          {sections.map((section, index) => (
            <li key={index} className="navbar_item">
              <a href={`#${section.id}`} className="navbar_link">
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
