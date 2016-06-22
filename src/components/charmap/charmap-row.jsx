import React from 'react';
import CharmapCell from './charmap-cell';
import range from './range';

const CharmapRow = ({ offset, cols, setCodePoint, activeCodePoint }) => (
	<tr className="charmap-row">
	{
		range(cols, (i) => (
			<CharmapCell
				key={ i }
				offset={ offset + i }
				setCodePoint={ setCodePoint }
				activeCodePoint={ activeCodePoint }
			/>
		))
	}
	</tr>
);

export default CharmapRow;
