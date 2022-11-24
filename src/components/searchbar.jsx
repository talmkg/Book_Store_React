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
          aria-label="Search"
          aria-describedby="inputGroup-sizing-default"
          type="search"
          placeholder="Search for Books"
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
        />
      </InputGroup>
      <br />
    </>
  );
}

export default Searchbar;
