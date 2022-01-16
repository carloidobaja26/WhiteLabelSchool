import * as React from "react";
import MainContainer from "../../components/main-container/MainContainer"
import ProfileForm from "./components/ProfileForm";

const Profile = () => {
  return (
    <MainContainer
    title="Profile"
    children={<ProfileForm />}
  />
  );
};
export default Profile;