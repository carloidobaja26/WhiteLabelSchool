import * as React from "react";
import UserHeader from "../../../components/userHeader/UserHeader";
import {
  Box,
  Button,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import * as userHooks from "../../../core/hooks/schedule";
import { useEffect, useState } from "react";

const AgreementCard = () => {
  return (
    <Box>
      <Card sx={{ marginTop: "16px" }} variant="outlined">
        <CardHeader
          title={
            <Typography sx={{ fontWeight: "medium" }}>
              I hereby certify that all the information provided are true and
              correct to the best of my knowledge.
            </Typography>
          }
          style={{
            borderLeftColor: "maroon",
            fontStyle: "italic",
          }}
        />
      </Card>
      <Button variant="contained" sx={{ mt: 2 }}>
        Save
      </Button>
    </Box>
  );
};

const ProfileCard = (profileData, isPending, error) => {
    return (
        <Box>
            <CardContent>
            <UserHeader />
            
            <Box>
            <Card sx={{ marginTop: "16px", marginBottom: "16px" }} variant="outlined">
                <CardHeader
                title={
                    <Typography sx={{ fontWeight: "medium" }}>Personal Data</Typography>
                }
                sx={{
                    bgcolor: "gray",
                    color: "white",
                }}
                />
            </Card>
            {isPending && (
                <Typography variant="h6" component="h6" gutterBottom>
                Loading ...
                </Typography>
            )}
            {error && (
                <Typography variant="h6" component="h6" gutterBottom>
                    error
                Error {profileData}
                </Typography>
            )}
            <Grid container spacing={2}>
        
            {profileData && (
                <>
                    <Grid item xs={2.5}>
                <span style={{ fontWeight: "bold" }}>Student Number</span>
                </Grid>
                <Grid item xs={3.5}>
                <span style={{ fontWeight: "bold" }}>{profileData.id}</span>
                </Grid>
                <Grid item xs={3}>
                <span style={{ fontWeight: "bold" }}>Residential Address</span> <br />
                <span style={{ fontSize: "12px" }}>
                    (Where you stay while you are studying in PUP)
                </span>
                </Grid>
                <Grid item xs={3}>
                <span style={{ fontWeight: "bold" }}>
                    <TextField
                    hiddenLabel
                    multiline
                    rows="3"
                    value={`${profileData.Address}`}
                    id="filled-hidden-label-small"
                    size="small"
                    />
                </span>
                </Grid>
                <Grid item xs={2.5}>
                <span style={{ fontWeight: "bold" }}>Name</span>
                </Grid>
                <Grid item xs={3.5}>
                <span style={{ fontWeight: "bold" }}>{profileData.LastName}, {profileData.FirstName}</span>
                </Grid>
                <Grid item xs={3}>
                <span style={{ fontWeight: "bold" }}>Permanent Address</span>
                </Grid>
                <Grid item xs={3}>
                <span style={{ fontWeight: "bold" }}>
                    <TextField
                    hiddenLabel
                    multiline
                    rows="3"
                    value={`${profileData.Address}`}
                    id="filled-hidden-label-small"
                    size="small"
                    >{profileData.address}</TextField>
                </span>
                </Grid>
                <Grid item xs={2.5}>
                <span style={{ fontWeight: "bold" }}>Gender</span>
                </Grid>
                <Grid item xs={3.5}>
                <span style={{ fontWeight: "bold" }}>Female</span>
                </Grid>
                <Grid item xs={3}>
                <span style={{ fontWeight: "bold" }}>
                    Name of Spouse (if married)
                </span>
                </Grid>
                <Grid item xs={3}>
                <span style={{ fontWeight: "bold" }}>
                    <TextField
                    hiddenLabel
                    multiline
                    id="filled-hidden-label-small"
                    value="Name of Spouse"
                    size="small"
                    />
                </span>
                </Grid>
                <Grid item xs={2.5}>
                <span style={{ fontWeight: "bold" }}>Date of Birth</span>
                </Grid>
                <Grid item xs={3.5}>
                <span style={{ fontWeight: "bold" }}>May 08, 1993</span>
                </Grid>
                <Grid item xs={3}>
                <span style={{ fontWeight: "bold" }}>Place of Birth</span>
                </Grid>
                <Grid item xs={3}>
                <span style={{ fontWeight: "bold" }}>
                    <TextField
                    hiddenLabel
                    multiline
                    id="filled-hidden-label-small"
                    value="Metro Manila"
                    size="small"
                    />
                </span>
                </Grid>
                <Grid item xs={2.5}>
                <span style={{ fontWeight: "bold" }}>Mobile No.</span>
                </Grid>
                <Grid item xs={3.5}>
                <span style={{ fontWeight: "bold" }}>
                    <TextField
                    hiddenLabel
                    multiline
                    id="filled-hidden-label-small"
                    value={`${profileData.PhoneNo}`}
                    size="small"
                    />
                </span>
                </Grid>
                <Grid item xs={3}>
                <span style={{ fontWeight: "bold" }}>Email Address</span>
                </Grid>
                <Grid item xs={3}>
                <span style={{ fontWeight: "bold" }}>
                    <TextField
                    hiddenLabel
                    multiline
                    id="filled-hidden-label-small"
                    value={`${profileData.EmailAddres}`}
                    size="small"
                    />
                </span>
                </Grid>
                </>
            )}
        
            
            </Grid>
        
            <hr />
            </Box>
            
            <AgreementCard />
         </CardContent>
        </Box>

    )
 
};

const ProfileForm = () => {
  const [profileData, setUserProfileData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchData();
    async function fetchData() {
      let userProfileData = await userHooks.fetchUserDetails();
      console.log(userProfileData["0"]);
      setUserProfileData(userProfileData["0"]);
      setIsPending(false)
      if (userProfileData.includes("error")) {
        setError(userProfileData)
      }
    }
  }, []);
  return <Card variant="outlined">
      {ProfileCard(profileData, isPending, error)}
      </Card>;
};

export default ProfileForm;
