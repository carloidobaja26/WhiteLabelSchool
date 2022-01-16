import React from "react"
import MainContainer from "../../components/main-container/MainContainer"
import AccountInformation from "./components/AccountInformation"
const Accounts = () => {
  return (
    <>
      <MainContainer
        title="Accounts"
        children={<AccountInformation />}
      />
    </>
  )
}

export default Accounts
