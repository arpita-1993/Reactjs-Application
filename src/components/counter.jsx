import React, { Component } from 'react';
class  Counter extends Component {
    state = {
        count:1,
        
    };
    handleIncrement = product =>{
        console.log(product);
       this.setState({count: this.state.count +1});
    };

    
    
 render() {
    return(
    <div>    
    <span className={this.grtBadgeClasses()}>{this.formatCount()}</span> )
    <button 
      onClick={() =>this.handleIncrement(product)} 
      className="btn btn-secondary btn-sm"
      >
          Increment
          </button>   
    </div>
       );
    } 
   grtBadgeClasses(){
       let classes = "badge m-2 badge-";
       classes += this.state.count === 0 ? "warning" : "primary";
       return classes;
   }
   formatCount(){ 

   }

}
 
export default Counter ;