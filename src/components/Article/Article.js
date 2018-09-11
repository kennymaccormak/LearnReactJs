import React, { Component } from 'react';
import CommentList from './CommentList';

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenComments: false
    };

    // this.toggleArticle = this.toggleArticle.bind(this);
  }

  /*toggleArticle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }*/

  toggleComments = () => {
    this.setState({
      isOpenComments: !this.state.isOpenComments
    });
  };

  componentWillReceiveProps(nextProps) {
    console.log(`nextProps: ${nextProps}, this.props: ${this.props}`);
  }

  componentWillMount() {
    console.log("will");
  }

  componentDidMount() {
    console.log("did");
  }

  setContainerRef = (ref) => {
    this.container = ref;
  };

  render() {
    console.log("render");
    let commentList =
      this.state.isOpenComments && this.props.article.comments
        ? <CommentList comments={this.props.article.comments}/>
        : null;

    let commentButtonText = this.state.isOpenComments ? "Close" : "Open";

    let articleElem =
      <div ref={this.setContainerRef}>
        <article>{this.props.article.text}</article>
        <button className="btn btn-sm btn-default"
                onClick={this.toggleComments}>{commentButtonText}</button>
        {commentList}
      </div>;

    let article = this.props.isOpen ? articleElem : null;
    let buttonText = this.props.isOpen ? "Close" : "Open";

    return (
      <div className="article">
        <h2>{this.props.article.title}</h2>
        <button className="btn btn-sm btn-primary"
                onClick={this.props.toggleOpen}>{buttonText}</button>
        {article}
      </div>
    );
  }
}