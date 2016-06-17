import App from './app';
import { connect } from 'react-redux';
import { getCodePoint, isCodePointValid } from '../../reducers';

const mapStateToProps = (state) => ({
	codePoint: getCodePoint(state),
	isValid: isCodePointValid(state),
});

const AppContainer = connect(
	mapStateToProps
)(App);

export default AppContainer;
