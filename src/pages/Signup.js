import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { apiLinks } from "../constants/api";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const Token = localStorage.getItem("Token");
  const handleSignup = async () => {
    try {
      const response = await fetch(apiLinks.REPORT.SIGNUP, {
        method: "POST",
        headers: {
          Authorization: `STORE ${Token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        window.location = "/login";
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
    }
  };

  return (
    <div className="login">
      <Container>
        <div className="logo-login">
          <Image
            style={{ height: "180px", width: "200px", padding: "20px 20px" }}
            src="/Login.png"
            roundedCircle
          />
        </div>
        <FloatingLabel
          controlId="floatingInput"
          label="ຊື່ຜູ້ໃຊ້"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="ຊື່ຜູ້ໃຊ້"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="ລະຫັດຜ່ານ"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="ລະຫັດຜ່ານ"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>
        {error && <p style={{ color: "red", padding: "10px 10px" }}>{error}</p>}
        <button className="bt-login" onClick={handleSignup}>
          ລົງທະບຽນເຂົ້າໃຊ້ງານ
        </button>{" "}
        <div
          style={{
            padding: "15px",
          }}
        >
          <Nav.Link href="/login">
            <p>ເຂົ້າສູ່ລະບົບ</p>
            <p style={{ marginTop: "-35px", color: "red" }}>_________</p>
          </Nav.Link>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
