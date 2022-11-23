import { Badge } from "react-bootstrap";
const MyBadge = function (props) {
  return <Badge variant={props.bg}>{props.text}</Badge>;
};
export default MyBadge;
