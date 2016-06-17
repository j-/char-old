import React from 'react';
import Char from '../char';
import ValueFields from '../value-fields';
import { TYPE_CHAR } from '../../conversion';
import {
	PageHeader,
	Grid,
	Row,
	Col,
} from 'react-bootstrap';

const HEADER_TEXT = 'Unicode Characters';
const HEADER_URL = 'https://en.wikipedia.org/wiki/Unicode';
const HEADER_TITLE = '\'Unicode\' on Wikipedia';

const App = ({ codePoint, isValid }) => (
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
					<div className="char-display">
						<Char
							codePoint={ codePoint }
							isValid={ isValid }
							type={ TYPE_CHAR }
						/>
					</div>
					<hr />
					<ValueFields />
				</Col>
			</Row>
		</Grid>
	</div>
);

export default App;
