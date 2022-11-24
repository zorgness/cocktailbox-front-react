import React from 'react'

const Comment = ({comment}) => {
  console.log(comment)

  const { account, content, rating } = comment

  return (
    <div className='border border-dark'>
        <h4>Comment by: {account}</h4>
        <pre>rating: {rating}</pre>
        <p>{content}</p>
    </div>
  )
}

export default Comment
