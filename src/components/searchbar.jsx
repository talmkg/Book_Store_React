import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
function Searchbar() {
  return (
    <>
      <InputGroup>
        <InputGroup.Text id="inputGroup-sizing-default">
          Search!
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
    </>
  );
}

export default Searchbar;
