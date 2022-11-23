import React, {useState}  from 'react'
import emptyHeart from '../../../images/icons/heart-empty.png'
import fullHeart from '../../../images/icons/heart-full.png'

const Like = () => {

  const [isLiked, setIsLiked] = useState(false)

  const handleClick = () => {
    setIsLiked(!isLiked)
  }

  const icon = isLiked ? fullHeart : emptyHeart

  return (

    <img src={icon} className="avatar" alt="empty heart" onClick={handleClick}  />
  )
}

export default Like
