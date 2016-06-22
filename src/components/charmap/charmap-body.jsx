import React from 'react';
import CharmapRow from './charmap-row';
import range from './range';

const CharmapBody = ({ offset, rows, cols, setCodePoint, activeCodePoint }) => (
	<tbody className="charmap-body">
	{
		range(rows, (i) => (
			<CharmapRow
				key={ i }
				offset={ offset + i * cols }
				cols={ cols }
				setCodePoint={ setCodePoint }
				activeCodePoint={ activeCodePoint }
			/>
		))
	}
	</tbody>
);

export default CharmapBody;
