import React, { PropTypes } from 'react';
import { types } from '../../conversion';

const ValueField = ({ input, onUpdate }) => (
	<input
		type="text"
		value={ input }
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
	onUpdate: PropTypes.func.isRequired,
};

export default ValueField;
