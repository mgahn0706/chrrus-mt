import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      position="fixed"
      bottom={0}
      textAlign="center"
      color="darkgray"
      bgcolor="#f4f4f4"
      width="100%"
      py={2}
    >
      <Typography variant="body1">CHURRUS FASHION WEB </Typography>
      <Typography variant="body2">
        © CHURRUS 2023. All rights reserved{" "}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography color="black" fontWeight="bold">
        비밀번호를 잊으셨나요?
      </Typography>
      <Button variant="outlined" color="error">
        비밀번호 찾기
      </Button>
    </Box>
  );
};

export default Footer;
