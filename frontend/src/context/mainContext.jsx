import { createContext, useReducer } from 'react'
import localStorageService from '../util/localStorageService'

const initialState = {
  user :localStorageService.getUser()
}

export const MainContext = createContext(initialState)

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
        localStorageService.saveUser(action.payload)
        return { ...state, user: action.payload }
    case 'LOGOUT':
        localStorageService.removeUser()
        return { ...state, user: null }
    default:
        return state
  }
}

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setUser = (user) => {
    dispatch({ type: 'SET_USER', payload: user })
  }



  const logout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <MainContext.Provider value={{ user: state ? state.user : state, setUser, logout }}>
      {children}
    </MainContext.Provider>
  )
}
