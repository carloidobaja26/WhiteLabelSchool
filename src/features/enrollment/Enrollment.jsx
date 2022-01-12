import React from "react"
import MainContainer from "../../components/main-container/MainContainer"
import EnrollmentTable from "./components/EnrollmentTable"

const Enrollment = () => {
  return (
    <>
      <MainContainer
        title="Registration S.Y. 2021 - 2022 (First Semester)"
        children={<EnrollmentTable />}
      />
    </>
  )
}

export default Enrollment
