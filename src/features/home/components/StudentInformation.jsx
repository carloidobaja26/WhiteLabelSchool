import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import WhiteCardBox from "../../../components/cards/WhiteCardBox"

const cardContent = (
  <Typography variant="h6" component="h6" gutterBottom>
    Memorandum of Agreeement
  </Typography>
)

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h6" component="h6" gutterBottom>
        Diza, Joseph Cadorna ()
      </Typography>
      <hr />
      <WhiteCardBox card={cardContent} />
    </CardContent>
  </React.Fragment>
)
const StudentInformation = () => {
  return <Card variant="outlined">{card}</Card>
}
export default StudentInformation
