import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "./components/Button/Button";
import { useTheme } from "./features/theme";
import { useAppDispatch } from "./redux/hooks";
import { Input } from './components/Input/Input'
import { singUp } from './features/auth/authSlice'


function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')

  const { theme, toggleTheme } = useTheme()

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onConfirmedPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmedPassword(event.target.value)
  }

  const dispatch = useAppDispatch()

  const submitForm = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    const formData = {
      name,
      email,
      password,
    }
    dispatch(singUp())
  }

  return (
    <div className={`App theme--${theme}`}>
      <Button text="Primary" className="primary" onClick={toggleTheme} />
      <form>
        <Input title="Name" value={name} onChange={onNameChange} />
        <Input title="Email" value={email} onChange={onEmailChange} />
        <Input
          type="password"
          title="Password"
          value={password}
          onChange={onPasswordChange}
        />
        <Input
          type="password"
          title="Confirm password"
          value={confirmedPassword}
          onChange={onConfirmedPasswordChange}
        />
        <Button text="Sign Up" className="primary" onClick={submitForm} />
      </form>
    </div>
  )
}


      
       {posts?.map(post => {
        return (
          <div key={post.id}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>{post.title}</span>
              <span>{String(post.like)}</span>
            </div>
            <Button
              className="secondary"
              onClick={() => onLikePost(post.id)}
              icon={<LikeIcon />}
            />
            <Button
              className="secondary"
              onClick={() => onDislikePost(post.id)}
              icon={<DislikeIcon />}
            />
          </div>
        )
      })}
    </div>
  );
}

export default App;
