import React, { PropTypes } from 'react';

const handler = (callback, ...args) => (e) => {
	e.preventDefault();
	callback(...args);
};

export const CharmapCell = ({ offset, setCodePoint, activeCodePoint }) => (
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

export const CharmapRow = ({ offset, cols, setCodePoint, activeCodePoint }) => (
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

export const CharmapRows = ({ offset, rows, cols, setCodePoint, activeCodePoint }) => (
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

const Charmap = ({ page, rows, cols, setCodePoint, activeCodePoint }) => {
	return (
		<table className="charmap">
			<CharmapRows
				offset={ page * rows * cols }
				rows={ rows }
				cols={ cols }
				setCodePoint={ setCodePoint }
				activeCodePoint={ activeCodePoint }
			/>
		</table>
	);
};

Charmap.propTypes = {
	page: PropTypes.number,
	rows: PropTypes.number,
	cols: PropTypes.number,
	activeCodePoint: PropTypes.number,
	setCodePoint: PropTypes.func.isRequired,
};

Charmap.defaultProps = {
	page: 0,
	rows: 0x10,
	cols: 0x10,
};

export default Charmap;
