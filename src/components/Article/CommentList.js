import React, { Component } from "react";
import Comment from "./Comment";
import toggleOpen from "../../decorators/toggleOpen";
import AddCommentForm from "../Article/AddCommentForm";

function CommentList({ article, isOpen, toggleOpen }) {
  const text = isOpen ? "Hide comments" : "Show comments";
  return (
    <div>
      <button className="btn btn-sm btn-primary" onClick={toggleOpen}>{text}</button>
      {getBody({ article, isOpen })}
    </div>
  );
}

function getBody({ article: { comments = [], id }, isOpen }) {
  if (isOpen) return null;
  if (!comments.length) {
    return (
      <div>
        <p>No comment yet</p>
        <AddCommentForm articleId={id} />
      </div>
    );
  }

  return (
    <div>
      <ul className="list-group">
        {comments.map(id => (
          <Comment key={id} id={id} />
        ))}
      </ul>
      <AddCommentForm articleId={id} />
    </div>
  );
}

export default toggleOpen(CommentList);
