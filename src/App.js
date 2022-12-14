import React from "react";
import "./App.css";
import { Cards } from "./Compenents/Cards/Cards";
import Carouselhome from "./Compenents/Carousel/Carousel";
import Navbarhome from "./Compenents/Navbar/Navbar.jsx";
import { MantineProvider } from "@mantine/core";
import Login from "./Login";

function App() {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Navbarhome />
        <Carouselhome />
        {/* <Cards /> */}
        <Login/>
      </MantineProvider>
    </>
  );
}

export default App;
