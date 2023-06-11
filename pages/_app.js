import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import "../styles/globals.css"

import Navbar from "../components/Navbar"
import InputBar from '../components/InputBar'

export default function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      {/* <Container> */}
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <InputBar/>
      {/* </Container> */}
    </>
  );
};

