import React,{Component} from 'react';
import './style/Board.css';
import Card from './Card';

export default class Board extends Component {
    render(){
        return(
            <div className="board">
            {
                this.props.builtDeck
            .map((element)=> <Card icon= {element.icon} number={element.number} />)
            }
            </div> 
        );
    }
}