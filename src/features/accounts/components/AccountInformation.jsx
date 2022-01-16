import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { useEffect, useState } from "react"

import * as accountHooks from "../../../core/hooks/accounts"
import WhiteCardBox from "../../../components/cards/WhiteCardBox"
import UserHeader from "../../../components/userHeader/UserHeader"

const cardContent = (scheduletData, isPending, error) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow style={{ backgroundColor: "gray" }}>
          <TableCell align="right">School Year</TableCell>
          <TableCell align="right">Semester</TableCell>
          <TableCell align="right">Scholarship</TableCell>
          <TableCell align="right">O.R. Date</TableCell>
          <TableCell align="right">O.R. No.</TableCell>
          <TableCell align="right">Assessment</TableCell>
          <TableCell align="right">Payment</TableCell>
          <TableCell align="right">Balance</TableCell>
        </TableRow>
      </TableHead>
      {isPending && (
        <Typography variant="h6" component="h6" gutterBottom>
          Loading ...
        </Typography>
      )}
      {error && (
        <Typography variant="h6" component="h6" gutterBottom>
          Error {scheduletData}
        </Typography>
      )}
      <TableBody>
        {scheduletData &&
          scheduletData.map((data) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {data.SchoolYear}
              </TableCell>
              <TableCell align="right">{data.Semester}</TableCell>
              <TableCell align="right">{data.Scholaship}</TableCell>
              <TableCell align="right">{data.ORDate}</TableCell>
              <TableCell align="right">{data.ORNumber}</TableCell>
              <TableCell align="right">{data.Assessment}</TableCell>
              <TableCell align="right">{data.Payment}</TableCell>
              <TableCell align="right">{data.Balance}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
)

const cardTable = (scheduletData, isPending, error) => (
  <React.Fragment>
    <CardContent>
      <UserHeader />
      <WhiteCardBox card={cardContent(scheduletData, isPending, error)} />
    </CardContent>
  </React.Fragment>
)
const AccountInformation = () => {
  const [scheduletData, setScheduletData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetchData()
    async function fetchData() {
      let userScheduleData = await accountHooks.fetchUserAccount()
      console.log(userScheduleData)
      setScheduletData(userScheduleData)
      setIsPending(false)
      if (userScheduleData.includes("error")) {
        setError(userScheduleData)
      }
    }
  }, [])
  return (
    <Card variant="outlined">{cardTable(scheduletData, isPending, error)}</Card>
  )
}
export default AccountInformation
