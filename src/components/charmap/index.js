import Charmap from './charmap';
import { connect } from 'react-redux';
import { getCurrentPage } from '../../reducers';
import { setCodePoint } from '../../reducers/actions';

const mapStateToProps = (state) => ({
	page: getCurrentPage(state),
});

const CharmapContainer = connect(
	mapStateToProps,
	{ setCodePoint }
)(Charmap);

export default CharmapContainer;
