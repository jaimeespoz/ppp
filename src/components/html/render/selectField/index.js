import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const SelectField = ({
	label,
	name,
	value,
	classStyle,
	onChange,
	disabled,
	touched,
	error,
	options,
	textDefault,
}) => {
	return (
		<Fragment>
			<label htmlFor={`${name}Id`}>{label}</label>
			<select
				name={name}
				value={value}
				className={`form-control ${classStyle} ${
					touched && error ? 'is-invalid' : ''
				}`}
				onChange={onChange}
				disabled={disabled}
				id={`${name}Id`}
			>
				<option key={0} value="" disabled>
					{textDefault}
				</option>

				{options.length
					? options.map((option) => {
							return (
								<option key={option.id} value={option.id}>
									{option.name}
								</option>
							);
					  })
					: null}
			</select>

			<div className="invalid-feedback d-block">
				{touched && error ? error : null}
			</div>
		</Fragment>
	);
};

SelectField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	classStyle: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	touched: PropTypes.any,
	error: PropTypes.string,
	options: PropTypes.array.isRequired,
	textDefault: PropTypes.string.isRequired,
};
