import React, { useState } from 'react';
import FullScreenTimeline from './components/timelineData';
import Home from './components/home';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h2: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h6: { fontWeight: 400 },
  },
});

function App() {
  const [showTimeline, setShowTimeline] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      {showTimeline ? (
        <FullScreenTimeline />
      ) : (
        <Home onEnter={() => setShowTimeline(true)} />
      )}
    </ThemeProvider>
  );
}

export default App;
