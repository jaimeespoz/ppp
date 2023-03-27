import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RenderHelpIcon from '../../Field/RenderHelpIcon';
import { Row, Container } from 'react-bootstrap';

export const TextAreaField = ({
	label,
	name,
	value,
	onChange,
	touched,
	error,
	placeholder,
	extra,
	rows = 10,
	cols,
	onBlur,
	maxLength = 4000,
	textoAyuda = '',
	placementAyuda = 'right',
	disabled = false,
	counter = -2,
}) => {
	const strLen = (cadena) => {
		alert(cadena);
		return cadena.length();
	};

	const howMuch = () => {
		let left = 4000;

		if (value != undefined) {
			alert(value);
			left = maxLength - strLen(value);
		}
		return left;
	};

	return (
		<Fragment>
			<Container>
				<Row style={{ display: 'inherit' }}>
					<label htmlFor={`${name}Id`}>{label}</label>

					{textoAyuda !== '' ? (
						<RenderHelpIcon contenido={textoAyuda} placement={placementAyuda} />
					) : null}
				</Row>

				<Row>
					<textarea
						name={name}
						value={value}
						onChange={onChange}
						className={
							touched && error ? 'form-control is-invalid' : 'form-control'
						}
						id={`${name}Id`}
						rows={rows}
						cols={cols}
						placeholder={placeholder}
						onBlur={onBlur}
						maxLength={maxLength ? maxLength : -1}
						disabled={disabled}
					></textarea>
					{counter > -1 && (
						<span
							style={{
								width: '100%',
								alignSelf: 'flex-end',
								textAlign: 'right',
								align: 'right',
							}}
						>
							{counter} de {maxLength} caracteres
						</span>
					)}
					{extra && <span className="form-extra">{extra}</span>}

					<div className="invalid-feedback d-block">
						{touched && error ? error : null}
					</div>
				</Row>
			</Container>
		</Fragment>
	);
};

TextAreaField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	touched: PropTypes.any,
	error: PropTypes.string,
	placeholder: PropTypes.string,
	extra: PropTypes.string,
	rows: PropTypes.string.isRequired,
	cols: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
};
