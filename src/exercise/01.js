// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

function countReducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
      count: action.step + state.count
      }
    default:
      return state
  }
}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount
  })

  const {count} = state

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "action" - the value passed to setCount
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter step={5}/>
}

export default App
