import React from 'react';
import CharPreview from '../char-preview';
import ValueFields from '../value-fields';

const AppSidebar = () => (
	<div className="app-sidebar">
		<CharPreview />
		<hr />
		<ValueFields />
	</div>
);

export default AppSidebar;
