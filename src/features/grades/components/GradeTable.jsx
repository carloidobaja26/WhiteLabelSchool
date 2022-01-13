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
import Grid from "@mui/material/Grid"
import { useEffect, useState } from "react"
import * as gradeHooks from "../../../core/hooks/grades"
import WhiteCardBox from "../../../components/cards/WhiteCardBox"
import UserHeader from "../../../components/userHeader/UserHeader"
import Curriculumn from "./Curriculum"
const GradeTable = () => {
    const [userGrade, setGrade] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetchData()
        async function fetchData() {
            let userGradeData = await gradeHooks.fetchUserGrades()
            setGrade(userGradeData)
            setIsPending(false)
            if (userGradeData.includes("error")) {
                setError(userGradeData)
            }
        }
    }, [])
    return (
        <Card variant="outlined">{cardTable(userGrade, isPending, error)}</Card>
    )
}
const cardTable = (userGrade, isPending, error) => (
    <React.Fragment>
        <CardContent>
            <UserHeader />
            <Typography variant="h6" component="h6" gutterBottom align="right" sx={{ pt: 2 }}> 
                <Curriculumn/>
            </Typography>
            <WhiteCardBox card={cardContent(userGrade, isPending, error)} />
        </CardContent>
    </React.Fragment>
)
const cardContent = (userGrade, isPending, error) => (
    <>
        <Typography variant="h6" component="h6" gutterBottom style={{ fontSize: "16px" }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <span style={{ fontWeight: "bold" }}>Admission Status</span> <br />
                    <span style={{ fontSize: "14px" }}>Continuing</span>
                </Grid>
                <Grid item xs={3}>
                    <span style={{ fontWeight: "bold" }}>Scholastic Status</span> <br />
                    <span style={{ fontSize: "14px" }}>Regular</span>
                </Grid>
                <Grid item xs={6}>
                    <span style={{ fontWeight: "bold" }}>Course Code & Description</span> <br />
                    <span style={{ fontSize: "14px" }}>BSCOE BACHELOR OF SCIENCE IN COMPUTER ENGINEERING</span>
                </Grid>
                <Grid item xs={12}>
                    <span style={{ fontWeight: "bold" }}>GPA (excludes NSTP and subjects with non-numeric ratings)</span> <br />
                    <span style={{ fontSize: "14px" }}>2.25</span>
                </Grid>
            </Grid>
        </Typography>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow style={{ backgroundColor: "gray" }}>
                        <TableCell>#</TableCell>
                        <TableCell align="right">Subject Code</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Faculty Name</TableCell>
                        <TableCell align="right">Units</TableCell>
                        <TableCell align="right">Sect Code</TableCell>
                        <TableCell align="right">Final Grade</TableCell>
                        <TableCell align="right">Grade Status</TableCell>
                    </TableRow>
                </TableHead>
                {isPending && (
                    <Typography variant="h6" component="h6" gutterBottom>
                        Loading ...
                    </Typography>
                )}
                {error && (
                    <Typography variant="h6" component="h6" gutterBottom>
                        Error {userGrade}
                    </Typography>
                )}
                <TableBody>
                    {userGrade &&
                        userGrade.map((data) => (
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {data.id}
                                </TableCell>
                                <TableCell align="right">{data.SubjectCode}</TableCell>
                                <TableCell align="right">{data.Description}</TableCell>
                                <TableCell align="right">{data.FacultyName}</TableCell>
                                <TableCell align="right">{data.Units}</TableCell>
                                <TableCell align="right">{data.SectCode}</TableCell>
                                <TableCell align="right">{data.FinalGrade}</TableCell>
                                <TableCell align="right">{data.GradeStatus}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
)

export default GradeTable
