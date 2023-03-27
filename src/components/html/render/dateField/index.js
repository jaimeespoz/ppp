import React, { Fragment } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
import MaskedTextInput from 'react-text-mask';
import PropTypes from 'prop-types';

function registerLocale(localeName, localeData) {
	if (!window.__localeData__) {
		window.__localeData__ = {};
	}
	window.__localeData__[localeName] = localeData;
}

export const DateField = ({
	label,
	name,
	value,
	onChange,
	touched,
	error,
	placeholder,
	disabled = false,
	startDate,
	minDate,
	maxDate,
	onBlur,
	onCalendarClose,
	onChangeRaw,
}) => {
	registerLocale('es', es);

	return (
		<Fragment>
			<label htmlFor={`${name}Id`}>{label}</label>
			<div className="datepicker">
				<DatePicker
					dateFormat="dd/MM/yyyy"
					locale="es"
					selected={Date.parse(value)}
					onChange={onChange}
					placeholderText={placeholder}
					id={`${name}Id`}
					className={
						touched && error ? 'form-control is-invalid' : 'form-control'
					}
					name={name}
					disabled={disabled}
					startDate={startDate}
					minDate={minDate ? minDate : ''}
					maxDate={maxDate ? maxDate : ''}
					autoComplete="off"
					color="#0f69b4"
					customInput={
						<MaskedTextInput
							mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
						/>
					}
					onBlur={onBlur}
					onCalendarClose={onCalendarClose}
					onChangeRaw={onChangeRaw}
				/>
				<div className="invalid-feedback d-block">
					{touched && error ? error : null}
				</div>
			</div>
		</Fragment>
	);
};

DateField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.any.isRequired,

	onChange: PropTypes.func.isRequired,
	touched: PropTypes.any,
	error: PropTypes.string,

	placeholder: PropTypes.string,
	disabled: PropTypes.bool.isRequired,

	startDate: PropTypes.instanceOf(Date),
	minDate: PropTypes.number,
	maxDate: PropTypes.instanceOf(Date),

	onBlur: PropTypes.func,
	onCalendarClose: PropTypes.func,
	onChangeRaw: PropTypes.func,
};
