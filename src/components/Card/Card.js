import React,{Component} from 'react';
import './Card.css';

class Card extends Component {
	render() {
		return (
			<div className="card bg-dark">
				<img className="card-img" src={require("../../public/placeholder-200x200.jpg")} alt="Card"/>
			</div>
		);
	}
}

export default Card;
