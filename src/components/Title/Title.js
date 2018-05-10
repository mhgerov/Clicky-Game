import React,{Component} from 'react';
import './Title.css';

class Title extends Component {
	render() {
		return (
			<div className="jumbotron text-center">
				<h1 className="display-4">Clicky Game!</h1>
				<h2>(Vampire Slayer Edition)</h2>
			</div>
		);
	}
}

export default Title;
