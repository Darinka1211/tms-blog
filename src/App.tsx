import React from 'react'
import { useState } from 'react'
import { Button } from './components/Button/Button'
import { setTheme } from './redux/redusers/theme'
import { useAppDispatch, useAppSelector } from './redux/hooks'

function App() {
  const theme = useAppSelector(state => state.theme.value)
  const dispatch = useAppDispatch()

  
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    dispatch(setTheme(newTheme))
  }

  return (
    <div className={`App theme--${theme}`}>
      <Button text="Primary" className="primary" onClick={toggleTheme} />
    </div>
  )
}

export default App