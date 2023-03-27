import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

export const FileField = ({
	label,
	name,
	accept,
	onChange,
	touched,
	error,
	disabled = false,
}) => {
	return (
		<>
			<div className="choose_file">
				<Button primary disabled={disabled}>
					{' '}
					{label}
				</Button>
				<input
					id="file-upload"
					type="file"
					multiple
					name={name}
					accept={accept}
					className="inputfile"
					onChange={onChange}
					disabled={disabled}
				/>
			</div>
			<div className="invalid-feedback d-block">
				{touched && error ? error : null}
			</div>
		</>
	);
};

FileField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	touched: PropTypes.any,
	error: PropTypes.string,
	disabled: PropTypes.bool,
};
