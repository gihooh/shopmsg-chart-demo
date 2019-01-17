import { ON_LOADING_END, ON_LOADING_START } from '../actions/ui';

const defaultState = {
  loading: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ON_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case ON_LOADING_END:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
