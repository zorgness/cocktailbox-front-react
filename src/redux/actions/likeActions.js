import { fetchDataWithMethod } from "../../api/fetchDataWithMethod";

import {
   LIKE_SEND_SUCCESS,
   LIKE_SEND_ERROR,
   LIKE_DESTROY_SUCCESS,
   LIKE_DESTROY_ERROR }
    from "../constants";

  const urlMain = process.env.REACT_APP_URL_MAIN
  const likeUrl = urlMain + '/api/likes'

export const likeSuccess = data => {
  return {
    type: LIKE_SEND_SUCCESS,
    data: data
  }
}

export const likeError = error => {
  return {
    type: LIKE_SEND_ERROR,
    error: error
  }
}

export const likeDestroySuccess = (data, id) => {
  return {
    type: LIKE_DESTROY_SUCCESS,
    data: data,
    id: id
  }

}

export const likeDestroyError = error => {
  return {
    type: LIKE_DESTROY_ERROR,
    error: error
  }
}

export const userLikeAttempt = options => {
  return(dispatch) => {
    return fetchDataWithMethod(likeUrl, 'POST', options)
    .then((res) => {
      dispatch(likeSuccess(res))
    }).catch((err) => {
      dispatch(likeError(err.message))
    })
  }
};

export const userLikeDestroy = id => {
  return(dispatch) => {
    const options = {}
    return fetchDataWithMethod(likeUrl + '/' + id, 'DELETE', options)
    .then((res) => {
      dispatch(likeDestroySuccess(res, id))
    }).catch((err) => {
      dispatch(likeDestroyError(err.message))
    })
  }
};
