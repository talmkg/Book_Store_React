import { Nav, Navbar, Container, Button } from "react-bootstrap";
function navbar() {
  return (
    <>
      <br />
      <Navbar bg="dark">
        <Container className="d-flex">
          <Navbar.Brand href="#home" className="d-flex">
            <div className="d-flex">
              <h2 className="text-warning">锦筠</h2>

              <h2 className="text-light font-weight-bold d-flex">
                &nbsp;YummyBooks
                <h2 className="font-weight-bold" id="violet">
                  .net
                </h2>
              </h2>
            </div>
            <Container className="d-flex align-items-center mb-3">
              <div class="collapse navbar-collapse " id="navbarNavDropdown">
                <ul class="navbar-nav ">
                  <li class="nav-item active">
                    <a class="nav-link text-light" href="#" id="nav-item">
                      Genres <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#" id="nav-item">
                      Books
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#" id="nav-item">
                      Top 100
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#" id="nav-item">
                      Ongoings
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#" id="nav-item">
                      Random
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle text-light"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      id="nav-item"
                    >
                      About us
                    </a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </Container>
          </Navbar.Brand>
          <Nav.Item className="mb-3">
            <Button variant="info" id="profile">
              Profile
            </Button>
          </Nav.Item>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default navbar;
