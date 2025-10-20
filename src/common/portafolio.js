// src/timelineData.js
import jd from "../img/jd.png";
import austral from "../img/austral.jpg";
import ey from "../img/ey.jpg";
import hka from "../img/hka.jpeg";
import reniec from "../img/reniec.jpeg";

const timelineData = [
  {
    year: "Septiembre 2025 – Presente",
    title: "Desarrollador Full-stack (EY)",
    description:
      "Diseño y desarrollo de soluciones tecnológicas end-to-end para la práctica de Servicios de Integridad y Forense. Entrego aplicaciones seguras y escalables combinando front-end y back-end con C#/.NET, Azure y SQL Server.",
    type: "work",
    img: ey,
    tech: ["csharp","typescript", "azure", "mysql"]
  },
  {
    year: "Julio 2025 – Septiembre 2025",
    title: "Auxiliar de Soporte de TI (AUSTRAL GROUP S.A.A.)",
    description:
      "Desarrollé soluciones en Power Apps para automatizar procesos y respaldos. Gestioné laptops y dispositivos móviles usando Azure, optimizando la seguridad y eficiencia del entorno TI.",
    type: "work",
    img: austral,
    tech: ["powerapps", "azure", "networking"]
  },
  {
    year: "Septiembre 2024 – Febrero 2025",
    title: "Programa de Intercambio Estudiantil - Hochschule Karlsruhe",
    description:
      "Cursé asignaturas en programación y tecnología, incluyendo Diseño UX y Enterprise Resource Planning (ERP). Adquirí experiencia en SAP S/4HANA, Enterprise Social Media, metodologías ágiles (SCRUM, Design Thinking, Kanban) y trabajo colaborativo.",
    type: "study",
    img: hka,
    tech: ["sap", "scrum", "ux"]
  },
  {
    year: "Marzo 2024 – Agosto 2024",
    title: "Desarrollador Full Stack (TITANIUS CONSULTING)",
    description:
      "Contribuí al desarrollo del sistema DRIAS para RENIEC, orientado al seguimiento de servicios ATI/ATR a nivel nacional, en el marco de una licitación del Ministerio de Cultura. Trabajé en el backend con Java y Spring Boot, utilizando Oracle como base de datos, y apoyé en el frontend con TypeScript.",
    type: "work",
    img: reniec,
    tech: ["spring", "oracle", "typescript"]
  },
  // {
  //   year: "2020",
  //   title: "Inicio de Estudios Universitarios",
  //   description:
  //     "Comencé mis estudios en Ciencia de la Computación en UTEC - Universidad de Ingeniería y Tecnología.",
  //   type: "study",
  //   img: jd,
  // }
];

export default timelineData;
