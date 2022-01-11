import * as React from "react"
import StudentScheduleTable from "./components/StudentSchedulTable"
import MainContainer from "../../components/main-container/MainContainer"

const Schedule = () => {
  return (
    <MainContainer
      title="School Year 2122 - First Semester"
      children={<StudentScheduleTable />}
    />
  )
}
export default Schedule
