import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = ({ onEnter }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #dfe9f3 0%, #ffffff 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          padding: "50px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.4)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          textAlign: "left",
          maxWidth: "650px",
          width: "90%",
        }}
      >
        <Typography
          variant="h2"
          sx={{ mb: 1, fontWeight: 800, alignSelf: "center" }}
        >
          Juan Diego Laredo
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            fontWeight: 400,
            color: "#34495e",
          }}
        >
          Full Stack Developer | C#/.NET, Java & Cloud (Azure/AWS)
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, color: "#555", lineHeight: 1.6 }}
        >
          Desarrollador Full Stack con experiencia en el ciclo completo de
          software: frontend, backend, servicios REST y bases de datos
          relacionales. Manejo tecnologías como Java, C#, JavaScript, Angular,
          React y Spring Boot, además de PostgreSQL, MySQL y Oracle.
          Familiaridad con plataformas en la nube como Azure y AWS.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            onClick={onEnter}
            sx={{
              paddingX: 5,
              paddingY: 1.5,
              fontSize: "1rem",
              borderRadius: "12px",
              textTransform: "none",
              backgroundColor: "#3498db",
              "&:hover": { backgroundColor: "#2980b9" },
              boxShadow: "0 4px 15px rgba(52, 152, 219, 0.4)",
            }}
          >
            Explorar mi Experiencia
          </Button>

          <Button
            variant="outlined"
            startIcon={<LinkedInIcon />}
            onClick={() =>
              window.open("https://www.linkedin.com/in/juandlaredo/", "_blank")
            }
            sx={{
              paddingX: 4,
              paddingY: 1.5,
              fontSize: "1rem",
              borderRadius: "12px",
              textTransform: "none",
              borderColor: "#3498db",
              color: "#3498db",
              "&:hover": {
                borderColor: "#2980b9",
                color: "#2980b9",
                backgroundColor: "rgba(52, 152, 219, 0.08)",
              },
            }}
          >
            LinkedIn
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Home;
