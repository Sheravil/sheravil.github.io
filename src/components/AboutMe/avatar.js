import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// import Profl from "./profil.jpg"

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="https://media.licdn.com/dms/image/D4D03AQG9mkoN9LNp2w/profile-displayphoto-shrink_800_800/0/1670255372337?e=1677715200&v=beta&t=SHia7ha4Rd1tbEWMpzZY-wg2EnnCmv7AeiExpDvPsc8"
        // src={Profl}
        sx={{ width: 350, height: 350 }}
      />
    </Stack>
  );
}