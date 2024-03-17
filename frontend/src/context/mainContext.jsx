import { createContext, useReducer } from 'react'

// initial state
const initialState = {
  user: {
    firstName: "Boris",
    lastName: "Johnson",
    email: "bSbQ0@example.com",
  }
}

// create context
export const MainContext = createContext(initialState)

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    case 'LOGOUT':
        return { ...state, user: null }
    default:
      return state
  }
}

// provider component
export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setUser = (user) => {
    dispatch({ type: 'SET_USER', payload: user })
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  // make setUser and state available to the rest of the app
  return (
    <MainContext.Provider value={{ ...state, setUser, logout }}>
      {children}
    </MainContext.Provider>
  )
}
