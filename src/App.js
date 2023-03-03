import React, { Component } from "react";
import './assets/style.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      number : 0,
      button : 'Iniciar'
    };
    this.vai = this.vai.bind(this);
    this.zerar = this.zerar.bind(this);
  }
  vai(){
    let state = this.state;
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.button = 'Iniciar';
    }else{
      this.timer = setInterval( () => {
        let state = this.state;
        state.number += 0.1;
        this.setState(state);
      }, 100)
        state.button = 'Pausar';
    }
    this.setState(state);
    
  }
  zerar(){

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null
    }
    let state = this.state;
    state.number = 0;
    state.button = 'Iniciar';
    this.setState(state);

  }

  render(){
    return(
      <div className="container">
        <img src={require('./assets/cronometro.png')} className="imgRelogio"/>
        <h1 className="txtTempo">{this.state.number.toFixed(1)}</h1>
        <div className="areabtn">
          <a className="botao" onClick={this.vai}>{this.state.button}</a>
          <a className="botao" onClick={this.zerar}>Zerar</a>
        </div>
        
      </div>
    );
  }
}
export default App;