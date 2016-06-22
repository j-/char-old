import React from 'react';

const CharmapCell = ({ offset, setCodePoint, activeCodePoint }) => {
	const onClick = (e) => {
		e.preventDefault();
		setCodePoint(offset);
	};
	const classNames = ['charmap-char'];
	if (offset === activeCodePoint) {
		classNames.push('active');
	}
	const className = classNames.join(' ');
	const textContent = String.fromCodePoint(offset);
	return (
		<td className="charmap-cell">
			<a className={ className } href="#" onClick={ onClick }>
				<span className="charmap-char-wrapper">{ textContent }</span>
			</a>
		</td>
	);
};

export default CharmapCell;
