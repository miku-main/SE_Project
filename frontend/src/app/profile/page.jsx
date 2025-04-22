import { Box } from "@mui/material";
import { users } from "../../constants";
import { postData } from "../../constants";
import UserProfile from "../../components/profile/userProfile";

const Profile = () => {
    let userLoggedIn = true;

    if (!userLoggedIn) {
        return(
            <Box>
                Log in to view profile.
            </Box>
        )
    }

    else {
        return(
            <Box>
                <UserProfile />
            </Box>
        )
    }
}

export default Profile;