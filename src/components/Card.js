import React,{Component} from 'react';
import './style/Card.css'

export default class Card extends Component {
    render(){
        return(
            <div className="card">
            <i className={`fa ${this.props.icon} fa-2x`}></i>
            <p>{this.props.number}</p>
            </div> 
        );
    }
}