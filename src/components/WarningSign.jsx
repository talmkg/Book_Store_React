import Alert from "react-bootstrap/Alert";

const WarningSign = function (props) {
  return (
    <Alert variant={props.variant} className="text-center">
      Warning! You're too cute, stop smiling.
    </Alert>
  );
};
export default WarningSign;
