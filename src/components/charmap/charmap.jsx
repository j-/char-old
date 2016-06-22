import React, { PropTypes } from 'react';
import CharmapBody from './charmap-body';

const Charmap = ({ page, rows, cols, setCodePoint, activeCodePoint }) => {
	return (
		<table className="charmap">
			<CharmapBody
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
