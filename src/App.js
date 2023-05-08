import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/auth/Register'
import LoginPage from './pages/auth/Login'
import PasswordResetPage from './pages/auth/PasswordReset'
import Home from './pages/home/Home'
import BoxCreate from './pages/boxCreate/BoxCreate'
import BoxDone from './pages/boxCreate/BoxDone'
import MyBox from './pages/my-box/MyBox'
import MyBoxes from './pages/my-boxes/MyBoxes'
import Profile from './pages/profile/Profile'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Settings from './pages/settings/Settings'
import SupportPage from "./pages/support-us/SupportPage";


const App = () => {
  const [showHeadFoot, setShowHeadFoot] = useState(true)
  const location = useLocation()

  useEffect(() => {                           // отслеживание location для отображения header-а
    setShowHeadFoot(
      location.pathname !== '/register' &&
        location.pathname !== '/login' &&
        location.pathname !== '/password-reset'
    )
  }, [location])

  return (
    <>
      {showHeadFoot ? <Header /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
        <Route path="/create-box" element={<BoxCreate />} />
        <Route path="/box-created" element={<BoxDone />} />
        <Route path="/support-us" element={<SupportPage />} />

        <Route path="/boxes" element={<MyBoxes />}>
          <Route index element={<h1>Коробки</h1>} />
          <Route path="mine" element={<h1>Мои коробки</h1>} />
          <Route path="public" element={<h1>Публичные коробки</h1>} />
        </Route>

        <Route path="/box/:id">
          <Route index element={<MyBox />} />
          <Route path="settings" element={<Settings />} />
          <Route path="participants" element={<h1>Участники</h1>} />
          <Route path="my-card" element={<h1>Моя карточка</h1>} />
          <Route path="my-giftee" element={<h1>Мой подопечный</h1>} />
        </Route>

        <Route path="/whose-santa" element={<h1>Кто чей Санта?</h1>} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      {showHeadFoot ? <Footer /> : null}
    </>
  )
}

export default App
