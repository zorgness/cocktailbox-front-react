const myHeader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
})
const init = {
  method: 'GET',
  headers: myHeader,
  mode: 'cors',
}

export const fetchLikesByUserId = userId => {
  const urlMain = process.env.REACT_APP_URL_MAIN
  const url = `${urlMain}/api/users/${userId}/likes`
  return fetch(url, init)
    .then(response => response.json())
    .then(data => {
      if (data["hydra:member"].length > 0) {
        return data["hydra:member"]
      } else {
        return Promise.reject(
          new Error(`Pas de Likes trouvé avec l'userId "${userId}"`),
        )
      } // ERROR DU JSON()
    })
    .catch(error => {
      return Promise.reject(new Error(`Aucun Likes trouvé avec l'userId "${userId}"`))
    }) // ERROR APPEL API
}

export const fetchNumberOfLikesForDrink = idDrink => {
  const urlMain = process.env.REACT_APP_URL_MAIN
  const url = `${urlMain}/api/likes?idDrink=${idDrink}`
  return fetch(url, init)
    .then(response => response.json())
    .then(data => {
      if (data["hydra:member"].length > 0) {
        return data["hydra:member"].length
      } else {
        return Promise.reject(
          new Error(`Pas de Likes trouvé avec l'idrink "${idDrink}"`),
        )
      } // ERROR DU JSON()
    })
    .catch(error => {
      return Promise.reject(new Error(`Aucun Likes trouvé avec l'idDrink "${idDrink}"`))
    }) // ERROR APPEL API

}
