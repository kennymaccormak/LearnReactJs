import React from 'react';
import Comment from './Comment';

export default function CommentList({ comments }) {
  const commentList = comments.map(
    (comment) => <Comment key={comment.id} comment={comment} />
  );

  return (
    <ul className="list-group">
      {commentList}
    </ul>
  )
}