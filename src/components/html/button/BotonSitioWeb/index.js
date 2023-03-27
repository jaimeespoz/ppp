import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import "./style.scss";

export const BotonSitioWeb = ({ text, className, onClickHandler }) => {
  return (
    <Button fluid primary basic className={className} onClick={onClickHandler}>
      {text}
    </Button>
  );
};

BotonSitioWeb.propTypes = {
  text: PropTypes.string.isRequired,
  //   className: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default BotonSitioWeb;
