import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import "./index.css";
import HomePage from "./pages/HomPage";
import Login from "./pages/Login";
import History from "./pages/HistoryInc_Exp";
function App() {
  const Token = localStorage.getItem("Token");
  return (
    <Router>
      <Header />
      <Container style={{ justifyContent: "center", textAlign: "center" }}>
        <Routes>
          {Token && <Route path="/" exact element={<HomePage />}/> }
          {Token && <Route path="/history" exact element={<History />}/> }
          <Route path="/login" exact element={<Login />} />
          <Route
            path="/"
            exact
            element={<Navigate replace to="/login" />}
          ></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
