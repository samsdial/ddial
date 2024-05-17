import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from "react";
import { Link, To } from "react-router-dom";

const MoreInfoButton = (props: { to: To; className: any; text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
  return (
    <Link to={props.to} className={`more-link ${props.className}`}>
      {props.text}
      <FontAwesomeIcon
        icon={["fas", "long-arrow-alt-right"]}
        className="icon"
      />
    </Link>
  );
};

export default MoreInfoButton;