import React from 'react';
import ValueField from '../value-field';
import {
	TYPE_CHAR,
	TYPE_UNICODE,
	TYPE_HEXADECIMAL,
	TYPE_DECIMAL,
	TYPE_OCTAL,
	TYPE_BINARY,
	TYPE_CSS,
	TYPE_JSLONG,
	TYPE_JSSHORT,
	TYPE_HTMLDECIMAL,
	TYPE_HTMLHEXADECIMAL,
	TYPE_HTMLNAMED,
} from '../../conversion';

const ValueFields = () => (
	<ul className="list-unstyled">
		<li>
			<label>Character</label>
			<ValueField type={ TYPE_CHAR } />
		</li>
		<li>
			<label>Unicode</label>
			<ValueField type={ TYPE_UNICODE } />
		</li>
		<li>
			<label>Hexadecimal</label>
			<ValueField type={ TYPE_HEXADECIMAL } />
		</li>
		<li>
			<label>Decimal</label>
			<ValueField type={ TYPE_DECIMAL } />
		</li>
		<li>
			<label>Octal</label>
			<ValueField type={ TYPE_OCTAL } />
		</li>
		<li>
			<label>Binary</label>
			<ValueField type={ TYPE_BINARY } />
		</li>
		<li>
			<label>CSS</label>
			<ValueField type={ TYPE_CSS } />
		</li>
		<li>
			<label>JS (long)</label>
			<ValueField type={ TYPE_JSLONG } />
		</li>
		<li>
			<label>JS (short)</label>
			<ValueField type={ TYPE_JSSHORT } />
		</li>
		<li>
			<label>HTML (decimal)</label>
			<ValueField type={ TYPE_HTMLDECIMAL } />
		</li>
		<li>
			<label>HTML (hexadecimal)</label>
			<ValueField type={ TYPE_HTMLHEXADECIMAL } />
		</li>
		<li>
			<label>HTML (named)</label>
			<ValueField type={ TYPE_HTMLNAMED } />
		</li>
	</ul>
);

export default ValueFields;
