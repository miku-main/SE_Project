"use client"

import { Box, Grid2, Switch, Typography, Button } from "@mui/material";
import Search from "../../components/home/search";
import Post from "../../components/home/post";
import { useState } from "react";

const Home = () => {

    const [followingActive, setFollowingActive] = useState(false)

    return (
        <Box sx={{height:"inherit"}}>
            <Box sx={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                <Box sx={{marginTop:"1rem", marginBottom:"2rem"}}>
                    <Search/>
                </Box>

                <Box sx={{width:"100%", marginBottom:"1rem"}}>
                    <Box sx={{display:"flex", float:"right", marginRight:"2%"}}>
                        <Button onClick={() => {
                            setFollowingActive(true);
                        }} sx={{color:"white", backgroundColor: followingActive ? "#FAADAD" : "rgba(250,173,173,0.5)", borderTopRightRadius:"0", borderBottomRightRadius:"0"}}>Following</Button>
                        <Button onClick={() => {
                            setFollowingActive(false);
                        }} sx={{color:"white", backgroundColor: followingActive ? "rgba(250,173,173,0.5)" :"#FAADAD" ,borderTopLeftRadius:"0", borderBottomLeftRadius:"0"}}>Global</Button>
                    </Box>
                 
                </Box>

                <Box sx={{flexGrow:1}}>
                    <Grid2 container  direction={"row"}  columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array(6).fill(1).map(() => {
                            return (
                                <Grid2  item size={{ xs: 2, sm: 4, md: 4 }}>
                                    <Box sx={{margin:"auto", width:"fit-content"}}>
                                        <Post description={"sadsadsadsadsadsadsadsadsadsadsadsafdsfsadsadsafdsafsadsa"} username={"Username"}/>
                                    </Box>
                                </Grid2>
                            )
                        })}
                    </Grid2>
                </Box>
            </Box>
        </Box>
    )
}

export default Home;