import React, { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const LANGUAGES = { TR: "TR", EN: "EN" };

const TEXTS = {
  head: {
    TR: "Hakkımda",
    EN: "About Me",
  },
  body: {
    TR: (
      <>
        <h4>Merhaba, benim adım Emin Çuha</h4>
        <p>
          Görsel olarak çekici web sitesi oluşturma isteği olan bir Ön-Uç
          geliştiricisiyim.HTML , CSS ve BootStrap konusunda güçlü bir temele
          sahibim. React ve Material UI kullanıyorum . Bir geliştirici olarak
          her zaman kendimi daha ileri seviyeye taşımaya çalışıyorum.
        </p>
      </>
    ),
    EN: (
      <>
        <h4>Hi, my name is Emin Çuha </h4>
        <p>
          I am a front-end developer with a passion for creating intuitive and
          visually appealing websites. I have a strong foundation in HTML and
          CSS, and am currently learning and working with React and Material UI
          to enhance my skill set. I am eager to take on new challenges and am
          always looking for opportunities to grow and learn as a developer.
        </p>
      </>
    ),
  },
};

export default function AboutMe() {
  const [languange, setLanguange] = useState(LANGUAGES.EN);

  const handleLanguageClick = (_, checked) => {
    if (checked) {
      setLanguange(LANGUAGES.TR);
      return;
    }

    setLanguange(LANGUAGES.EN);
  };

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
            xs={8}
            alignSelf="flex-start"
            textAlign="left"
            fontSize={30}
            sx={{ fontSize: { xs: 20, xl: 30 } }}
          >
            <h1>{TEXTS.head[languange]}</h1>
          </Grid>

          <Grid
            item
            xs={4}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>EN</Typography>
              <Switch
                checked={languange === LANGUAGES.TR}
                inputProps={{ "aria-label": "language" }}
                onChange={handleLanguageClick}
                color="default"
              />
              <Typography>TR</Typography>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            fontSize={30}
            sx={{ fontSize: { xs: 20, xl: 30 } }}
          >
            {TEXTS.body[languange]}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
