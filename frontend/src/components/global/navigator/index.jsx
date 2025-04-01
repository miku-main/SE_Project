"use client";

import { Box, ButtonBase } from "@mui/material";
import Link from 'next/link';
import React from "react";
import Home from "./assets/Home";
import { usePathname } from "next/navigation";
import Post from "./assets/Post";
import Bookmark from "./assets/Bookmark";
import Profile from "./assets/Profile";
import Group from "./assets/Group";

const Navigator = () => {
    const pathname = usePathname();

    const containerStyle = {
        width:"100%",
        height:"fit-content",
        backgroundColor:"#FAADAD",
        border:"1px solid white",
        borderRadius:"0.5rem",
        paddingLeft:"1.5rem",
        paddingRight:"1.5rem",
        paddingTop:"2%",
        paddingBottom:"2%"
    }   

    const innerContainerStyle = {
        display:"flex",
        justifyContent:"space-between",
    }

    const linkButtonStyle = (page) => {
        console.log(pathname);
        return {
            width:"fit-content",
            height:"fit-content", 
            padding:"0.5rem", 
            borderRadius:"100%", 
            backgroundColor:pathname.split("/")[1] === `${page}` && pathname.split("?").length < 1 ? "#824D4D" :"transparent"
        }
    }
    
    return(
        <Box sx={containerStyle}>
            <Box sx={innerContainerStyle}>
                <Box>
                    <Link href={"/home"}>
                        <ButtonBase sx={linkButtonStyle('home')}>
                            <Home/>
                        </ButtonBase>
                    </Link>
                </Box>
                <Box>
                    <Link href={"/post"}>
                        <ButtonBase sx={linkButtonStyle('post')}>
                            <Post/>
                        </ButtonBase>
                    </Link>
                </Box>
                <Box>
                    <Link href={"/bookmark"}>
                        <ButtonBase sx={linkButtonStyle('bookmark')}>
                            <Bookmark/>
                        </ButtonBase>                   
                    </Link>
                </Box>
                <Box>
                    <Link href={"/profile"}>
                        <ButtonBase sx={linkButtonStyle('profile')}>
                            <Profile/>
                        </ButtonBase> 
                    </Link>
                </Box>
                <Box>
                    <Link href={"/group"}>
                        <ButtonBase sx={linkButtonStyle('group')}>
                            <Group/>
                        </ButtonBase> 
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Navigator;