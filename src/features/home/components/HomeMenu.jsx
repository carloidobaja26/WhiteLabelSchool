import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import SendIcon from '@mui/icons-material/Send';
export default function HomeMenu() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>

                <Card variant="outlined">
                    <CardContent>
                        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <List component="nav" aria-label="main mailbox folders">
                                <ListItemButton
                                    selected={selectedIndex === 0}
                                    onClick={(event) => handleListItemClick(event, 0)}
                                >
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Inbox" />
                                </ListItemButton>
                                <Divider />
                                <ListItemButton
                                    selected={selectedIndex === 1}
                                    onClick={(event) => handleListItemClick(event, 1)}
                                >
                                    <ListItemIcon>
                                        <DraftsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Graduation Clearance" />
                                </ListItemButton>
                                <Divider />
                                <ListItemButton
                                    selected={selectedIndex === 2}
                                    onClick={(event) => handleListItemClick(event, 2)}
                                >
                                    <ListItemIcon>
                                        <SendIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Submit Feedback" />
                                </ListItemButton>
                            </List>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={8}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6" component="h6" gutterBottom style={{fontSize:"14px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                         ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>


    );
}
