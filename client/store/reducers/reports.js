import { FETCH_OPTINS_SUCCESS, FETCH_RECIPIENTS_SUCCESS } from '../actions/reports';

const defaultState = {
  optins: [],
  recipients: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_OPTINS_SUCCESS:
      return {
        ...state,
        optins: [...action.optins],
      };
    case FETCH_RECIPIENTS_SUCCESS:
      return {
        ...state,
        recipients: [...action.recipients],
      };
    default:
      return state;
  }
};