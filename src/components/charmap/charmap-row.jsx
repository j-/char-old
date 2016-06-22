import React from 'react';
import CharmapCell from './charmap-cell';

const CharmapRow = ({ offset, cols, setCodePoint, activeCodePoint }) => (
	<tr className="charmap-row">
	{
		Array(cols).fill(null).map((_, i) => (
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
