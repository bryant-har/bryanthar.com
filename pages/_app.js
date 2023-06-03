import Navbar from "../components/Navbar"
import Drawer from "../components/Drawer"
import { Draw } from "@mui/icons-material";
import * as React from 'react'
const a = 2;
function id(a) {
  return a
}

export default function App() {
  return (
    <React.Fragment>
      <Drawer />
      <Navbar />
    </React.Fragment>
  );
};