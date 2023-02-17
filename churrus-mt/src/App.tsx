import './App.css';
import React from 'react';
import {AppBar, Box, createTheme, Grid, ThemeProvider, Typography} from "@mui/material";
import OutfitItem from "./components/OutfitItem";
import Footer from "./components/Footer";

function App() {

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        }
    })

    const dummy: string[] = ['a', 'b', 'c', 'b', 'c', 'b', 'c', 'b', 'c', 'b', 'c'];

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

        <Grid  direction="row"
               justifyContent="center"
               alignItems="center"
               width={"100%"}
        >

        {dummy.map(()=>{
            return (
                <Grid item xs={3} sm={6} md={4} >
                <OutfitItem/>
                </Grid>
    )


        })}
        </Grid>


    </Box>

          <Footer/>

      </ThemeProvider>
  );
}

export default App;
