import React, { Component } from 'react'
import Article from './Article'

class ArticleCollection extends Component {
  constructor(props){
    super(props);
    this.state={
      articles : [],
      key :'566e8cfd64b54d3090c52608feed19ed',
      selectedArticleId: null
    }
    this.handleArticleSelect = this.handleArticleSelect.bind(this);

  }
  handleArticleSelect(id,url){
    this.setState({selectedArticleId:id})
    console.log(this.state.selectedArticleId)
    window.open(url);

  }
  componentWillMount(){

    // http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=####
    fetch(`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&fq=news_desk:(${this.props.genre})&sort=newest&api-key=566e8cfd64b54d3090c52608feed19ed`,{
  })
  .then(response => {
  if (response.ok) {
    return response;
  }
  else {
    let errorMessage = `${response.status}, (${response.statusText})`;
    let error = new Error(errorMessage);
    throw(error);
  }
  })
  .then(response => response.json())
  .then(response=> {

  this.setState({
    articles: response.response.docs
  })
  }).catch(error=> console.error(`Error in fetch: ${error.message}`))
    }

    componentDidUpdate(){

      // http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=####
      fetch(`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&fq=news_desk:(${this.props.genre})&sort=newest&api-key=566e8cfd64b54d3090c52608feed19ed`,{
    })
    .then(response => {
    if (response.ok) {
      return response;
    }
    else {
      let errorMessage = `${response.status}, (${response.statusText})`;
      let error = new Error(errorMessage);
      throw(error);
    }
    })
    .then(response => response.json())
    .then(response=> {

    this.setState({
      articles: response.response.docs
    })
    }).catch(error=> console.error(`Error in fetch: ${error.message}`))
      }

  render(){
    let articles
    if (this.state.articles) {

    articles = this.state.articles.map(article=>{
      let className;
      if (this.props.selectedArticleId===article.id){
        className="selected";
      }
      let handleArticleSelect = ()=>{
        this.handleArticleSelect(article._id, article.web_url);
      }

    return(
      <Article
      key = {article._id}
      id = {article._id}
      url = {article.web_url}
      date = {article.pub_date}
      source = {article.source}
      headline = {article.headline.main}
      className={className}
      handleArticleSelect={handleArticleSelect}
      />
    )
    })
  }
    return(
      <ul>{articles}</ul>
    )
  }
}

export default ArticleCollection
