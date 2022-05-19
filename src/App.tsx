import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button } from './components/Button/Button'
import { useTheme } from './features/theme'
import { setTheme } from './features/theme/themeSlice'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { postsData } from "./redux/postsData"
import {fetchPosts} from "./features/posts";

function App() {
const { theme, toggleTheme}= useTheme()
const posts = useAppSelector( state=> state.posts.content)
const  dispatch = useAppDispatch()
useEffect ( ()=>{
  setTimeout( ()=> {
    dispatch(fetchPosts(postsData))
  },1000)
}, []
)

 console.log (posts)



  return (
    <div className={`App theme--${theme}`}>
      <Button text="Primary" className="primary" onClick={toggleTheme} />
    </div>
  )
}

export default App