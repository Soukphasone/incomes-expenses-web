import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { apiLinks } from "../constants/api";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch(apiLinks.REPORT.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.accessToken;
        const user_id = data.data._id;
        const username = data.data.username;
        localStorage.setItem("Token", token);
        localStorage.setItem("User_id", user_id);
        localStorage.setItem("User_name", username);
        window.location = "/";
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
        <button className="bt-login" onClick={handleLogin}>
          ເຂົ້າສູ່ລະບົບ
        </button>{" "}
        <div
          style={{
            padding: "20px",
          }}
        >
          <Nav.Link href="signup">
            <p>ລົງທະບຽນ</p>
            <p style={{marginTop:"-35px", color:"red"}}>__________</p>
          </Nav.Link>
        </div>
      </Container>
    </div>
  );
};

export default Login;
