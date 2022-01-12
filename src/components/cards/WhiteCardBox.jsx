import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

export default function WhiteCardBox({ card, ...rest }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>{card}</CardContent>
      </Card>
    </Box>
  )
}
