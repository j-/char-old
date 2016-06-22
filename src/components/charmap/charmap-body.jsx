import React from 'react';
import CharmapRow from './charmap-row';

const CharmapBody = ({ offset, rows, cols, setCodePoint, activeCodePoint }) => (
	<tbody className="charmap-body">
	{
		Array(rows).fill(null).map((_, i) => (
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
