import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';
import StudentScheduleTable from './components/StudentSchedulTable';
const Schedule = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ my: 2 }}>
                <Typography variant="h4" component="h4" gutterBottom style={{fontSize: "24px"}}>
                    School Year 2122 - First Semester
                </Typography>
                <StudentScheduleTable/>
            </Box>
        </Container>
    );
}
export default Schedule;
