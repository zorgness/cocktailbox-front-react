import React from 'react'
import { useFindCommentOwner } from '../../customHooks/actions/fetchDataAction'

const Comment = ({comment}) => {

  const { account, content, rating } = comment

  const { data } =  useFindCommentOwner(account)

  return (
    <div className='border border-dark'>
        <h4>Comment by: {data?.username}</h4>
        <pre>rating: {rating}</pre>
        <p>{content}</p>
        <button>edit</button>
        <button>delete</button>
    </div>
  )
}

export default Comment
