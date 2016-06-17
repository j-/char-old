import App from './app';
import { connect } from 'react-redux';
import { getCodePoint } from '../../reducers';

const mapStateToProps = (state) => ({
	codePoint: getCodePoint(state),
});

const AppContainer = connect(
	mapStateToProps
)(App);

export default AppContainer;
