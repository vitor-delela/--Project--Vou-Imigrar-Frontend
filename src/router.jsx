import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Home from './pages/Home'
import NavigationStructure from './pages/NavigationStructure'

export default function AppRouter () {
  /*
  const { authenticated, type } = useSelector((state) => state.user)

  const PublicRoute = () => {
    if (authenticated) {
      return <Navigate to="/home" />
    } else {
      return <Outlet />
    }
  }

  const PrivateRoute = (props) => {
    if (authenticated === true && (props.clearance === type || props.clearance === 'all')) {
      return <Outlet/>
    } else if (authenticated === true && (props.clearance !== type)) {
      return <Navigate to='/home'/>
    } else {
      return <Navigate to="/"/>
    }
  }
  */

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/" element={<NavigationStructure />}>
          <Route path="/login" element={<Login />}/>
        </Route>

        <Route path="/">
          <Route path="/home" element={<Home />}/>
        </Route>

        <Route path="*" element={<Welcome />} />
      </Routes>
    </Router>
  )
}
