import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleCollection from './ArticleCollection';
import Option from './Option'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      genre: 'World'
    }
    this.handleGenreSelect = this.handleGenreSelect.bind(this)
  }

handleGenreSelect(type){
  this.setState({genre:type})
  console.log(this.state.genre)
}

  render() {

    let options = this.props.options.map(option=>{

      let handleGenreSelect =()=>{
        this.handleGenreSelect(option)
      }
let index = this.props.options.indexOf(option)
      return(
        <Option
        key = {index}
        value = {option}
        handleGenreSelect = {this.handleGenreSelect}
        />
      )
    })

    return (
      <div className="App">
        <div className="App-header">
        <ul className = "list">{options}</ul>
        </div>
        <div>
        <ArticleCollection
          genre = {this.state.genre}
        />
        </div>
      </div>
    );
  }
}

export default App;
