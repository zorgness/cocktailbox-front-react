import * as React from 'react'
import {fireEvent, render, screen } from '@testing-library/react'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import CocktailsContainer from '.././components/cocktailComponents/cocktails/CocktailsContainer'

test("get search results", () => {

  const mockStore = configureMockStore();
  const store = mockStore({});

  const mojito = 'mojito'

  render(<Provider store={store}><CocktailsContainer name={mojito} /></Provider>)

})
