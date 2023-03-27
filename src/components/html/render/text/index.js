import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const Text = ({
	label,
	name,
	value,
	touched,
	error,
	strong = false,
	ficha = true,
}) => {
	return (
		<Fragment>
			<label className={ficha ? 'label-ficha' : null}>{label} </label>
			<div
				name={name}
				style={{ color: '#0f69b4' }}
				className={
					strong
						? 'form-control-plaintext strong input-ficha'
						: 'form-control-plaintext input-ficha'
				}
				title={value}
			>
				{value}
			</div>
			<div className="invalid-feedback d-block">
				{touched && error ? error : null}
			</div>
		</Fragment>
	);
};

Text.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	touched: PropTypes.any,
	error: PropTypes.string,
	strong: PropTypes.string,
	ficha: PropTypes.bool,
};
