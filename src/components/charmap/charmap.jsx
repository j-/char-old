import React from 'react';

export const CharmapCell = () => (
	<td className="charmap-cell">&times;</td>
);

export const CharmapRow = () => (
	<tr className="charmap-row">
	{
		Array(16).fill(null).map((_, i) => (
			<CharmapCell key={ i } />
		))
	}
	</tr>
);

export const CharmapRows = () => (
	<tbody className="charmap-body">
	{
		Array(16).fill(null).map((_, i) => (
			<CharmapRow key={ i } />
		))
	}
	</tbody>
);

const Charmap = () => {
	return (
		<table className="charmap">
			<CharmapRows />
		</table>
	);
};

export default Charmap;
