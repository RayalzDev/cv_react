import "./Navbar.css";
import { useState, useEffect } from "react";

export default function Navbar({ sections }) {
  
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Obtener la altura de la barra de navegación
      const navbar = document.querySelector(".navbar");
      const navbarOffsetTop = navbar.offsetTop;

      if (window.scrollY > navbarOffsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Añadir el listener del scroll
    window.addEventListener("scroll", handleScroll);

    // Llamar a handleScroll para la comprobación inicial
    handleScroll();

    // Limpiar el listener al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isFixed ? "fixed" : ""}`}>
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
