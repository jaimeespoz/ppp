import { Fragment } from "react";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import "./style.scss";

export const BotonGenerico3 = ({ text, onClickHandler }) => {
  return (
    <Fragment>
      <Button
        fluid
        primary
        basic
        className="boton-generico3"
        onClick={onClickHandler}
      >
        {text}
      </Button>
    </Fragment>
  );
};

BotonGenerico3.propTypes = {
  text: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default BotonGenerico3;
