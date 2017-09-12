import React, { Component } from 'react'
import ArticleCollection from './ArticleCollection';

class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      searchString: ""
    }
  this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    this.setState({searchString:e.target.value})
  }
  render(){

let items = this.props.articles
debugger
let searchString = this.state.searchString.trim().toLowerCase()

if(searchString.length>0){
  items = items.filter(function(i){
    return i.headline.toLowerCase().match(searchString)
  })
}

    return(
      <div>
                    <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />

                    <ul>

            {items}

                    </ul>

                </div>
    )
  }
}

export default Search
