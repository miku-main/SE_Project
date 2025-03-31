"use client"
import { Box, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import Post from "../../../components/home/post";
import Ingredients from "../../../components/home/post/ingredients";
import Steps from "../../../components/home/post/steps";

const list = ["A","B","C","D","E","F"];
const steps = ["A","B","C","D","E","F"];

const PostPage = () => {
    const query = useSearchParams();
    
    return (
        <Box width={"inherit"}>
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", width:"inherit"}}>
                <Box sx={{ width:"40rem", marginBottom:"1%"}}>
                    <Post type={"post"} imageHeight={"25rem"} cursor={"default"} height={"50rem"} width={"40rem"} description={"sadsadsadsadsadsadsadsadsadsadsadsafdsfsadsadsafdsafsadsasadsadsadsadsadsadsadsadsadsadsadsafdsfsadsadsafdsafsadsasadsadsadsadsads"} username={"Username"}/>
                </Box>
                <Box sx={{ width:"40rem", marginBottom:"2%"}}>
                    <Typography sx={{marginBottom:"2%"}} color="white" variant={"h5"}>Ingredients</Typography>
                    <Ingredients list={list}/>
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