import React, {useState, useEffect}  from 'react'
import { connect } from 'react-redux'
import { userLikeAttempt, userLikeDestroy } from '../../../redux/actions/likeActions'
import emptyHeart from '../../../images/icons/heart-empty.png'
import fullHeart from '../../../images/icons/heart-full.png'
import { fetchNumberOfLikesForDrink } from '../../../api/fetchLikesData';

const Like = ({idDrink, like, unLike, dataLike, likeDataStore}) => {

  const [isLiked, setIsLiked] = useState(false)
  const userId = localStorage.getItem('userId')
  const [num, setNum] = useState(0)

  const likeInfo = likeDataStore?.drinks.filter(drink => drink.idDrink === idDrink)

  useEffect(() => {
    if(dataLike?.length > 0) {
      setIsLiked(true)
    }
  }, [dataLike?.length])


  useEffect(() => {
    fetchNumberOfLikesForDrink(idDrink)
    .then(res =>{

       setNum(res)
    })
  })


  const handleClick = () => {
    setIsLiked(!isLiked)
    if(!isLiked) {
      const options = {account: `/api/users/${userId}`, idDrink: idDrink}
      like(options)
    } else {
      unLike(dataLike?.[0]?.id || likeInfo[0]?.id)
     }
  }

  const icon = isLiked ? fullHeart : emptyHeart

  return (


    <div>
        {
          userId && <img src={icon} className="avatar" alt="empty heart" onClick={handleClick}  />
        }
        <p className='text-white f-bold'>{num} like{num > 1 ? 's' : ''}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authData : state.auth,
    likeDataStore: state.like
  }
}

const mapDispatchToProps = dispatch => {
  return {
    like: options => dispatch(userLikeAttempt(options)),
    unLike: id => dispatch(userLikeDestroy(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Like)
