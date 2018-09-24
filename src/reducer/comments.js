import { normalizedComments as defaultComments } from '../mock/fixtures';

export default (commentsState = defaultComments, action) => {
  const { type, payload } = action;

  switch (type) {
  }

  return commentsState;
};
