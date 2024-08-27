import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card/Card";
import Navbar from "./Components/Deployable/Navbar";
import ray from "./img/ray.png";
import skill from "./img/skill.jpg";
import education from "./img/education.png";
import experience from "./img/experience.png";
import personal from "./img/personal.png";
import contacto from "./img/contacto.png";

function App() {
  /* Secciones para el buscador */
  const sections = [
    { id: "about", name: "Sobre Mi" },
    { id: "skills", name: "Conocimientos Personales" },
    { id: "education", name: "Educación" },
    { id: "experience", name: "Experiencia" },
    { id: "personal", name: "Datos Personales" },
    { id: "contact", name: "Contacto" },
  ];

  const educationList = [
    "Titulacion de la ESO",
    'En proceso de terminar el CFGM de "Sistemas microinformáticos y Redes"',
    'Mas recientemente, hice un bootcamp de "Fullstack Web Developer"',
    'Titulación de "Cuidador y Auxiliar de veterinario con animales exóticos"',
  ];

  const textWithEducationList = (
    <div>
      <ul>
        {educationList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
  const experienceList = [
    "Frontend Developer Junior en PWC con un pequeño equipo, coordinado con desarrolladores backend usando metodología agile",
    "QA Tester en PWC durante un corto tiempo, principalmente de aprendizaje",
    "Asistente técnico de Redes. Mantenimiento e instalación de redes en el Ayuntamiento de Alozaina. Actualmente aprendiendo a instalar redes de fibra óptica para particulares.",
    "Ayudante de desarrollo web, volcando contenido en paginas WordPress y manejo de CSS para personalización de componentes en WoderMochi",
    "Cuidador y Auxiliar de veterinario con animales exóticos en el zoológico de Castellar",
  ];

  const textWithExperienceList = (
    <div>
      <ul>
        {experienceList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  const personalInfolist = [
    "Inglés medio/alto escrito y en conversación",
    "Gaming",
    "Participación y gestión en eventos de la comunidad Gamer como Gamepolis",
    "Atención y cuidado de animales",
    "Aprendizaje de idioma",
  ];

  const textWithPersonalInfoList = (
    <div>
      <ul>
        {personalInfolist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
  const contactInfoList = [
    "Mail: rayriosdev@gmail.com",
    "LinkedIn: https://www.linkedin.com/in/raul-rios-moreno/",
    "Github: https://github.com/RayalzDev",
  ];

  const textWithContactinfo = (
    <div>
      <ul>
        {contactInfoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <div>
        <Header name="Ray Ríos Moreno" />
      </div>
      <div>
        <Navbar sections={sections} />
      </div>
      <div className="App">
        <div>
          <Card
            text="Me llamo Raúl Ríos Moreno, soy fullstack developer, principalmente con React, Javascript y NodeJS. Puedo aportar
                  valores adquiridos en otros sectores como el
                  compromiso y el cariño hacia mi trabajo o el
                  saber trabajar en equipo"
            imageSrc={ray}
            reverse={false}
            id="about"
          />
          <Card
            text="Mis conocimientos son principalmente en React con Javascript, CSS y Bootstrap para el frontend. 
                  Tambien tengo conocimientos con NodeJS para el backend y MongoDB para base de datos. 
                  Sin embargo, no me limito por ello y siempre estoy dispuesto a aprender nuevas técnicas y herramientas para el crecimiento personal."
            imageSrc={skill}
            reverse={true}
            id="skills"
          />
          <Card
            text={textWithEducationList}
            imageSrc={education}
            reverse={false}
            id="education"
          />
          <Card
            text={textWithExperienceList}
            imageSrc={experience}
            reverse={true}
            id="experience"
          />
          <Card
            text={textWithPersonalInfoList}
            imageSrc={personal}
            reverse={false}
            id="personal"
          />
          <Card
            text={textWithContactinfo}
            imageSrc={contacto}
            reverse={true}
            id="contact"
          />
        </div>
      </div>
    </>
  );
}

export default App;
