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
    default:
      return "#000000";
  }
};

const OutfitItem = ({ cody }: { cody: CodyItemType }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" image={cody.image} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cody.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            {cody.place}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            색상
          </Typography>
          <Box display="flex">
            {cody.pointColor.map((color) => {
              return (
                <Box
                  bgcolor={LaneToColorCode(color)}
                  display="flex"
                  height={30}
                  width={30}
                />
              );
            })}
          </Box>
          <Typography variant="body2" color="text.secondary" mt={1}>
            설명
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            설명
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default OutfitItem;
