"use client"

import { Avatar, CardContent, CardHeader, CardMedia, Typography, Box, Card, Button, ButtonBase } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Heart from "./assets/heart";
import Bookmark from "./assets/bookmark";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { AppContext } from "../../../app/contexts";
import { postData } from "../../../constants";


const Post = ({id,description,username, width,ingredients, steps,imageHeight, type, isFromFollowedUser, title, likes}) => {

    const [bookmarkActiveState, setBookmarkActiveState] = useState(false);
    const [heartActiveState, setHeartActiveState] = useState(false);

    const appInfo = useContext(AppContext);


    useEffect(() => {
        let newPosts = [];
        if(heartActiveState){
            newPosts = appInfo.post.addLike(id);
        }
        else{
            newPosts = appInfo.post.removeLike(id);
        }
        appInfo.post.updatePosts(newPosts);
    },[heartActiveState])

    const postType = () => {
        if(type === "home"){
            return (
                <Link onClick={() => {
                    appInfo.post.changeCurrent({id,title,description,username,steps,ingredients, likes,liked});
                }} href={{pathname:"/home/post", query:{id:"1234"}}} as={`/home/post?id=${1234}`}>
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
                            <Link href={{pathname:"/profile", query:{username:"1234"}}}>
                                <Avatar sx={{bgcolor:"#FAADAD", cursor:"pointer"}}>
                                    {username.toUpperCase().charAt(0)}
                                </Avatar>
                            </Link>
                            }
                            title={username}
                            action={
                               isFromFollowedUser ? <></> : <Button sx={{backgroundColor:"#FAADAD", color:"white", width:"7rem", marginLeft:"1rem"}}>Follow</Button>
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
                            setHeartActiveState(!heartActiveState)
                        }}>
                            <Heart isActive={heartActiveState}/>
                        </ButtonBase>

                        <Box>
                            <Typography color="white" fontWeight={"bolder"}>
                                {likes}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Post;