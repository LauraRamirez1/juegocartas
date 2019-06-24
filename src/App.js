import React,{Component} from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Board from './components/Board';
import Deck from './Utils/Deck';
import './App.css';

const getStateStart =()=>{
  const builtDeck=Deck();
  return{
    builtDeck
  };
}
class App extends Component {
  constructor(props){
    super(props);
    this.state =getStateStart();
  }
  render(){
    return (
      <div className="App">
      <Header />
      <Board 
      builtDeck={this.state.builtDeck}
      />
      </div>
    );
  }
}
export default App;
