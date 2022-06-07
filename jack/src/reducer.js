export const initialState = {
  user: null,
  search: "",
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_SEARCH: "SET_SEARCH",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_SEARCH:
      return {
        ...state,
        search: action.search,
      };

    default:
      return state;
  }
};

export default reducer;
