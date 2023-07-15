import React from "react";
import "./App.css";
import { Button } from "@mui/material";
import useCouter from "./custom-hooks/couter";

function App() {
  const count = useCouter(2,500)
  const count1 = useCouter(1,1000)

  return (
    <>
    <h1>{count}</h1>
    <h2>{count1}</h2>
      <Button variant="contained">First Button</Button>;
    </>
  );
}

export default App;

// advance fun => custom hooks
