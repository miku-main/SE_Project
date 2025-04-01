"use client"

import { Avatar, CardContent, CardHeader, CardMedia, Typography, Box, Card, Button, ButtonBase } from "@mui/material";
import React, { useState } from "react";
import Heart from "./assets/heart";
import Bookmark from "./assets/bookmark";
import Link from 'next/link';


const Post = ({description,username, width, imageHeight, type, isFromFollowedUser}) => {

    const [bookmarkActiveState, setBookmarkActiveState] = useState(false);
    const [heartActiveState, setHeartActiveState] = useState(false);


    const postType = () => {
        if(type === "home"){
            return (
                <Link href={{pathname:"/home/post", query:{id:"1234"}}}>
                    <CardMedia sx={{border:"1px solid red", height:imageHeight}} component={"img"} alt="post"/>
                </Link> 
            )
        }
        else if(type === "post"){
            return <CardMedia sx={{border:"1px solid red", height:imageHeight}} component={"img"} alt="post"/>
        }
    }
    return (
        <Box>
            <Box sx={{display:"flex"}}>
                <Box>
                    <Card sx={{backgroundColor:"transparent", color:"white", boxShadow:"none", maxWidth:width}}>
                        <CardHeader avatar={
                            <Avatar sx={{bgcolor:"#FAADAD"}}>
                                A
                            </Avatar>
                            }
                            title={username}
                            action={
                               isFromFollowedUser ? <></> : <Button sx={{backgroundColor:"#FAADAD", color:"white", width:"7rem", marginLeft:"1rem"}}>Follow</Button>
                            }
                        />

                        
                        {postType(type)}
                        <CardContent sx={{overflowWrap:"break-word"}}>
                            <Typography variant="body1">
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