import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const card = (
    <React.Fragment>
        <CardContent>
            <Typography variant="h6" component="h6" gutterBottom>
                Diza, Joseph Cadorna ()
            </Typography>
            <hr />
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6" component="h6" gutterBottom>
                            Memorandum of Agreeement
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </CardContent>
    </React.Fragment>
);
const StudentInformation = () => {
    return (
        <Card variant="outlined">{card}</Card>
    )
}
export default StudentInformation;
