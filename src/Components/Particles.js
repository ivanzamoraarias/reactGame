import React, { Component } from 'react';
import styles from '../style/particles.css';
class Particles extends Component{
    render(){
        return(
            <div className="container">
  <div className="bubble-wrap">
  {Array.apply(null, Array(99)).map(function(item, i){                                        
                    return (
                      <div className="bubble"></div>
                    );                
                }, this)}   
</div>
</div>
        );
    }
};

export default Particles;