import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { apiLinks } from "../constants/api";
import { Fomatdate } from "../helper/suport";
import numeral from "numeral";
function History() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const User_id = localStorage.getItem("User_id");
  useEffect(() => {
    fetch(
      `${apiLinks.REPORT.REPORT_INC_EXP}?description=${search}&type=${selectedValue}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [search, selectedValue]);
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div style={{ textAlign: "left", marginTop: "5px", width: "50px" }}>
        <Nav.Link href="/">
          <Image src="/arrow-left.png"></Image>
        </Nav.Link>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="ຄົ້ນຫາ..."
          className="search-input"
          value={search}
          onChange={handleChangeSearch}
        />
        <ul className="search-results"></ul>
      </div>
      <div className="search-container">
        <div>
          <select
            className="select"
            value={selectedValue}
            onChange={handleChange}
          >
            <option value="">ປະເພດ</option>
            <option value="ລາຍຮັບ">ລາຍຮັບ</option>
            <option value="ລາຍຈ່າຍ">ລາຍຈ່າຍ</option>
          </select>
        </div>
      </div>
      <Container>
        <br />
        <table >
          <thead>
            <tr>
              <th>ຈຳນວນເງິນ</th>
              <th>ລາຍລະອຽດ</th>
              <th>ປະເພດ</th>
              <th>ວັນທີ</th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              (item, index) =>
                item.user_id === User_id && (
                  <tr key={index}>
                    <td>{numeral(item.amount_incomes_exp).format(0, 0)}</td>
                    <td>{item.description}</td>
                    <td>{item.type}</td>
                    <td>
                      <Fomatdate mydate={item.date} />
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default History;
