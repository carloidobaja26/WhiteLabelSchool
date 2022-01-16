import React from "react"
import MainContainer from "../../components/main-container/MainContainer"
import FormTable from "./components/FormTable"
const Forms = () => {
  return (
    <>
      <MainContainer
        title="Form"
        children={<FormTable />}
      />
    </>
  )
}

export default Forms
