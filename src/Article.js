import React, { Component } from 'react'
import './Article.css';

class Article extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    return(
      <div className = 'article'>
      <div className={this.props.className} onClick= {this.props.handleArticleSelect}>{this.props.headline}</div>
</div>
    )
  }
}

export default Article
