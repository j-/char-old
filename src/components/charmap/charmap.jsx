import React, { PropTypes } from 'react';

const handler = (callback, ...args) => (e) => {
	e.preventDefault();
	callback(...args);
};

export const CharmapCell = ({ offset, setCodePoint }) => (
	<td className="charmap-cell">
		<a
			className="charmap-char"
			href="#"
			onClick={ handler(setCodePoint, offset) }
		>
			<span className="charmap-char-wrapper">
				{ String.fromCodePoint(offset) }
			</span>
		</a>
	</td>
);

export const CharmapRow = ({ offset, cols, setCodePoint }) => (
	<tr className="charmap-row">
	{
		Array(cols).fill(null).map((_, i) => (
			<CharmapCell
				key={ i }
				offset={ offset + i }
				setCodePoint={ setCodePoint }
			/>
		))
	}
	</tr>
);

export const CharmapRows = ({ offset, rows, cols, setCodePoint }) => (
	<tbody className="charmap-body">
	{
		Array(rows).fill(null).map((_, i) => (
			<CharmapRow
				key={ i }
				offset={ offset + i * cols }
				cols={ cols }
				setCodePoint={ setCodePoint }
			/>
		))
	}
	</tbody>
);

const Charmap = ({ page, rows, cols, setCodePoint }) => {
	return (
		<table className="charmap">
			<CharmapRows
				offset={ page * rows * cols }
				rows={ rows }
				cols={ cols }
				setCodePoint={ setCodePoint }
			/>
		</table>
	);
};

Charmap.propTypes = {
	page: PropTypes.number,
	rows: PropTypes.number,
	cols: PropTypes.number,
	setCodePoint: PropTypes.func.isRequired,
};

Charmap.defaultProps = {
	page: 0,
	rows: 0x10,
	cols: 0x10,
};

export default Charmap;
