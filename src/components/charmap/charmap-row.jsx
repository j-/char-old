import React from 'react';
import CharmapCell from './charmap-cell';
import CharmapLabel from './charmap-label';
import range from './range';

const CharmapRow = ({ offset, cols, setCodePoint, activeCodePoint }) => {
	const cells = range(cols, (i) => (
		<CharmapCell
			key={ i }
			offset={ offset + i }
			setCodePoint={ setCodePoint }
			activeCodePoint={ activeCodePoint }
		/>
	));
	return (
		<tr className="charmap-row">
			<CharmapLabel value={ offset } />
			{ cells }
		</tr>
	);
};

export default CharmapRow;
