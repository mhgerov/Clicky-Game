import React, { Component } from 'react';
import Title from './components/Title';


class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<Title/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
