import React, { Component } from 'react';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleArticle = this.toggleArticle.bind(this);
  }

  toggleArticle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let article = this.state.isOpen ? <article>{this.props.article.text}</article> : null;
    // let commentList = ;
    let buttonText = this.state.isOpen ? "Close" : "Open";
    return (
      <div className="article">
        <h2>{this.props.article.title}</h2>
        <button className="btn btn-sm btn-primary" onClick={this.toggleArticle}>{buttonText}</button>
        {article}
      </div>
    );
  }
}