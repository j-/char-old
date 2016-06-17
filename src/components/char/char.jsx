import React, { PropTypes } from 'react';
import {
	convertFromCodePoint,
	types,
	TYPE_CHAR,
} from '../../conversion';

const Char = ({ isValid, codePoint, type }) => (
	<span className="char">
		{ isValid && convertFromCodePoint(codePoint, type) }
	</span>
);

Char.propTypes = {
	isValid: PropTypes.bool,
	codePoint: PropTypes.number.isRequired,
	type: PropTypes.oneOf(types),
};

Char.defaultProps = {
	isValid: true,
	type: TYPE_CHAR,
};

export default Char;
