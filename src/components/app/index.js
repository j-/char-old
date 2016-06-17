import App from './app';
import { connect } from 'react-redux';
import { getCodePoint } from '../../reducers';
import { setCodePoint } from '../../reducers/actions';

const mapStateToProps = (state) => ({
	codePoint: getCodePoint(state),
});

const AppContainer = connect(
	mapStateToProps,
	{ setCodePoint }
)(App);

export default AppContainer;
