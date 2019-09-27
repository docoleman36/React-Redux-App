import axios from 'axios';

export const FETCHING_JOB_START = "FETCHING_JOB_START"
export const FETCHING_JOB_SUCCESS = "FETCHING_JOB_SUCCESS"
export const FETCHING_JOB_FAILURE = "FETCHING_JOB_FAILURE"
export const getJob = () => dispatch => {
  dispatch({ type: FETCHING_JOB_START });
  axios
    .get("https://jobs.github.com/positions.json?search=react")
    // .then(response => {
    //   console.log(response.data);
    // })
    .then(res => {
      dispatch({ type: FETCHING_JOB_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_JOB_FAILURE, payload: err.data });
    });
}

