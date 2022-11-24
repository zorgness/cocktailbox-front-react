import React from 'react'
import Rating from './Rating'
import { useFindCommentOwner } from '../../customHooks/actions/fetchDataAction'

const Comment = ({comment}) => {

  const userId = localStorage.getItem('userId')
  const { account, content, rating } = comment
  const { data } =  useFindCommentOwner(account)

  const posterId = data?.['@id'].split('/')[3]

  return (
    <div className='border border-dark'>
        <h4>Comment by: {data?.username}</h4>
        <Rating rating={rating} />
        <p>{content}</p>
        {
          userId === posterId && <button>delete</button>
        }
    </div>
  )
}

export default Comment
