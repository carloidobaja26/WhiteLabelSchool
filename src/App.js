import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./features/home/Home"
import Enrollment from "./features/enrollment/Enrollment"
import Accounts from "./features/accounts/Accounts"
import Schedule from "./features/schedule/Schedule"
import Grades from "./features/grades/Grades"
import Forms from "./features/forms/Forms"
import Password from "./features/password/Password"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/enrollment" element={<Enrollment />} />
        <Route exact path="/accounts" element={<Accounts />} />
        <Route exact path="/schedule" element={<Schedule />} />
        <Route exact path="/grades" element={<Grades />} />
        <Route exact path="/forms" element={<Forms />} />
        <Route exact path="/change-password" element={<Password />} />
      </Routes>
    </>
  )
}

export default App
