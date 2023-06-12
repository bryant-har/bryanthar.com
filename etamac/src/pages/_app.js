import * as React from 'react'
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import "../styles.css"

import Navbar from "../components/Navbar"
import InputBar from '../components/InputBar'

// Decorator
export default function Wrapper({Component, Props}) {
  return (
    <>
      <Head>        
        <title>EtaMac</title>
      </Head>
      <CssBaseline />
      <Navbar />
    <Component {...Props}/>
    </>
  );
};

