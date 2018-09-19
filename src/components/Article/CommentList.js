import React, { Component } from 'react';
import Comment from './Comment';
import toggleOpen from '../../decorators/toggleOpen';
import AddCommentForm from '../Article/AddCommentForm';

class CommentList extends Component {
  state = {
    showCommentForm: false
  }
  getBody() {
    const {comments, isOpen} = this.props;
    if (!isOpen) return null;
    if (!comments.length) return <p>No comments yet</p>;
    return (
      <ul className="list-group">
        {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
      </ul>
    );
  }  

  render() {
    const text = this.props.isOpen ? "hide comments" : "show comments";
    return (
      <div>
        <button className='btn btn-sm btn-defoult m-3' onClick={this.props.toggleOpen}>{text}</button>
        {this.getBody()}
        <button className='btn btn-sm btn-defoult m-3' onClick={() => { this.setState({showCommentForm: !this.state.showCommentForm}) }}>add comment</button>
        {(this.state.showCommentForm) ? <AddCommentForm /> : null}
      </div>
    );
  }
}

export default toggleOpen(CommentList);
