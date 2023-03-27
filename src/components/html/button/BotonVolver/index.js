import React, { Fragment } from 'react';
import { Button } from 'semantic-ui-react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const BotonVolver = ({ text, onClickHandler }) => {
	return (
		<Fragment>
			<Button fluid primary basic onClick={onClickHandler}>
				<FontAwesomeIcon icon={faChevronLeft} /> {text}
			</Button>
		</Fragment>
	);
};

BotonVolver.propTypes = {
	text: PropTypes.string.isRequired,
	onClickHandler: PropTypes.func.isRequired,
};

export default BotonVolver;
