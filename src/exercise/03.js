// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext()
// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider
function CountProvider({children}) {
  const state = React.useState(0)
  return <CountContext.Provider value={state}>{children}</CountContext.Provider>
}

function useCount() {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error('useCount must be used with in a CountProvider')
  }

  return context
}

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
