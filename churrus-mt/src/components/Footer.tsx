import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { toast } from "react-toastify";

const Footer = () => {
  return (
    <Box
      position="relative"
      bottom={0}
      textAlign="center"
      color="darkgray"
      height="150px"
      bgcolor="#f4f4f4"
      width="100%"
      py={2}
    >
      {" "}
      <Typography color="black" fontWeight="bold">
        비밀번호를 잊으셨나요?
      </Typography>
      <Button
        sx={{ mt: 1 }}
        variant="outlined"
        color="error"
        onClick={() => {
          toast.info(
            '비밀번호는 "이벤트 대상자"의 휴대폰 뒷번호 4자리입니다.',
            {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
        }}
      >
        비밀번호 찾기
      </Button>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body1">CHURRUS FASHION WEB </Typography>
      <Typography variant="body2">
        © CHURRUS 2023. All rights reserved{" "}
      </Typography>
    </Box>
  );
};

export default Footer;
