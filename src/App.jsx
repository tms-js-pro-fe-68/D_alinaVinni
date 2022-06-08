import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './homePage/HomePage.jsx'
import './App.css';

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} exact/>
      </Routes>
    </Router>
  )
}