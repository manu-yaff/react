import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import Output from './components/UI/Output';

import './App.css';

function App() {
	const [showParagraph, setShowParagraph] = useState();
	const [allowToggle, setAllowToggle] = useState(false);

	const toggleParagraphHandler = useCallback(() => {
		if (allowToggle) {
			setShowParagraph((prevShow) => !prevShow);
		}
	}, [allowToggle]);

	const allowToggleHandler = () => {
		setAllowToggle(true);
	};

	return (
		<div className="app">
			<h1>Hi there!</h1>
			{showParagraph && <p>This is new!</p>}
			<Output show={false} />
			<Button onClick={allowToggleHandler}>Allow toggle</Button>
			<Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
		</div>
	);
}

export default App;
