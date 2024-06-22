import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login'
import ProfilePage from './pages/profile'
import HomePage from './pages/home'

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
