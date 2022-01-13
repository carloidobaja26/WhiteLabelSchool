import * as React from "react"
import GradeTable from "./components/GradeTable"
import MainContainer from "../../components/main-container/MainContainer"

const Grades = () => {
  return <MainContainer title="Grades" children={<GradeTable />} />
}

export default Grades
