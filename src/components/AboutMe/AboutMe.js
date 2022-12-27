import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function AboutMe() {
  return (
    <Box
      id="aboutMe"
      height="100vh"
      bgcolor="rgba(239, 234, 216, 0.8)"
      fontFamily={"Arial"}
    >
      <Grid
        container
        alignItems="center"
        padding={30}
        sx={{ padding: { xs: 5, md: 10, lg: 20 } }}
        color={"#5F7161"}
        // color={"rgba(234, 253, 252,0.8)"}
      >
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            alignSelf="flex-start"
            textAlign="left"
            fontSize={30}
            sx={{ fontSize: { xs: 20, xl: 30 } }}
          >
            <h1>About Me</h1>
            <hr />
          </Grid>

          <Grid
            item
            xs={12}
            fontSize={30}
            sx={{ fontSize: { xs: 20, xl: 30 } }}
          >
            <h4>Hi, my name is Emin Çuha </h4>
            <p>
              I am a front-end developer with a passion for creating intuitive
              and visually appealing websites. I have a strong foundation in
              HTML and CSS, and am currently learning and working with React and
              Material UI to enhance my skill set. I am eager to take on new
              challenges and am always looking for opportunities to grow and
              learn as a developer.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
