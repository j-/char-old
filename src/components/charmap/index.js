import Charmap from './charmap';
import { connect } from 'react-redux';
import { getCurrentPage } from '../../reducers';

const mapStateToProps = (state) => ({
	page: getCurrentPage(state),
});

const CharmapContainer = connect(
	mapStateToProps
)(Charmap);

export default CharmapContainer;
