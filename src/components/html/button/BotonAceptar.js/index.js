import React, { Fragment } from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const BotonAceptar = ({ text, onClickHandler }) => {
	return (
		<Fragment>
			<Button
				fluid
				primary
				basic
				className="btn btn-sm btn-primary"
				onClick={onClickHandler}
			>
				{text}
			</Button>
		</Fragment>
	);
};

BotonAceptar.propTypes = {
	text: PropTypes.string.isRequired,
	onClickHandler: PropTypes.func.isRequired,
};

export default BotonAceptar;
