import React, { PropTypes } from 'react';
import { types } from '../../conversion';
import { FormControl } from 'react-bootstrap';

const buildClassNames = (map) => (
	// Take the keys from this object
	Object.keys(map)
		// Only use keys whose value is truthy
		.filter((key) => map[key])
		// Concatenate keys
		.join(' ')
);

const ValueField = ({ input, isEditing, isValid, onUpdate }) => (
	<FormControl
		className={
			buildClassNames({
				'editing': isEditing,
				'not-editing': !isEditing,
				'valid': isValid,
				'invalid': !isValid,
			})
		}
		type="text"
		value={ input || '' }
		onChange={
			(e) => onUpdate(e.target.value)
		}
	/>
);

ValueField.propTypes = {
	type: PropTypes.oneOf(types),
	input: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	isEditing: PropTypes.bool,
	isValid: PropTypes.bool,
	onUpdate: PropTypes.func.isRequired,
};

ValueField.defaultProps = {
	isEditing: false,
	isValid: true,
};

export default ValueField;
