const myHeader = new Headers({
  "Content-Type": "application/x-www-form-urlencoded",
});
const init = {
  method: "GET",
  headers: myHeader,
  mode: "cors",
};

export const fetchDataByName = (name) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  return fetch(url, init)
    .then((response) => response.json())
    .then((data) => {
      if (data.drinks.length > 0) {
        return data.drinks;
      } else {
        return Promise.reject(
          new Error(`Aucun Cocktail trouvé avec le nom "${name}"`)
        );
      } // ERROR DU JSON()
    })
    .catch((error) => {
      return Promise.reject(
        new Error(`Aucun Cocktail trouvé avec le nom "${name}"`)
      );
    }); // ERROR APPEL API
};

export const fetchDataFilter = (filter) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${filter}`;
  return fetch(url, init)
    .then((response) => response.json())
    .then((data) => {
      if (data.drinks.length > 0) {
        return data.drinks;
      } else {
        return Promise.reject(
          new Error(`Aucun Cocktail trouvé avec le nom "${filter}"`)
        );
      } // ERROR DU JSON()
    })
    .catch((error) => {
      return Promise.reject(
        new Error(`Aucun Cocktail trouvé avec le nom "${filter}"`)
      );
    }); // ERROR APPEL API
};

export const fetchDataById = (id) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  return fetch(url, init)
    .then((response) => response.json())
    .then((data) => {
      if (data.drinks.length > 0) {
        return data.drinks;
      } else {
        return Promise.reject(
          new Error(`Pas de Cocktail trouvé avec l'id "${id}"`)
        );
      } // ERROR DU JSON()
    })
    .catch((error) => {
      return Promise.reject(
        new Error(`Aucun Cocktail trouvé avec l'id "${id}"`)
      );
    }); // ERROR APPEL API
};

export const fetchDataByIngredient = (ingredient) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`;
  return fetch(url, init)
    .then((response) => response.json())
    .then((data) => {
      if (data.drinks.length > 0) {
        return data.drinks;
      } else {
        return Promise.reject(
          new Error(`Aucun Cocktail trouvé avec l'ingredient "${ingredient}"`)
        );
      } // ERROR DU JSON()
    })
    .catch((error) => {
      return Promise.reject(
        new Error(`Aucun Cocktail trouvé avec l'ingredient "${ingredient}"`)
      );
    }); // ERROR APPEL API
};
