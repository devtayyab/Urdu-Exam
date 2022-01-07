export default (state = [], action) => {

  switch (action.type) {
    case "CLASS":
      return (state = action.payload);

    default:
      return state;
  }
};
