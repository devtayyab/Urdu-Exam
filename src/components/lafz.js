import * as React from 'react';
import {Box} from '@material-ui/core';
import {Paper} from '@material-ui/core';

export default function SimplePaper() {
  return (
    <Box
    
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        textAlign:'center',
        '& > :not(style)': {
          m: 1,
          width: '80%',
          height: 128,
        },
      }}
    >
      
      <Paper elevation={3} >
        <h4>Aj ka lafz</h4>
        <pre>r t g f </pre>
        <h6>Meaning</h6>
      </Paper>
    </Box>
  );
}
