// src/FullScreenTimeline.js
import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import timelineData from "../common/portafolio";

// Íconos Devicon
import CsharpOriginal from "devicons-react/icons/CsharpOriginal";
import AzureOriginal from "devicons-react/icons/AzureOriginal";
import SpringOriginal from "devicons-react/icons/SpringOriginal";
import AngularjsOriginal from "devicons-react/icons/AngularjsOriginal";
import AzuresqldatabaseOriginal from "devicons-react/icons/AzuresqldatabaseOriginal";
import OracleOriginal from "devicons-react/icons/OracleOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import PostgresqlOriginal from "devicons-react/icons/PostgresqlOriginal";
import DockerOriginal from "devicons-react/icons/DockerOriginal";

// Imágenes locales para tecnologías sin Devicon
import powerapps from "../img/power-apps.png";
import sap from "../img/sap.png";
import ux from "../img/figma.png";
import networking from "../img/networking.png";
import scrum from "../img/scrum.png";

// Colores por tipo
const colorByType = (type) => {
  switch (type) {
    case "work":
      return "#5B8FB9"; // azul grisáceo
    case "study":
      return "#7D9D9C"; // verde grisáceo
    case "project":
      return "#D9A066"; // ocre suave
    default:
      return "#E0E0E0"; // gris claro
  }
};

const transitionSettings = { duration: 1.2, ease: "easeInOut" };

// Map de íconos Devicon + imágenes locales
const iconMap = {
  csharp: <CsharpOriginal size={56} color="#222" />,
  docker: <DockerOriginal size={56} color="#222" />,
  java: <SpringOriginal size={56} color="#222" />,
  typescript: <AngularjsOriginal size={56} color="#222" />, // placeholder si no hay TS
  azure: <AzureOriginal size={56} color="#222" />,
  mysql: <AzuresqldatabaseOriginal size={56} color="#222" />,
  postgresql: <PostgresqlOriginal size={56} color="#222" />,
  oracle: <OracleOriginal size={56} color="#222" />,
  react: <ReactOriginal size={56} color="#222" />,
  angular: <AngularjsOriginal size={56} color="#222" />,
  spring: <SpringOriginal size={56} color="#222" />,

  // Imágenes locales
  powerapps: (
    <img src={powerapps} alt="Power Apps" style={{ width: 110, height: 110 }} />
  ),
  sap: <img src={sap} alt="SAP" style={{ width: 110, height: 60 }} />,
  ux: <img src={ux} alt="UX/Figma" style={{ width: 56, height: 56 }} />,
  networking: (
    <img src={networking} alt="Networking" style={{ width: 80, height: 80 }} />
  ),
  scrum: <img src={scrum} alt="SCRUM" style={{ width: 56, height: 56 }} />,
};

const FullScreenTimeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < timelineData.length - 1)
      setCurrentIndex(currentIndex + 1);
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const item = timelineData[currentIndex];

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        bgcolor: colorByType(item.type),
        fontFamily: "Inter, Arial, sans-serif",
        color: "#222",
      }}
    >
      {/* Flecha superior */}
      {currentIndex > 0 && (
        <IconButton
          onClick={prev}
          sx={{
            position: "absolute",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            color: "#222",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <ArrowUpwardIcon fontSize="large" />
          <Typography variant="body1">
            {timelineData[currentIndex - 1].year}
          </Typography>
        </IconButton>
      )}

      {/* Flecha inferior */}
      {currentIndex < timelineData.length - 1 && (
        <IconButton
          onClick={next}
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            color: "#222",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <ArrowDownwardIcon fontSize="large" />
          <Typography variant="body1">
            {timelineData[currentIndex + 1].year}
          </Typography>
        </IconButton>
      )}

      {/* Contenido animado */}
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              maxWidth: "1200px",
              width: "100%",
              gap: 5,
              px: 3,
            }}
          >
            {/* Texto */}
            <motion.div
              key={item.year + "-text"}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={transitionSettings}
              style={{ flex: 1 }}
            >
              <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
                {item.year}
              </Typography>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                {item.title}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 400, mt: 1 }}>
                {item.description}
              </Typography>

              {/* Íconos */}
              {item.tech && item.tech.length > 0 && (
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    justifyContent: "space-evenly", // distribuye uniformemente
                    alignItems: "center",
                    flexWrap: "wrap",
                    width: "100%", // ocupa todo el ancho del contenedor de texto
                  }}
                >
                  {item.tech.map((tech) => (
                    <Box key={tech}>{iconMap[tech]}</Box>
                  ))}
                </Box>
              )}
            </motion.div>

            {/* Imagen */}
            <motion.div
              key={item.img + "-img"}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={transitionSettings}
              style={{ flex: 1, textAlign: "center" }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "70vh",
                  marginLeft: "5em",
                  borderRadius: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
            </motion.div>
          </Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default FullScreenTimeline;
