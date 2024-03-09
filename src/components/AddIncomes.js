import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { apiLinks } from "../constants/api";
function AddIncomes() {
  const [show, setShow] = useState(false);
  const [amount_incomes, setAmount_incomes] = useState("");
  const [description, setDescription] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit_Ic = async () => {
    try {
      const User_id = localStorage.getItem("User_id");
      const Token = localStorage.getItem("Token");
      const response = await axios.post(
        apiLinks.REPORT.REPORT_INC_EXP,
        {
          user_id: User_id,
          amount_incomes_exp: amount_incomes,
          description: description,
          type: "ລາຍຮັບ",
        },
        {
          headers: {
            Authorization: `STORE ${Token}`,
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
        ເພີ່ມລາຍຮັບ
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ເພີ່ມລາຍຮັບປະຈຳວັນ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="ຈຳນວນເງິນ"
                required
                autoFocus
                value={amount_incomes}
                onChange={(e) => setAmount_incomes(e.target.value)}
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
          <Button variant="primary" onClick={handleSubmit_Ic}>
            ບັນທຶກ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddIncomes;
