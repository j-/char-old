import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const PageNavigation = ({ prevPage, nextPage }) => (
	<ButtonGroup>
		<Button onClick={ prevPage }>&larr;</Button>
		<Button onClick={ nextPage }>&rarr;</Button>
	</ButtonGroup>
);

export default PageNavigation;
