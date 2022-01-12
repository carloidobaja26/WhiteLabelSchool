import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

const card = (
  <React.Fragment>
    <CardContent></CardContent>
  </React.Fragment>
)

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275, marginTop: "16px" }}>
      <Card variant="outlined">
        <CardContent>{card}</CardContent>
      </Card>
    </Box>
  )
}
