import React from "react"
import MainContainer from "../../components/main-container/MainContainer"
import EnrollmentTable from "./components/EnrollmentTable"

const Enrollment = () => {
  return (
    <>
      <MainContainer title="Enrollment" children={<EnrollmentTable />} />
    </>
  )
}

export default Enrollment
