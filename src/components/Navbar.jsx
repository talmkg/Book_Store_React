import { Navbar, Container } from "react-bootstrap";
function navbar() {
  return (
    <>
      <br />
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <h2 className="text-warning">锦筠</h2>

            <h2 className="text-light font-weight-bold">
              &nbsp;YummyBooks.net
            </h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default navbar;
