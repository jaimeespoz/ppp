import React from 'react';
import { Button } from 'semantic-ui-react';
import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

const BotonGuardar = ({
	text,
	errors,
	setErrorForm,
	sinError,
	disableEnviar,
	showEnviarSpinner,
	callBack,
}) => {
	const validarForm = (errors) => {
		alert('VALIDAR FORM INNER');
		if (Object.keys(errors).length !== 0) {
			const error = {
				codigo: 'VAL',
				mensaje:
					'Existen errores de validación en los campos, por favor revise el formulario para arreglarlos.',
			};

			setErrorForm({
				status: true,
				errores: [error],
			});
		} else {
			setErrorForm(sinError);
		}
	};
	//onClick={()=>{validarForm(errors)}}

	return (
		<>
			<Button
				fluid
				primary
				type="submit"
				onClick={callBack}
				disabled={disableEnviar}
			>
				<Spinner
					className="spinner-btn"
					hidden={!showEnviarSpinner}
					as="span"
					animation="border"
					size="sm"
					role="status"
					aria-hidden="true"
				/>
				<span hidden={showEnviarSpinner}>{text}</span>
			</Button>
		</>
	);
};

BotonGuardar.propTypes = {
	text: PropTypes.string.isRequired,
	disableEnviar: PropTypes.bool,
	showEnviarSpinner: PropTypes.bool,
};

export default BotonGuardar;
