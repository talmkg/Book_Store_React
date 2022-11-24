import Alert from "react-bootstrap/Alert";

const WarningSign = function (props) {
  return (
    <Alert variant={props.variant} className="text-center" id="alert">
      Since 2020, we've raised more than{" "}
      <strong>&nbsp;$23 million&nbsp;</strong> for independent bookstores.
    </Alert>
  );
};
export default WarningSign;
