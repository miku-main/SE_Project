import { Box, ButtonBase, Typography } from "@mui/material";
import Bookmark from "../assets/bookmark";
import { useState } from "react";

const Ingredient = ({name}) => {
    const [bookmarkActiveState,setBookmarkActiveState] = useState(false);
    return (
        <Box>
            <Box sx={{display:"flex"}}>
                <Box sx={{height:"4rem",display:"flex", alignItems:"center", justifyContent:"center" ,width:"20rem", backgroundColor:"#FAADAD", marginRight:"2%"}}>
                    <Typography color="white">
                        {name}
                    </Typography>
                </Box>

                <Box>
                    <ButtonBase sx={{width:"fit-content"}} onClick={() => {
                        setBookmarkActiveState(!bookmarkActiveState)
                    }}>
                        <Bookmark isActive={bookmarkActiveState}/>
                    </ButtonBase>
                </Box>
            </Box>
        </Box>
    )
}

export default Ingredient;