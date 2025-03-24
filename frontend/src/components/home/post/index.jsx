"use client"

import { Avatar, CardContent, CardHeader, CardMedia, Typography, Box, Card, Button, ButtonBase } from "@mui/material";
import React, { useState } from "react";
import Heart from "./assets/heart";
import Bookmark from "./assets/bookmark";

const Post = ({description,username}) => {

    const [bookmarkActiveState, setBookmarkActiveState] = useState(false);
    const [heartActiveState, setHeartActiveState] = useState(false);

    return (
        <Box>
            <Box sx={{display:"flex"}}>
                <Box>
                    <Card sx={{backgroundColor:"transparent", color:"white", boxShadow:"none", maxWidth:"20rem"}}>
                        <CardHeader avatar={
                            <Avatar sx={{bgcolor:"#FAADAD"}}>
                                A
                            </Avatar>
                            }
                            title={username}
                            action={
                                <Button sx={{backgroundColor:"#FAADAD", color:"white", width:"7rem", marginLeft:"1rem"}}>Follow</Button>
                            }
                        />
                        <CardMedia sx={{border:"1px solid red"}} component={"img"} height={"180"} alt="post"/>
                        <CardContent sx={{overflowWrap:"break-word"}}>
                            <Typography variant="body2">
                                {description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{marginLeft:"1rem", marginTop:"4.5rem"}}>
                    <Box sx={{marginBottom:"0.5rem"}}>
                        <ButtonBase onClick={() => {
                            setHeartActiveState(!heartActiveState)
                        }}>
                            <Heart isActive={heartActiveState}/>
                        </ButtonBase>
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
        </Box>
    )
}

export default Post;