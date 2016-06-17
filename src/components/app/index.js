import App from './app';
import { connect } from 'react-redux';
import { getCodePoint, isCodePointValid } from '../../reducers';
import { setCodePoint } from '../../reducers/actions';

const mapStateToProps = (state) => ({
	codePoint: getCodePoint(state),
	isValid: isCodePointValid(state),
});

const AppContainer = connect(
	mapStateToProps,
	{ setCodePoint }
)(App);

export default AppContainer;
