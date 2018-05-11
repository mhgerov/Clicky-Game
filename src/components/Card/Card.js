import React,{Component} from 'react';
import './Card.css';

class Card extends Component {
	render() {
		return (
				<img className="card-img" src={this.props.src} alt="Card"/>
		);
	}
}

//Old src={require("../../public/placeholder-200x200.jpg")}
export default Card;
