import "./App.css";
import React from "react";
import {
  Alert,
  AlertTitle,
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
import eventImg from "./assets/EventImage.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Box height="auto" minHeight="100%" pb={2} px={1}>
        <AppBar component="nav">
          <Typography variant="h6" component="div" sx={{ py: 1, ml: 2 }}>
            CHUSINSA
          </Typography>
        </AppBar>
        <Box mt="50px">
          <img src={eventImg} alt={"event"} width="100%" />
        </Box>

        <Alert severity="info" sx={{ my: 3 }}>
          <AlertTitle sx={{ fontWeight: "bold" }}>이벤트 정보</AlertTitle>
          다음 모델이 사진찍힌 위치로 가주세요 <br />
          <strong>"고준재"</strong>
        </Alert>
        <Typography fontWeight="bold" mb={2}>
          TODAY LOOK
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {codyItem.map((cody) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={cody.title}>
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
