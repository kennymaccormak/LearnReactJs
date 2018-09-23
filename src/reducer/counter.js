export default (count = 0, action) => {
  const { type, data } = action;
  switch (type) {
    case "INCREMENT":
      return (count += 1);
  }
  return count;
};
