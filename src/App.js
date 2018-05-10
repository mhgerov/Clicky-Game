import React, { Component } from 'react';
//import title from './components/index.js';

class title extends React.Component {
	render() {
		return (
			<h1>Hello, Friend!</h1>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div>
				<title />
				<p>This is some text</p>
			</div>
		);
	}
}

export default App;
