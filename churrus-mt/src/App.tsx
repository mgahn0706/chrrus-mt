import "./App.css";
import React from "react";
import {
  AppBar,
  Box,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import OutfitItem from "./components/OutfitItem";
import Footer from "./components/Footer";
import { codyItem } from "./utils/fixtures";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Typography variant="h6" component="div" sx={{ py: 1, ml: 2 }}>
            CHUSINSA
          </Typography>
        </AppBar>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {codyItem.map((cody) => {
            return (
              <Grid item xs={2} sm={4} md={4}>
                <OutfitItem cody={cody} />
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
