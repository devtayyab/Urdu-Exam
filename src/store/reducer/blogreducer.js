export default (state = [], action) => {

    switch (action.type) {
      case "BLOG":
        return state = action.payload
      case "DETAIL":
        return  [action.payload];
      default:
        return state;
    }
  };
  