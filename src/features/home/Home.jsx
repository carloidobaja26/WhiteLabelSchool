import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';
import StudentInformation from './components/StudentInformation';
const Home = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ my: 2 }}>
                <Typography variant="h4" component="h4" gutterBottom style={{fontSize: "24px"}}>
                    Home
                </Typography>
               <StudentInformation/>
            </Box>
        </Container>
    );
}
export default Home;
