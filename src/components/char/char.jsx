import React, { PropTypes } from 'react';
import {
	convertFromCodePoint,
	types,
	TYPE_CHAR,
} from '../../conversion';

const Char = ({ codePoint, type }) => (
	<span className="char">
		{ convertFromCodePoint(codePoint, type) }
	</span>
);

Char.propTypes = {
	codePoint: PropTypes.number.isRequired,
	type: PropTypes.oneOf(types),
};

Char.defaultProps = {
	type: TYPE_CHAR,
};

export default Char;
