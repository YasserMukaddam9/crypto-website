import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Typography } from "antd";
import {
  Exchanges,
  CryptoDetails,
  Homepage,
  Cryptocurrencies,
} from "./components";
import "./App.css";
import "antd/dist/reset.css";

const App = () => {
  return (
    <div className="App">
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/coin/:uuid" element={<CryptoDetails />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Crypto App
            <br />
            All rights reserved
          </Typography.Title>
        </div>
      </div>
    </div>
  );
};

export default App;
