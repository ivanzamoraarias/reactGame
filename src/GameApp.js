import React, { Component } from 'react';
// import Button from './Components/Button';
// import Stars from './Components/Stars';
const Stars = (props)=>{
    return(
    <div className="col-5">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
    </div>
    );
}
const Button = (props)=>{
    return(
        <div className="col-2">
            <button>=</button>
        </div>
    );
}

const Answer = (props) => {
    return(
        <div className="col-5">
            ...
        </div>
    );
}

const Numbers = (props) => {
    return(
        <div className="card text-center">
            <div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
        </div>
    );
}
class GameApp extends Component{
    render() {
        return (
            <div className="container">
                <h3>Play Game</h3>
                <hr/>
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer />
                </div>
                <br />
                <div>
                    <Numbers />
                </div>
            </div>
        );
    }
}

export default GameApp;