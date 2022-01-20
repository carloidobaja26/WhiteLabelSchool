import React from "react"
import {
    CardContent,
    Typography,
    Box
} from "@mui/material"
import Card from "@mui/material/Card"
import UserHeader from "../../../components/userHeader/UserHeader"
import WhiteCardBox from "../../../components/cards/WhiteCardBox"
import DownloadableFile from "../../../pdf-file.pdf"

const cardContent = (
    <Typography variant="h6" component="h6" gutterBottom>
      Name
      <hr/>
      <Box sx={{ minWidth: 275 }} style={{ paddingTop: "10px" }}>
          <a href={DownloadableFile} style={{fontSize: "18px",backgroundColor:"gray",padding: "6px 6px", color: "maroon", textDecoration: "none"}} download="PUP Intership Memorandom of Agreement">PUP Intership Memorandom of Agreement</a>
      </Box>
    </Typography>
  )
const cardBody = (
    <CardContent>
    <UserHeader />
      <WhiteCardBox card={cardContent} />
    </CardContent>
)

const FormTable = () => {
    return <Card variant="outlined">{cardBody}</Card>
}

export default FormTable
