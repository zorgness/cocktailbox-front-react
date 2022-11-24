import { fetchData } from "../../api/fetchData";
import { fetchDataWithMethod } from "../../api/fetchDataWithMethod";
import {
  COMMENT_SEND_SUCCESS,
  COMMENT_SEND_ERROR,
  COMMENT_DESTROY_SUCCESS,
  COMMENT_DESTROY_ERROR,
}
 from "../constants";

const urlMain = process.env.REACT_APP_URL_MAIN
const commentUrl = urlMain + '/api/comments'


export const commentSendSuccess = data => {
  return {
    type: COMMENT_SEND_SUCCESS,
    data: data
  }
}

export const commentSendError = error => {
  return {
    type: COMMENT_SEND_ERROR,
    error: error
  }
}

export const commentDestroySuccess = data => {
  return {
    type: COMMENT_DESTROY_SUCCESS,
    data: data
  }
}

export const commentDestroyError = error => {
  return {
    type: COMMENT_DESTROY_ERROR,
    error: error
  }
}

export const userSendComment = options => {
  return(dispatch) => {
    return fetchDataWithMethod(commentUrl, 'POST', options)
    .then(res => dispatch(commentSendSuccess(res)))
    .catch(err => dispatch(commentSendError(err)))
  }
};

export const userDestroyComment = () => {
  return(dispatch) => {
    const options = {}
    return fetchDataWithMethod(commentUrl, 'DELETE', options)
    .then(res => dispatch(commentDestroySuccess(res)))
    .catch(err => dispatch(commentDestroyError(err)))
  }
};
