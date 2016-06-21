import Charmap from './charmap';
import { connect } from 'react-redux';
import { setCodePoint } from '../../reducers/actions';

import {
	getCurrentPage,
	getCharmapWidth,
	getCharmapHeight,
	getCodePoint,
} from '../../reducers';

const mapStateToProps = (state) => ({
	page: getCurrentPage(state),
	cols: getCharmapWidth(state),
	rows: getCharmapHeight(state),
	activeCodePoint: getCodePoint(state),
});

const CharmapContainer = connect(
	mapStateToProps,
	{ setCodePoint }
)(Charmap);

export default CharmapContainer;
