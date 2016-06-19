import React, { PropTypes } from 'react';

export const CharmapCell = ({ offset }) => (
	<td className="charmap-cell">
		{ String.fromCodePoint(offset) }
	</td>
);

export const CharmapRow = ({ offset, cols }) => (
	<tr className="charmap-row">
	{
		Array(cols).fill(null).map((_, i) => (
			<CharmapCell
				key={ i }
				offset={ offset + i }
			/>
		))
	}
	</tr>
);

export const CharmapRows = ({ offset, rows, cols }) => (
	<tbody className="charmap-body">
	{
		Array(rows).fill(null).map((_, i) => (
			<CharmapRow
				key={ i }
				offset={ offset + i * cols }
				cols={ cols }
			/>
		))
	}
	</tbody>
);

const Charmap = ({ page, rows, cols }) => {
	return (
		<table className="charmap">
			<CharmapRows
				offset={ page * rows * cols }
				rows={ rows }
				cols={ cols }
			/>
		</table>
	);
};

Charmap.propTypes = {
	page: PropTypes.number,
	rows: PropTypes.number,
	cols: PropTypes.number,
};

Charmap.defaultProps = {
	page: 0,
	rows: 0x10,
	cols: 0x10,
};

export default Charmap;
