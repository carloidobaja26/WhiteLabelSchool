import Card from "@mui/material/Card"
import React from "react"
import WhiteCardBox from "../../../components/cards/WhiteCardBox"
import { CardContent } from "@mui/material"
import UserHeader from "../../../components/userHeader/UserHeader"

const card = (
  <>
    <CardContent>
      <UserHeader />
      <WhiteCardBox />
    </CardContent>
  </>
)

const EnrollmentTable = () => {
  return <Card variant="outlined">{card}</Card>
}

export default EnrollmentTable
