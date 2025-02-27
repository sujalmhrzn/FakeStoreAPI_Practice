import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import UserDetail from "./components/UserDetail";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/users" element={<App />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
