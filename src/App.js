import React from 'react';
import { HashRouter } from "react-router-dom";
import './App.scss';
import CommunityBridge from "./CommunityBridge";


function App() {
	return (
		<div className="App">
			<HashRouter>
				<CommunityBridge/>
			</HashRouter>
		</div>
	);
}

export default App;