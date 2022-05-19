import React from 'react'
import { useState } from 'react'
import { Button } from './components/Button/Button'
import { useTheme } from './features/theme'
import { setTheme } from './features/theme/themeSlice'
import { useAppDispatch, useAppSelector } from './redux/hooks'

function App() {
 const { theme, toggleTheme}= useTheme()

  return (
    <div className={`App theme--${theme}`}>
      <Button text="Primary" className="primary" onClick={toggleTheme} />
    </div>
  )
}

export default App