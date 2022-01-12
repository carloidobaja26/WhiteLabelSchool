import React from "react"

import {
  Button,
  CardContent,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import Card from "@mui/material/Card"
import { red } from "@mui/material/colors"

import UserHeader from "../../../components/userHeader/UserHeader"

const EnrollmentHeader = () => (
  <Card
    sx={{
      display: "flex",
      justifyContent: "space-between",
      px: 2,
      py: 1,
      mt: 2,
    }}
    variant="outlined"
  >
    <Typography>Status: Regular (24 units)</Typography>
    <Typography>Section: BSCoE 1-5</Typography>
  </Card>
)

const TableContent = () => (
  <TableContainer component={Paper} variant="outlined">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell align="center">School Year</TableCell>
          <TableCell align="center">Semester</TableCell>
          <TableCell align="center">Amount</TableCell>
          <TableCell align="center">Payment Method</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row">
            1
          </TableCell>
          <TableCell align="center">2122</TableCell>
          <TableCell align="center">First Semester</TableCell>
          <TableCell align="center">5,000.00</TableCell>
          <TableCell align="center">
            <div
              style={{ display: "flex", gap: "8px", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                disableElevation
                size="small"
                sx={{ textTransform: "none" }}
              >
                Download Payment Voucher
              </Button>
              <Button
                variant="contained"
                color="success"
                disableElevation
                size="small"
                sx={{ textTransform: "none" }}
              >
                Pay Online
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
)

const totalBgColor = red[50]

const EnTable = () => (
  <Card sx={{ marginTop: "16px" }} variant="outlined">
    <CardHeader
      title={
        <Typography sx={{ fontWeight: "medium" }}>
          Please pay your balance to enroll.
        </Typography>
      }
      sx={{
        bgcolor: "error.main",
        color: "error.contrastText",
      }}
    />
    <CardContent>
      <TableContent />
    </CardContent>
    <CardContent
      sx={{
        bgcolor: totalBgColor,
      }}
    >
      <Typography sx={{ fontWeight: "medium" }}>
        TOTAL BALANCE: 5,000.00
      </Typography>
    </CardContent>
  </Card>
)

const cardBody = (
  <CardContent>
    <UserHeader />
    <EnrollmentHeader />
    <EnTable />
  </CardContent>
)

const EnrollmentTable = () => {
  return <Card variant="outlined">{cardBody}</Card>
}

export default EnrollmentTable
