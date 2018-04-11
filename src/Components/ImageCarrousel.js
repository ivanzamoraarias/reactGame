import React, { Component } from 'react';

const Image =(props) => {
    return(
        <img src={props.image}/>
        
    );
}

class ImageCarrousel extends Component{
    state={
        image1:"/Users/ivanzamora/Repositories/ReactGame/react-game-engine/src/img/zim1.png",
        image2:"./img/zim2.png",
    };
    render() {
        return(
        <div>
            <Image image= {this.state.image1} />
            <Image image= {this.state.image2} />
            {/* {props.cards.map(c => <Card key={card.key} {...card}/>)} */}
        </div>
        )
    }
}
export default ImageCarrousel;