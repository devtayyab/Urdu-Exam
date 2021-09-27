export default (state = [], action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "SHAIR":
      return (state = action.payload);

    default:
      return state;
  }
};
