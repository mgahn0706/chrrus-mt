import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CodyItemType } from "../utils/fixtures";

const LaneToColorCode = (color: string) => {
  switch (color) {
    case "1":
      return "#0052A4";
    case "7":
      return "#747F00";
    case "GJ":
      return "#77C4A3";
    case "4":
      return "#00A4E3";
    case "5":
      return "#833edb";
    case "3":
      return "#f77636";
    case "airport":
      return "#0090D2";
    case "SBD":
      return "#b5283b";
    case "BD":
      return "#f3d81f";
    default:
      return "#000000";
  }
};

const OutfitItem = ({ cody }: { cody: CodyItemType }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={cody.image}
          height="200px"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cody.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            위치: {cody.place}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            색상
          </Typography>
          <Box display="flex">
            {cody.pointColor.map((color) => {
              return (
                <Box
                  key={color}
                  bgcolor={LaneToColorCode(color)}
                  display="flex"
                  height={30}
                  width={30}
                />
              );
            })}
          </Box>
          <Typography variant="body2" color="text.secondary" mt={1}>
            나이: {cody.age}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            연락처: {cody.mobile}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default OutfitItem;
