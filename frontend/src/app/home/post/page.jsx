"use client"
import { Box, Typography, ButtonBase } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import Post from "../../../components/home/post";
import Ingredients from "../../../components/home/post/ingredients";
import Steps from "../../../components/home/post/steps";
import Link from "next/link";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useContext } from "react";
import { AppContext } from "../../contexts";
const list = ["A","B","C","D","E","F"];
const steps = ["A","B","C","D","E","F"];

const PostPage = () => {
    
    const appInfo = useContext(AppContext);
    const {title , description, username, steps, ingredients} = appInfo.post.current;
    
    return (
        <Box width={"inherit"}>
            <Box sx={{marginLeft:"5%", marginTop:"2%"}}>
                <Link href="/home">
                    <ButtonBase>
                        <Typography><KeyboardBackspaceIcon sx={{color:"#FAADAD"}} fontSize="large"/></Typography>
                    </ButtonBase>
                </Link>
            </Box>
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", width:"inherit"}}>
                <Box sx={{ width:"40rem", marginBottom:"1%"}}>
                    <Post likes={likes} title={title} isFromFollowedUser={true} type={"post"} imageHeight={"25rem"} cursor={"default"} height={"50rem"} width={"40rem"} description={description} username={username}/>
                </Box>
                <Box sx={{ width:"40rem", marginBottom:"2%"}}>
                    <Typography sx={{marginBottom:"2%"}} color="white" variant={"h5"}>Ingredients</Typography>
                    <Ingredients list={ingredients}/>
                </Box>

                <Box sx={{ width:"40rem"}}>
                    <Typography sx={{marginBottom:"2%"}} color="white" variant={"h5"}>Steps</Typography>
                    <Steps steps={steps}/>
                </Box>
            </Box>
        </Box>
    )
} 

export default PostPage;