import { normalizedComments as defaultComments } from '../mock/fixtures';

const commentsMap = defaultComments.reduce((acc, comment) => {
  acc[comment.id] = comment;
  return acc;
}, {});

export default (commentsState = commentsMap, action) => {
  const { type, payload } = action;

  switch (type) {
  }

  return commentsState;
};
