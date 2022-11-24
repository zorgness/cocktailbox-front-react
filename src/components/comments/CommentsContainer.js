import React from 'react'
import Comment from './Comment'

const CommentsContainer = ({comments}) => {

  return (
    <div className='d-flex flex-wrap justify-content-around'>
      {
        comments.map((comment, index) => {
          return <Comment key={index} comment={comment} />
        })
      }
    </div>
  )
}

export default CommentsContainer
