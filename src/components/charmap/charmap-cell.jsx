import React from 'react';
import acronyms from '../../data/acronyms';
import classNames from 'classnames';

const CharmapCell = ({ offset, setCodePoint, activeCodePoint }) => {
	const onClick = (e) => {
		e.preventDefault();
		setCodePoint(offset);
	};
	const isActive = offset === activeCodePoint;
	const showAcronym = offset in acronyms;
	const textContent = showAcronym ?
		acronyms[offset] :
		String.fromCodePoint(offset);
	return (
		<td className={
			classNames('charmap-cell', isActive && 'active', showAcronym && 'acronym')
		}>
			<a className="charmap-char" href="#" onClick={ onClick }>
				<span className="charmap-char-wrapper">{ textContent }</span>
			</a>
		</td>
	);
};

export default CharmapCell;
