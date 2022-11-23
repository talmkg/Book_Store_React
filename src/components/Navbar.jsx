import { Navbar, Container, Button } from "react-bootstrap";
function navbar() {
  return (
    <>
      <br />
      <Navbar bg="dark">
        <Container className="d-flex">
          <Navbar.Brand href="#home" className="d-flex">
            <h2 className="text-warning">锦筠</h2>

            <h2 className="text-light font-weight-bold">
              &nbsp;YummyBooks.net
            </h2>
          </Navbar.Brand>

          <div>
            <Button variant="info ">Profile</Button>
          </div>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default navbar;
