import React, { Component } from 'react';
import Title from './components/Title';
import Card from './components/Card';
import buffy from './public/buffy.jpg';


class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<Title/>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-8 d-flex flex-wrap justify-content-center">
						<Card
							src={buffy}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
