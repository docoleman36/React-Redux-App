import { FETCHING_JOB_START, FETCHING_JOB_SUCCESS } from "../actions";

const initialState = {
  job: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_JOB_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_JOB_SUCCESS:
      return {
        ...state,
        isFetching: false,
        job: action.payload
      };
    default:
      return state;
  }
}