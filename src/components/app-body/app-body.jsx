import React from 'react';
import Charmap from '../charmap';
import PageNavigation from '../page-navigation';

const AppBody = () => (
	<div className="app-body">
		<PageNavigation />
		<Charmap />
		<PageNavigation />
	</div>
);

export default AppBody;
