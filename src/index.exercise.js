import * as React from 'react'
import ReactDOM from 'react-dom'
import {Logo} from './components/logo'

function App() {
  return (
    <>
      <Logo />
      <button
        onClick={() => {
          alert('Login clicked')
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          alert('Regist clicked')
        }}
      >
        Register
      </button>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
