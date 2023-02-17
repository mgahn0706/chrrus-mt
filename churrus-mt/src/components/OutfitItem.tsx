import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";


const OutfitItem = ({

                    }) => {


    return (
        <Card sx={{minWidth: 300, my: 5}} >
        <CardActionArea>
            <CardMedia
                component="img"
                image="https://image.msscdn.net/mfile_s01/2022/12/18/bdde3c5e78c5325504d6960dd8d1bf10221643.jpg.thumb.jpg.4"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   설명
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>)
}

export default OutfitItem;