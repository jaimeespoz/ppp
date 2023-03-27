import React from 'react';
import PropTypes from 'prop-types';

export const RadioField = ({
	label,
	name,
	value,
	checked,
	touched,
	error,
	onChange,
	disabled = false,
}) => {
	return (
		<>
			<div className="checkbox-midt__check" style={{ padding: '10px' }}>
				<span> {label} </span>
				<input
					type="radio"
					name={name}
					value={value}
					onChange={onChange}
					checked={checked}
					disabled={disabled}
				/>
			</div>

			<div className="invalid-feedback d-block">
				{touched && error ? error : null}
			</div>
		</>
	);
};

RadioField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	checked: PropTypes.bool,
	touched: PropTypes.any,
	error: PropTypes.string,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
};
