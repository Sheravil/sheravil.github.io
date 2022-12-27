import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Avatar from "@mui/material/Avatar";
import { color } from "@mui/system";
import { BorderColor } from "@mui/icons-material";
export default function AboutMe() {
  return (
    <Box height="95vh" bgcolor="rgba(50, 100, 83, 0.4)" fontFamily={"Arial"}>
      <Grid
        container
        height="100%"
        alignItems="center"
        padding={30}
        color={"darkcyan"}
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
        <Grid item xs={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://media.licdn.com/dms/image/D4D03AQG9mkoN9LNp2w/profile-displayphoto-shrink_800_800/0/1670255372337?e=1677715200&v=beta&t=SHia7ha4Rd1tbEWMpzZY-wg2EnnCmv7AeiExpDvPsc8"
            sx={{
              width: 350,
              height: 350,
              float: "right",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
