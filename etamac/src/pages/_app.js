import * as React from 'react'
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import "../styles.css"

import Navbar from "../components/Navbar"
import InputBar from '../components/InputBar'




const defaultLayout = function getLayout(page) {
  return (
    <>
      <Navbar />
      {page}
    </>
  );
};
export default function App({ Component, Props }) {
  const getLayout = (Component.getLayout ?? defaultLayout)

  return (
    <>
      {getLayout(<Component {...Props} />)}
      < Head >
        <title>EtaMac</title>
      </Head >
      <CssBaseline />
    </>
  )
};



