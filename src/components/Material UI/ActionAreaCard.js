import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import RepairImg from "../img/repair.png";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

export default function ActionAreaCard() {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Card
      sx={{
        maxWidth: 900,
        backgroundColor: "rgba(0, 0, 0, 0)",
        boxShadow: "none",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height={{ xs: 180, md: 500 }}
          image={RepairImg}
          sx={{ padding: "15px" }}
          display="flex"
        />
        <CardContent>
          <Grid container xs={12}>
            <Grid xs={12} lg={8}>
              <Typography
                gutterBottom
                variant="h1"
                component="div"
                color={"#5F7161"}
                display="flex"
                marginLeft={{ xs: 1, md: 5 }}
              >
                Repairs
              </Typography>
            </Grid>
            <Grid xs={12} lg={4}>
              <CircularProgress
                disableShrink
                variant="determinate"
                value={progress}
                sx={{ marginTop: "20px", color: "#ff9800" }}
                size="100px"
              />
            </Grid>
            <Grid xs={12}>
              <Typography
                variant="body1"
                color={"#5F7161"}
                display="flex"
                marginLeft={{ xs: 1, md: 5 }}
                paddingTop="10px"
              >
                This page will be active as soon as possible.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
