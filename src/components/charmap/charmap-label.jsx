import React from 'react';
import lpadZeroes from '../../lpad-zeroes';

const CharmapLabel = ({ value }) => {
	const label = lpadZeroes(value.toString(16), 4);
	return (
		<th className="charmap-label">{ label }</th>
	);
};

export default CharmapLabel;
