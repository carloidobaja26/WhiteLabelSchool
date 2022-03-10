import "./App.css"
import Navbar from "./components/nav/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./features/home/Home"
import Enrollment from "./features/enrollment/Enrollment"
import Accounts from "./features/accounts/Accounts"
import Schedule from "./features/schedule/Schedule"
import Grades from "./features/grades/Grades"
import Forms from "./features/forms/Forms"
import Password from "./features/password/Password"
import Profile from "./features/profile/Profile"
import Registration from "./features/registration/Registration"

import Login from "./features/login/Login"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} >
      </Route>
      <Route path="/home" element={<Navbar />} >
        <Route exact path="/home" element={<Home />} />
      </Route>
      <Route path="/enrollment" element={<Navbar />} >
        <Route exact path="/enrollment" element={<Enrollment />} />
      </Route>
      <Route path="/accounts" element={<Navbar />} >
        <Route exact path="/accounts" element={<Accounts />} />
      </Route>
      <Route path="/schedule" element={<Navbar />} >
        <Route exact path="/schedule" element={<Schedule />} />
      </Route>
      <Route path="/grades" element={<Navbar />} >
        <Route exact path="/grades" element={<Grades />} />
      </Route>
      <Route path="/forms" element={<Navbar />} >
        <Route exact path="/forms" element={<Forms />} />
      </Route>
      <Route path="/profile" element={<Navbar />} >
        <Route exact path="/profile" element={<Profile />} />
      </Route>
      <Route path="/password" element={<Navbar />} >
        <Route exact path="/password" element={<Password />} />
      </Route>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/registration" element={<Registration />} />
    </Routes>
  )
}

export default App
