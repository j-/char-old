import React from 'react';
import { Panel, ButtonGroup, Button } from 'react-bootstrap';

const PageNavigation = ({ prevPage, nextPage }) => (
	<Panel>
		<ButtonGroup>
			<Button onClick={ prevPage }>
				&larr; Previous page
			</Button>
			<Button onClick={ nextPage }>
				Next page &rarr;
			</Button>
		</ButtonGroup>
	</Panel>
);

export default PageNavigation;
