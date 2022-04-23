import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import PlatformContainer from './components/PlatformContainer'

import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Home from './pages/Home'
import NavigationStructure from './pages/NavigationStructure'
import SignUp from './pages/SignUp'

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
        <Route path="/" element={<NavigationStructure />}>
          <Route path="/signUp" element={<SignUp />}/>
        </Route>

        <Route path="/" element={<PlatformContainer backNavigation={false} />}>
          <Route path="/home" element={<Home />}/>
        </Route>

        <Route path="/" element={<PrivateRoute type={'client'} />}>
          <Route path="/home" element={<Home />}/>
        </Route>

      </Routes>
    </Router>
  )
}
