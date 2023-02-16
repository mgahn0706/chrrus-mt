import './App.css';
import React from 'react';
import {AppBar, Box, createTheme, ThemeProvider, Typography} from "@mui/material";

function App() {

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        }
    })

  return (
      <ThemeProvider theme={darkTheme}>
    <Box sx={{display: 'flex'}}>
      <AppBar component="nav"
      >

        <Typography
        variant="h6"
        component="div"
        sx={{py: 1, ml: 2}}
        >
          CHUSINSA
        </Typography>
      </AppBar>
    </Box>
      </ThemeProvider>
  );
}

export default App;
