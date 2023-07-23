"use client"

import { useState } from "react"
import { logIn, logOut, toggleModerator } from "@/redux/features/authSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"

const Login = () => {
  const [username, setUsername] = useState("")
  const dispatch = useDispatch<AppDispatch>()

  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)

  const onClickLogin = () => {
    dispatch(logIn(username))
    setUsername("")
  }

  const onClickLogout = () => {
    dispatch(logOut())
  }

  const onClickToggle = () => {
    dispatch(toggleModerator())
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold underline">Login</h1>
      <input
        type="text"
        className="mr-2 px-2 py-1"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button
        className="mr-2 bg-slate-700 px-2 py-1 text-white disabled:opacity-50"
        disabled={!username}
        onClick={onClickLogin}
      >
        Login
      </button>
      <button
        className="mr-2 bg-slate-700 px-2 py-1 text-white"
        onClick={onClickLogout}
      >
        Logout
      </button>

      {isAuth && (
        <button
          className="mr-2 bg-slate-700 px-2 py-1 text-white"
          onClick={onClickToggle}
        >
          Toggle Moderator
        </button>
      )}
    </div>
  )
}

export default Login
