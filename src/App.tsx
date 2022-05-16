import React from 'react'
import { useState } from 'react'
import { Button } from './components/Button/Button'
import { setTheme } from './redux/redusers/theme'


function App() {
  const [theme,setTheme] = useState ('dark')//1
    

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <div className={`App theme--${theme}`}>
      <Button text="Primary" className="primary" onClick={toggleTheme} />
    </div>
  )
}

export default App