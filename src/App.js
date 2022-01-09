import logo from "./logo.svg"
import "./App.css"
import Home from "./features/home/Home";
import Schedule from "./features/schedule/Schedule";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/schedule' element={<Schedule />}/>
        </Routes>
    </Router>
  )
}

export default App
