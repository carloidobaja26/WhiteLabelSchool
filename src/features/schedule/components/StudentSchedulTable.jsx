import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";

import * as scheduelHooks from '../../../core/hooks/schedule';
const cardTable = (scheduletData, isPending, error) => (
    <React.Fragment>
        <CardContent>
            <Typography variant="h6" component="h6" gutterBottom style={{fontSize: "18px"}}>
                Diza, Joseph Cadorna ()
            </Typography>
            <hr />
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                    <CardContent>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                <TableHead>
                                    <TableRow style={{ backgroundColor: "gray" }}>
                                        <TableCell>#</TableCell>
                                        <TableCell align="right">Subject Code</TableCell>
                                        <TableCell align="right">Description</TableCell>
                                        <TableCell align="right">Lec</TableCell>
                                        <TableCell align="right">Lab</TableCell>
                                        <TableCell align="right">Unit</TableCell>
                                        <TableCell align="right">Schedule</TableCell>
                                    </TableRow>
                                </TableHead>
                                {isPending &&
                                    <Typography variant="h6" component="h6" gutterBottom >
                                        Loading ...
                                    </Typography>
                                }
                                {error &&
                                    <Typography variant="h6" component="h6" gutterBottom >
                                        Error {scheduletData}
                                    </Typography>
                                }
                                <TableBody>
                                    {scheduletData &&
                                        scheduletData.map((data) => (
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    {data.id}
                                                </TableCell>
                                                <TableCell align="right">{data.SubjectCode}</TableCell>
                                                <TableCell align="right">{data.Description}</TableCell>
                                                <TableCell align="right">{data.Lec}</TableCell>
                                                <TableCell align="right">{data.Lab}</TableCell>
                                                <TableCell align="right">{data.Unit}</TableCell>
                                                <TableCell align="right">{data.Schedule}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </Box>
        </CardContent>
    </React.Fragment>
);
const StudentScheduleTable = () => {
    const [scheduletData, setScheduletData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchData();
        async function fetchData() {
            let data = await scheduelHooks.fetchData();
            console.log(data)
            setScheduletData(data);
            setIsPending(false);
            if (data.includes("error")) {
                setError(data);
            }
        }
    }, []);
    return (
        <Card variant="outlined">{cardTable(scheduletData, isPending, error)}</Card>
    )
}
export default StudentScheduleTable;
