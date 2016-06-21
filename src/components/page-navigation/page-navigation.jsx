import React from 'react';
import { Panel, ButtonGroup, Button } from 'react-bootstrap';

const PageNavigation = ({ prevPage, nextPage, isMinPage, isMaxPage }) => (
	<Panel>
		<ButtonGroup>
			<Button onClick={ prevPage } disabled={ isMinPage }>
				&larr; Previous page
			</Button>
			<Button onClick={ nextPage } disabled={ isMaxPage }>
				Next page &rarr;
			</Button>
		</ButtonGroup>
	</Panel>
);

export default PageNavigation;
