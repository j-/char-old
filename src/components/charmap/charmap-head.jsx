import React from 'react';
import CharmapLabel from './charmap-label';
import range from './range';

const CharmapHead = ({ cols }) => {
	const cells = range(cols, (i) => (
		<CharmapLabel
			key={ i }
			value={ i }
		/>
	));

	cells.unshift(
		<td className="charmap-empty" key={ -1 }></td>
	);

	return (
		<thead className="charmap-head">
			<tr>{ cells }</tr>
		</thead>
	);
};

export default CharmapHead;
