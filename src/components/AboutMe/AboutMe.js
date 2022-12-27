import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function AboutMe() {
  return (
    <Box height="95vh" bgcolor="rgba(239, 234, 216, 0.8)" fontFamily={"Arial"}>
      <Grid
        container
        alignItems="center"
        padding={30}
        color={"#5F7161"}
        // color={"rgba(234, 253, 252,0.8)"}
      >
        <Grid container item xs={8} justifyContent="center" alignItems="center">
          <Grid
            item
            xs={12}
            alignSelf="flex-start"
            textAlign="left"
            fontSize={30}
          >
            <p>Hi there 👋, I'm</p>
          </Grid>
          <Grid
            item
            xs={12}
            alignSelf="flex-start"
            textAlign="left"
            fontSize={60}
            margin={-15}
            marginLeft={-17}
          >
            <h1>Emin Çuha</h1>
          </Grid>
          <Grid item xs={6} fontSize={30}>
            <p>Front-End Developer</p>
            <p style={{ fontSize: "20px", marginTop: "-30px" }}>
              emincuha@gmail.com
            </p>
          </Grid>
          <Grid item xs={6} textAlign="left">
            <LinkedInIcon fontSize="large" />
            <GitHubIcon fontSize="large" />
          </Grid>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Box>
  );
}
