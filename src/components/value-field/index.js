import ValueField from './value-field';
import { connect } from 'react-redux';
import { getInputValue } from '../../reducers';
import { setInputValue } from '../../reducers/actions';

const mapStateToProps = (state, { type }) => ({
	value: getInputValue(state, type),
	type,
});

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
