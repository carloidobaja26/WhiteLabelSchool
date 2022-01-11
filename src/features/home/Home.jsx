import * as React from "react"
import StudentInformation from "./components/StudentInformation"
import MainContainer from "../../components/main-container/MainContainer"

const Home = () => {
  return <MainContainer title="Home" children={<StudentInformation />} />
}
export default Home
