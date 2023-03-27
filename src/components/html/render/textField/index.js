import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RenderHelpIcon from '../../Field/RenderHelpIcon';
import { Row, Container } from 'react-bootstrap';

export const TextField = ({
	label,
	name,
	value,
	onChange,
	onBlur,
	touched,
	error,
	placeholder,
	isLoading = false,
	type,
	maxlength,
	min,
	max,
	disabled,
	pattern,
	extra,
	width = '-1',
	size,
	textoAyuda = '',
	placementAyuda = 'right',
}) => {
	const displayLabel = textoAyuda !== '' ? 'inline' : null;

	const onFocus = (event) => {
		//alert("onFocus");
		if (event.target.autocomplete) {
			event.target.autocomplete = 'whatever';
		}
	};

	return (
		<Fragment>
			<Container>
				{label ? (
					<Row style={{ display: displayLabel }}>
						<label htmlFor={`${name}Id`}>{label}</label>
						{textoAyuda !== '' ? (
							<RenderHelpIcon
								contenido={textoAyuda}
								placement={placementAyuda}
							/>
						) : null}
					</Row>
				) : null}

				<Row>
					<input
						type="text"
						name={'addressXX ' + Math.random()}
						value=""
						readOnly={true}
						style={{ display: 'none' }}
					/>
					<input
						name={'addressXX ' + Math.random()}
						type={`${type ? type : 'text'}`}
						value={value}
						onChange={onChange}
						className={
							touched && error ? 'form-control is-invalid' : 'form-control'
						}
						disabled={disabled || isLoading}
						style={{ width: `${width}` }}
						size={size}
						id={`${name}Id`}
						maxLength={maxlength ? maxlength : -1}
						placeholder={placeholder}
						min={min ? min : ''}
						max={max ? max : ''}
						pattern={pattern}
						autoComplete="new-password"
						onBlur={onBlur}
						onFocus={(event) => {
							event.target.setAttribute('autoComplete', 'off');
							console.log(event.target.autocomplete);
						}}
					/>
					{extra && <span className="form-extra">{extra}</span>}

					<div className="invalid-feedback d-block">
						{touched && error ? error : null}
					</div>
				</Row>
			</Container>
		</Fragment>
	);
};

TextField.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	touched: PropTypes.any,
	error: PropTypes.string,
	placeholder: PropTypes.string,
	isLoading: PropTypes.bool,
	type: PropTypes.string,
	maxlength: PropTypes.string,
	min: PropTypes.string,
	max: PropTypes.string,
	disabled: PropTypes.bool,
	pattern: PropTypes.string,
	extra: PropTypes.string,
};
