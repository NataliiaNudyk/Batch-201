import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Profile from './pages/Profile.tsx'
import Favorites from './pages/Favorites.tsx'
import Cart from './pages/Cart.tsx'
import PageNotFound from './pages/PageNotFound.tsx'
import Register from './pages/Register.tsx'

const token = true;

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />} />
         <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="/profile"  element={token ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    
    </BrowserRouter>
)
