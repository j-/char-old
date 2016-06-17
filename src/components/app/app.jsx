import React from 'react';
import AppSidebar from '../app-sidebar';
import {
	PageHeader,
	Grid,
	Row,
	Col,
} from 'react-bootstrap';

const HEADER_TEXT = 'Unicode Characters';
const HEADER_URL = 'https://en.wikipedia.org/wiki/Unicode';
const HEADER_TITLE = '\'Unicode\' on Wikipedia';

const App = () => (
	<div className="container">
		<PageHeader>
			<a href={ HEADER_URL } title={ HEADER_TITLE }>
				{ HEADER_TEXT }
			</a>
		</PageHeader>
		<Grid>
			<Row>
				<Col md={ 8 }>

				</Col>
				<Col md={ 4 }>
					<AppSidebar />
				</Col>
			</Row>
		</Grid>
	</div>
);

export default App;
