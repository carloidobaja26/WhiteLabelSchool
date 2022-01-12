import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import WhiteCardBox from "../../../components/cards/WhiteCardBox"
import Box from "@mui/material/Box"
import HomeMenu from './HomeMenu';
import { useEffect, useState } from "react"
import * as scheduelHooks from "../../../core/hooks/schedule"
import UserHeader from "../../../components/userHeader/UserHeader"
const cardContent = (
  <Typography variant="h6" component="h6" gutterBottom>
    Memorandum of Agreeement
    <hr/>
    <Box sx={{ minWidth: 275 }} style={{ paddingTop: "10px" }}>
      <HomeMenu></HomeMenu>
    </Box>
  </Typography>
)
const cardGeneralGuidelines = () => (
  <>
    <CardContent>
      <Typography variant="h6" component="h6" gutterBottom>
        GENERAL GUIDELINES FOR IMPLEMENTATION
      </Typography>
      <Typography style={{ fontSize: "12px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </Typography>
    </CardContent>
  </>
)
const card = (userDetails,error) => (
  <React.Fragment>
    <CardContent>
    <UserHeader />
      <WhiteCardBox card={cardContent} />
    </CardContent>
  </React.Fragment>
)
const StudentInformation = () => {
  return (
    <>
      <Card variant="outlined">{card()}</Card>
      <br />
      <Card variant="outlined">{cardGeneralGuidelines()}</Card>
    </>
  )
}
export default StudentInformation
