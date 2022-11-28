import { fetchDataWithMethod } from "../../api/fetchDataWithMethod";
import { fetchData } from "../../api/fetchData";
import {
  COMMENT_SEND_SUCCESS,
  COMMENT_SEND_ERROR,
  COMMENT_DESTROY_SUCCESS,
  COMMENT_DESTROY_ERROR,
  COMMENT_LIST_ERROR,
  COMMENT_LIST_RECEIVED,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_UNLOAD
}
 from "../constants";

const urlMain = process.env.REACT_APP_URL_MAIN
const commentUrl = urlMain + '/api/comments'


export const commentSendSuccess = comment => {
  return {
    type: COMMENT_SEND_SUCCESS,
    comment
  }
}

export const commentSendError = error => {
  return {
    type: COMMENT_SEND_ERROR,
    error: error
  }
}

export const commentDestroySuccess = id => {
  return {
    type: COMMENT_DESTROY_SUCCESS,
    id
  }
}

export const commentDestroyError = error => {
  return {
    type: COMMENT_DESTROY_ERROR,
    error: error
  }
}

export const commentListRequest = () => ({
  type: COMMENT_LIST_REQUEST,
});

export const commentListError = (error) => ({
  type: COMMENT_LIST_ERROR,
  error
});

export const commentListReceived = (data) => ({
  type: COMMENT_LIST_RECEIVED,
  data
});

export const userSendComment = options => {
  return(dispatch) => {
    return fetchDataWithMethod(commentUrl, 'POST', options)
    .then(res => dispatch(commentSendSuccess(res)))
    .catch(err => dispatch(commentSendError(err)))
  }
};

export const userDestroyComment = id => {
  return(dispatch) => {
    const options = {}
    return fetchDataWithMethod(commentUrl + '/' + id, 'DELETE', options)
    .then(res => dispatch(commentDestroySuccess(id)))
    .catch(err => dispatch(commentDestroyError(err)))
  }
};

export const commentListFetch = (idDrink) => {
  return (dispatch) => {
    dispatch(commentListRequest());
    return fetchData(commentUrl + "?idDrink=" + idDrink)
      .then(response => dispatch(commentListReceived(response)))
      .catch(error =>dispatch(commentListError(error)));
  }
};

export const commentListUnload = () => ({
  type: COMMENT_LIST_UNLOAD,
});
