import React from 'react';

const handler = (callback, ...args) => (e) => {
	e.preventDefault();
	callback(...args);
};

const CharmapCell = ({ offset, setCodePoint, activeCodePoint }) => (
	<td className="charmap-cell">
		<a
			className={ 'charmap-char ' + (offset === activeCodePoint ? 'active' : '') }
			href="#"
			onClick={ handler(setCodePoint, offset) }
		>
			<span className="charmap-char-wrapper">
				{ String.fromCodePoint(offset) }
			</span>
		</a>
	</td>
);

export default CharmapCell;
