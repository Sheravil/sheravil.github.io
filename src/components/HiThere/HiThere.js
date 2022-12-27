import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/joy/IconButton";
import Typewriter from "typewriter-effect/dist/core";

import Profilİmage from "./profil.jpg";

export default function HiThere() {
  useEffect(() => {
    var app = document.getElementById("tester");

    const typewriter = new Typewriter(app, {
      loop: true,
      cursor: "/>",
    });

    typewriter
      .typeString("<Front-End Developer ")
      .pauseFor(500)
      .deleteAll()
      .typeString("<React & Material UI ")
      .pauseFor(500)
      .deleteAll()
      .typeString("<JavaScript ")
      .pauseFor(500)
      .deleteAll()
      .typeString("<HTML/CSS ")
      .pauseFor(500)
      .deleteAll()
      .typeString("<BootStrap 4/5 ")
      .pauseFor(500)
      .deleteAll()
      .typeString("<Connect with me → ")
      .pauseFor(5000)
      .deleteAll()
      .start();
  }, []);

  return (
    <Box
      id="hiThere"
      height="100vh"
      bgcolor="rgba(239, 234, 216, 0.5)"
      fontFamily={"Arial"}
      sx={{ textAlign: { xs: "center", lg: "left" } }}
    >
      <Grid
        container
        height="100%"
        alignItems="center"
        justifyContent="space-between"
        padding={30}
        sx={{
          padding: { xs: 0, md: 20 },
          flexDirection: { xs: "column-reverse", md: "row" },
          flexWrap: { xs: "nowrap" },
        }}
        color={"#5F7161"}
        // color={"rgba(234, 253, 252,0.8)"}
      >
        <Grid
          container
          item
          md={8}
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            display="flex"
            textAlign={{ xs: "center", md: "left" }}
            fontSize={30}
          >
            <div style={{ width: "100%" }}>
              <p>Hi there 👋, I'm</p>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            textAlign={{ xs: "center", md: "left" }}
            sx={{
              fontSize: { xs: 30, md: 40, lg: 60 },
              margin: { xs: -10, md: -8, lg: -12 },
              marginLeft: { xs: -10.6, md: -9, lg: -14 },
            }}
          >
            <h1>Emin Çuha</h1>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            margin={{ xs: 2, md: 0 }}
            fontSize={{ xs: 20, md: 20, lg: 25 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <p id="tester"></p>
            <div
              style={{
                fontSize: "20px",
                marginTop: "-20px",
              }}
            >
              <a
                href="mailto:emincuha@gmail.com"
                style={{
                  color: "#5F7161",
                  textDecoration: "none",
                }}
              >
                emincuha@gmail.com
              </a>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            textAlign={{ xs: "center", md: "left" }}
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <a
              href="https://www.linkedin.com/in/emincuha/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#5F7161" }}
            >
              <IconButton
                variant="solid"
                sx={{
                  backgroundColor: "rgba(109, 139, 116, 0.1)",
                }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </a>
            <a
              href="https://github.com/Sheravil"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#5F7161" }}
            >
              <IconButton
                variant="solid"
                sx={{
                  backgroundColor: "rgba(109, 139, 116, 0.1)",
                }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
            </a>
          </Grid>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            marginTop: { xs: 5, md: 0 },
          }}
        >
          <Avatar
            alt="Remy Sharp"
            // src="https://media.licdn.com/dms/image/D4D03AQG9mkoN9LNp2w/profile-displayphoto-shrink_800_800/0/1670255372337?e=1677715200&v=beta&t=SHia7ha4Rd1tbEWMpzZY-wg2EnnCmv7AeiExpDvPsc8"
            src={Profilİmage}
            sx={{
              width: { xs: 300, sm: 350 },
              height: { xs: 300, sm: 350 },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
