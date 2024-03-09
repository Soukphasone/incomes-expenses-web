import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function AddNavbar() {
  const Username = localStorage.getItem("User_name");
  const handleLogout = () => {
    localStorage.removeItem("Token");
    window.location.reload();
  };
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ລາຍຮັບ - ລາຍຈ່າຍ
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/history">ປະຫວັດລາຍຮັບ - ລາຍຈ່າຍ</Nav.Link>
                  <div className="logout">
                  <button  className = "bt-logout" onClick={handleLogout}>ອອກຈາກລະບົບ</button>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="wel-user">{`~ ${Username}`}</div>
          
        </Navbar>
      ))}
    </>
  );
}

export default AddNavbar;
