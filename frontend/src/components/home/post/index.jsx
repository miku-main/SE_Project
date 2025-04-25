"use client"

import { Avatar, CardContent, CardHeader, CardMedia, Typography, Box, Card, Button, ButtonBase } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Heart from "./assets/heart";
import Bookmark from "./assets/bookmark";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { AppContext } from "../../../app/contexts";
import { postData } from "../../../constants";


const Post = ({id,updateFollowers,description,username, width,ingredients, steps,imageHeight, type, isFromFollowedUser, title, initialHeartState}) => {

    const appInfo = useContext(AppContext);

    const [bookmarkActiveState, setBookmarkActiveState] = useState(false);
    const [heartActiveState, setHeartActiveState] = useState(initialHeartState);


    const postType = () => {
        if(type === "home"){
            return (
                <Link onClick={() => {
                    appInfo.post.changeCurrent({id,title,description,username,steps,ingredients,initialHeartState});
                }} href={{pathname:"/home/post", query:{id:"1234"}}} as={`/home/post?id=${1234}`}>
                    <CardMedia sx={{border:"1px solid red",width:"97%", height:imageHeight, textDecoration:"none"}} component={"img"} alt="post"/>
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
                            <Link style={{textDecoration:"none"}} href={{pathname:"/profile", query:{username:"1234"}}}>
                                <Avatar sx={{bgcolor:"#FAADAD", cursor:"pointer"}}>
                                    <Typography>
                                        {username.toUpperCase().charAt(0)}
                                    </Typography>
                                </Avatar>
                            </Link>
                            }
                            title={username}
                            action={
                               isFromFollowedUser ? <></> : <Button onClick={() => {

                               }} sx={{backgroundColor:"#FAADAD", color:"white", width:"7rem", marginLeft:"1rem"}}>Follow</Button>
                            }
                        />

                        
                        {postType(type)}
                        <CardContent sx={{overflowWrap:"break-word"}}>
                            <Typography gutterBottom variant="h5" component={"div"}>
                                {title}
                            </Typography>
                            <Typography variant="body1">
                                {description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{marginLeft:"1rem", marginTop:"4.5rem"}}>
                    <Box sx={{marginBottom:"0.5rem", display:"flex"}}>
                        <ButtonBase sx={{marginRight:"0.5rem"}} onClick={() => {
                            // appInfo.post.addPostLike(username,'',id)
                            // appInfo.post.deletePostLike(id)
                            if(heartActiveState){
                                appInfo.post.deletePostLike(username,'user',id)
                            }
                            else{
                                appInfo.post.addPostLike(username,'user',id)
                            }
                            setHeartActiveState(!heartActiveState)

                        }}>
                            <Heart isActive={heartActiveState === null ? false : heartActiveState}/>
                        </ButtonBase>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Post;