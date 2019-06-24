import React,{Component} from 'react';
import './style/Header.css'

export default class Header extends Component {
    render(){
        return(
            <header>
                <div className="title"> JUEGO CARTAS </div>
                <div>
                    <button className="restart"> Reiniciar</button>
                </div>
                <div className="title"> Intentos: </div>
            </header>
        );
    }
}