import ValueField from './value-field';
import { connect } from 'react-redux';
import { setInputValue } from '../../reducers/actions';
import { convertFromCodePoint } from '../../conversion';

import {
	getCodePoint,
	getInputValue,
	getLastModified,
} from '../../reducers';

const mapStateToProps = (state, { type }) => {
	const codePoint = getCodePoint(state);
	const lastModified = getLastModified(state);
	const isEditing = lastModified === type;
	const input = isEditing ?
		// While editing, do not switch out the user's input
		getInputValue(state, type) :
		// Allow other fields to update as they type
		convertFromCodePoint(codePoint, type);
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
