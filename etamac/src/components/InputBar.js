import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material'

export default function Mathinput() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
        <Paper  elevation={2} >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
      </Paper>
      </Box>
  );
}

