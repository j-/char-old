import PageNavigation from './page-navigation';
import { connect } from 'react-redux';
import { prevPage, nextPage } from '../../reducers/actions';

const PageNavigationContainer = connect(
	null,
	{ prevPage, nextPage }
)(PageNavigation);

export default PageNavigationContainer;
