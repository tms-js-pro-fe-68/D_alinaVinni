import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage.jsx'
import './App.css';
import './theme/styles.css'
import LoginPage from './pages/loginPage/LoginPage.jsx';

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/' element={<HomePage/>} exact/>
      </Routes>
    </Router>
  )
}