import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LinearBuffer from "../Material UI/LinearBuffer";
import ActionAreaCard from "../Material UI/ActionAreaCard";

export default function MyProjects() {
  return (
    <Box
      id="projects"
      height="100vh"
      bgcolor="rgba(239, 234, 216, 0.2)"
      fontFamily={"Arial"}
    >
      <Grid>
        <LinearBuffer />
      </Grid>
      <Grid
        xs={12}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        style={{ minHeight: "100vh" }}
      >
        <ActionAreaCard />
      </Grid>
    </Box>
  );
}
