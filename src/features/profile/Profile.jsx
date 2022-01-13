import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MainContainer from "../../components/main-container/MainContainer"
import ProfileForm from "./components/ProfileForm";

const Profile = () => {
  return (
    //   <Container maxWidth="md">
    //   <Box sx={{ my: 2 }}>
    //     <Typography
    //       variant="h4"
    //       component="h4"
    //       gutterBottom
    //       style={{ fontSize: "24px" }}
    //     >
    //       Profile
    //     </Typography>
    //     <hr />

    //   </Box>
    // </Container>
    <MainContainer
    title="Profile"
    children={<ProfileForm />}
  />
  );
};
export default Profile;