import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getReporYear } from "../constants/api";
import { Format_Money } from "../helper/suport";
import { ThisYear } from "../helper/suport";
function ReportExpesesYear() {
  const User_id = localStorage.getItem("User_id");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = () => {
    getReporYear()
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  };
  return (
    <Container>
      {data.map(
        (item, index) =>
          (item._id === User_id || item._id === "") && (
            <Row key={index} className="report">
              <Col md={{ span: 6, offset: 3 }}>
                {`ລາຍຮັບປີ ${ThisYear()} : `} <Format_Money amount={item.Total_Inc} />
              </Col>
              <Col md={{ span: 6, offset: 3 }}>
                {`ລາຍຈ່າຍປິ ${ThisYear()} :`} <Format_Money amount={item.Total_Exp} />
              </Col>
              <Col md={{ span: 6, offset: 3 }}>
                {`ຍອດເງິນທີ່ຍັງເຫຼືອ : `}{" "}
                <Format_Money amount={item.Total_Inc - item.Total_Exp} />
              </Col>
            </Row>
          )
      )}
    </Container>
  );
}

export default ReportExpesesYear;
