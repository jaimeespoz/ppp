import { Fragment } from "react";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import "./style.scss";

export const BotonGenerico = ({ text, className, onClickHandler }) => {
  return (
    <Fragment>
      <Button
        fluid
        primary
        basic
        className={className}
        onClick={onClickHandler}
      >
        {text}
      </Button>
    </Fragment>
  );
};

BotonGenerico.propTypes = {
  text: PropTypes.string.isRequired,
  // className: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default BotonGenerico;
