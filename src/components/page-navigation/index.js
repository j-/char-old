import PageNavigation from './page-navigation';
import { connect } from 'react-redux';
import { isMinPage, isMaxPage } from '../../reducers';
import { prevPage, nextPage } from '../../reducers/actions';

const mapStateToProps = (state) => ({
	isMinPage: isMinPage(state),
	isMaxPage: isMaxPage(state),
});

const PageNavigationContainer = connect(
	mapStateToProps,
	{ prevPage, nextPage }
)(PageNavigation);

export default PageNavigationContainer;
