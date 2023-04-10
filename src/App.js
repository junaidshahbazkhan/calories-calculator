import React, { useState } from "react";
import "./App.css";
import CaloriesCounter from "./components/ColoriesCounter";
import { Grid } from "@mantine/core";

const App = () => {
  return (
    <div className="App">
      <Grid>
        <Grid.Col span={4}></Grid.Col>
        <Grid.Col
          span={4}
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <CaloriesCounter />
        </Grid.Col>
        <Grid.Col span={4}></Grid.Col>
      </Grid>
    </div>
  );
};

export default App;
