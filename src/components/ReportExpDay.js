import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getReportDay } from "../constants/api";
import { Format_Money } from "../helper/suport";
function ReportIn_exToday() {
  const User_id = localStorage.getItem("User_id");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchData = () => {
    getReportDay()
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  };
  const Report_Inc = () => {
    return data
      .filter((item) => item._id === User_id)
      .reduce((total, item) => (total = item.Total_Inc), 0);
  };
  const Report_Exp = () => {
    return data
      .filter((item) => item._id === User_id)
      .reduce((total, item) => (total = item.Total_Exp), 0);
  };
  return (
    <Container>
      <Row className="report">
        <Col md={{ span: 6, offset: 3 }}>
          {`ລາຍຮັບມື້ນີ້ : `}
          <Format_Money amount={Report_Inc()} />
        </Col>
        <Col md={{ span: 6, offset: 3 }}>
          {`ລາຍຈ່າຍມື້ນີ້ : `}
          <Format_Money amount={Report_Exp()} />
        </Col>
        <Col md={{ span: 6, offset: 3 }}>
          {`ຍອດເງິນທີ່ຍັງເຫຼືອ : `}
          <Format_Money amount={Report_Inc() - Report_Exp()} />
        </Col>
      </Row>
    </Container>
  );
}

export default ReportIn_exToday;
