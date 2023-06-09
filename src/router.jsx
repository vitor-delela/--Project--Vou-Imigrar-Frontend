import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import PlatformContainer from './components/PlatformContainer'
import PlatformAdmin from './components/PlatformAdmin'

import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import UpdateProfile from './pages/UpdateProfile'
import NavigationStructure from './pages/NavigationStructure'
import SignUp from './pages/SignUp'
import CountryDetails from './pages/CountryDetails'
import CountryMatches from './pages/CountryMatches'
import ProfileMap from './pages/ProfileMap'
import Partner from './pages/Partner'
import Journey from './pages/Journey'
import FinishedJourney from './pages/Finishedjourney'
import Dashboard from './pages/Dashboard'

export default function AppRouter() {
  const { type } = useSelector((state) => state.user)

  const PublicRoute = (props) => {
    if (props.type === type) {
      return <Outlet />
    } else {
      return <Navigate to="/home" />
    }
  }

  const PrivateRoute = (props) => {
    if (props.type === type) {
      return <Outlet />
    } else {
      return <Navigate to="/" />
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoute type={null} />}>
          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<Welcome />} />
          <Route path="/" element={<NavigationStructure />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
          </Route>
        </Route>

        <Route path="/" element={<PrivateRoute type={'client'} />}>
          <Route path="/" element={<PlatformContainer backNavigation={false} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/country-matches" element={<CountryMatches />} />
          </Route>
          <Route path="/" element={<PlatformContainer backNavigation={true} />}>
            <Route path="/country/:id" element={<CountryDetails />} />
            <Route path="/update" element={<UpdateProfile />} />
            <Route path="/map" element={<ProfileMap />} />
            <Route path="/partner/:id" element={<Partner />} />
            <Route path="/journey/:countryId" element={<Journey />} />
            <Route path="/finished-journey" element={<FinishedJourney />} />
          </Route>
          <Route path="/" element={<PlatformAdmin backNavigation={false} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>

      </Routes>
    </Router>
  )
}
