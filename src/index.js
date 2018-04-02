import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameApp from './GameApp';
import App from './App';
import CardList from './Components/CardList';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


let switchVariable = 1;
if(switchVariable === 1)
{   
    console.log('Rendering the first App');
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
}
else{
    console.log('Rendering the Game App');
    ReactDOM.render(<GameApp />, document.getElementById('root'));
    registerServiceWorker();
}

