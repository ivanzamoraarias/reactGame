import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './Components/CardList';
import Form from './Components/Form';
import Particles from './Components/Particles'
import ImageCarrousel from './Components/ImageCarrousel'

class App extends Component {
  state={
    peopleArray : [
    
    {
        name:"Ivan Zamora Arias",
        avatar_url:"https://avatars2.githubusercontent.com/u/30245989?v=4",
        company:"IOET"
    },
    {
        name:"Merd Mansourifar", 
        avatar_url:"https://avatars0.githubusercontent.com/u/25105474?v=4", 
        company:"IOET"
    }
  ]
};
addNewCard = (cardInfo) => {
  console.log(cardInfo);
  this.setState(prevState => ({
    peopleArray: prevState.peopleArray.concat(cardInfo)
  }));
};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Warm Welcome to ReactGame by Ivan Zamora Arias</h1>
        </header>
        <p className="App-intro">
          Say Hello :D 
        </p>
        <Form class='formF' onSubmit={this.addNewCard}/>
        <CardList class= 'cardF' cards={this.state.peopleArray}/>
        <Particles />
        <ImageCarrousel />
        
      </div>
    );
  }
}

export default App;
