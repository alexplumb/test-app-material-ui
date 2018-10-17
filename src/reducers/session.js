const session = (state = {
  user: null,
}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_SESSION_USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default session;
