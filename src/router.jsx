import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Home from './pages/Home'
import NavigationStructure from './pages/NavigationStructure'

export default function AppRouter () {
  const { type } = useSelector((state) => state.user)

  const PublicRoute = (props) => {
    if (props.type === type) {
      return <Outlet/>
    } else {
      return <Navigate to="/home"/>
    }
  }

  const PrivateRoute = (props) => {
    if (props.type === type) {
      return <Outlet/>
    } else {
      return <Navigate to="/"/>
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoute type={null} />}>
          <Route path="/" element={<Welcome />} />

          <Route path="/" element={<NavigationStructure />}>
            <Route path="/login" element={<Login />}/>
          </Route>
        </Route>

        <Route path="/" element={<PrivateRoute type={'client'} />}>
          <Route path="/home" element={<Home />}/>
        </Route>

      </Routes>
    </Router>
  )
}
