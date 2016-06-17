import ValueField from './value-field';
import { connect } from 'react-redux';
import { setInputValue } from '../../reducers/actions';
import { convertFromCodePoint } from '../../conversion';

import {
	getCodePoint,
	getInputValue,
	getLastModified,
	isCodePointValid,
} from '../../reducers';

const mapStateToProps = (state, { type }) => {
	const codePoint = getCodePoint(state);
	const lastModified = getLastModified(state);
	const isValid = isCodePointValid(state);
	const isEditing = lastModified === type;
	let input;
	if (isEditing) {
		// While editing, do not switch out the user's input
		input = getInputValue(state, type);
	} else if (isValid) {
		// Allow other fields to update as they type
		input = convertFromCodePoint(codePoint, type);
	} else {
		// Do not show any value for invalid code points
		input = '';
	}
	return {
		input,
		isEditing,
		type,
	};
};

const mapDispatchToProps = (dispatch, { type }) => ({
	onUpdate: (value) => dispatch(
		setInputValue(type, value)
	),
});

const ValueFieldContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ValueField);

export default ValueFieldContainer;
