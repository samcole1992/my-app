import React, { Component } from 'react'
import './Option.css';

class Option extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){

    let handleGenreSelect =()=>{
      this.props.handleGenreSelect(this.props.value)
    }
    return(
      <div>
      <span className="item" onClick= {handleGenreSelect}>{this.props.value}</span>
</div>
    )
  }
}

export default Option
