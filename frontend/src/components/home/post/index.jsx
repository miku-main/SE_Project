"use client"

import { Avatar, CardContent, CardHeader, CardMedia, Typography, Box, Card, Button, ButtonBase } from "@mui/material";
import React, { useContext, useEffect, useReducer, useState } from "react";
import Heart from "./assets/heart";
import Bookmark from "./assets/bookmark";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { AppContext } from "../../../app/contexts";
import { postData } from "../../../constants";


const Post = ({liked,id,description,username, width,ingredients, steps,imageHeight, type, isFromFollowedUser, title, likes, country,updateLikes}) => {

    const appInfo = useContext(AppContext);
    const post = {
        id: id,
        username: username, 
        likes: likes,
        description:description,
        title: title,
        followed: isFromFollowedUser,
        ingredients: ingredients,
        steps: steps,
        country: country,
        liked:liked
    }

    const checkId = () => {
        let check = false;

        appInfo.user.posts.liked.map((item) => {
            if(item.id === post.id){
                check = true;
            }
        })

        return check;
    }



    const reducer = (state, action) => {
        let newPosts = [];
        switch(action.type){
            case "LIKE":
                if(appInfo.user.posts.liked.length !== 0){
                    if(!appInfo.user.posts.liked.find(post => post.id === action.id)){
                        newPosts = appInfo.post.addLike(action.id);
                        appInfo.user.posts.addLikedPost(newPosts[action.id - 1])
                        updateLikes(newPosts);
                    }
                }
                else{
                    newPosts = appInfo.post.addLike(action.id);
                    appInfo.user.posts.addLikedPost(newPosts[action.id - 1])
                    updateLikes(newPosts);
                }

                // console.log("Post hasn't been liked yet.")
            

                return {
                    active: true,
                    currentLikes:likes + 1
                };
            case "DISLIKE":
                if(appInfo.user.posts.liked.length !== 0){
                    if(appInfo.user.posts.liked.find(post => post.id === action.id)){
                        newPosts = appInfo.post.removeLike(action.id);
                        appInfo.user.posts.removeLikedPost(action.id);
                        updateLikes(newPosts);
                        console.log(appInfo.post.posts)
                    }
                }
                return {
                    active: false,
                    currentLikes:likes
                };
            case "STAY":
                return state;
            default:
                return state;
        }
    }
    // console.log(appInfo.user.posts.liked.find(post => post.id === id));


    const displayLikes = () => {
        console.log("New Likes:")
        console.log(likes)
        if(checkId()){
            return likes + 1;
        }
        else{
            return likes;
        }
    }
    const [state, dispatch] = useReducer(reducer, {active:true ? checkId() === true : false,currentLikes: displayLikes()})

    const postType = () => {
        if(type === "home"){
            return (
                <Link onClick={() => {
                    appInfo.post.changeCurrent({id,title,description,username,steps,ingredients, likes,country,liked,followed: isFromFollowedUser});
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
                            // setHeartActiveState(!heartActiveState)
                            let nextState = null;
                            if(state.active){
                                dispatch({type:"DISLIKE", id:post.id})
                                nextState = reducer(state,{type:"DISLIKE", id:post.id});
                                console.log(nextState)
                            }
                            else{
                                dispatch({type:"LIKE", id:post.id})
                                nextState = reducer(state,{type:"LIKE", id:post.id});
                                console.log(nextState)
                            }
                        }}>
                            <Heart isActive={state.active}/>
                        </ButtonBase>

                        <Box>
                            <Typography color="white" fontWeight={"bolder"}>
                                {state.currentLikes}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Post;