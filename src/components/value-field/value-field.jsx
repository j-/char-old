import React, { PropTypes } from 'react';
import { types } from '../../conversion';

const ValueField = ({ input, isEditing, onUpdate }) => (
	<input
		className={ isEditing ? 'editing' : null }
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
	onUpdate: PropTypes.func.isRequired,
};

ValueField.defaultProps = {
	isEditing: false,
};

export default ValueField;
