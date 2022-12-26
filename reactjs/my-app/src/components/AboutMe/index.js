import * as React from 'react';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import AboutGrid from './hiThere';


export default function LabTabs() {
  const [value] = React.useState('1');


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        
        <TabPanel value="1" >
          <AboutGrid  />
        </TabPanel>
      </TabContext>
    </Box>
  );
}