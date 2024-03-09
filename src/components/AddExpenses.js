import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { apiLinks } from "../constants/api";
function AddExpenses() {
  const [show, setShow] = useState(false);
  const [amount_expenses, setAmount_expenses] = useState("");
  const [description, setDescription] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit_Exp = async () => {
    try {
      const User_id = localStorage.getItem("User_id");
      const Token = localStorage.getItem("Token");
      const response = await axios.post(
        apiLinks.REPORT.REPORT_INC_EXP,
        {
          user_id: User_id,
          amount_incomes_exp: amount_expenses,
          description: description,
          type: "ລາຍຈ່າຍ",
        },
        {
          headers: {
            Authorization: `STORE ${Token}`, // Include token in the Authorization header
          },
        }
      );
      console.log("Sucess Create :", response);
      handleClose();
    } catch (error) {
      console.error("Error creating income:", error);
    }
  };

  return (
    <>
      <button className="bt-add" onClick={handleShow}>
        ເພີ່ມລາຍຈ່າຍ
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ເພີ່ມລາຍຈ່າຍປະຈຳວັນ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="ຈຳນວນເງິນ"
                required
                autoFocus
                value={amount_expenses}
                onChange={(e) => setAmount_expenses(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="ລາຍລະອຽດ"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ຍົກເລີກ
          </Button>
          <Button variant="primary" onClick={handleSubmit_Exp}>
            ບັນທຶກ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddExpenses;
