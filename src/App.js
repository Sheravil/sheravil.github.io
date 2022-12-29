import React from "react";

import HiThere from "./components/HiThere";
import Navbar from "./components/Navbar";
import AbautMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";

export default function App() {
  return (
    <>
      <Navbar />
      <HiThere />
      <AbautMe />
      <MyProjects />
    </>
  );
}
