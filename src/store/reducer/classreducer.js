export default (state = [], action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "CLASS":
      return (state = action.payload);

    default:
      return state;
  }
};
