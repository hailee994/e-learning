const initialState = {
  loading: true,
};

export const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_LOADING": {
      state.loading = false;
      return { ...state };
    }

    case "HIDE_LOADING": {
      state.loading = true;
      return { ...state };
    }

    default:
      return state;
  }
};
