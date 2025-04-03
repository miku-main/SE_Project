"use client"

import { Box, Grid2, Switch, Typography, Button } from "@mui/material";
import Search from "../../components/home/search";
import Post from "../../components/home/post";
import { useState } from "react";
import Dropdown from "../../components/global/dropdown";
import {listOfCountries, listOfIngredients, postData} from "../../constants";
const Home = () => {

    const [followingActive, setFollowingActive] = useState(false)

    const [selectedCountryList, setSelectedCountryList] = useState([]);
    const [selectedIngredientList, setSelectedIngredientList] = useState([]);



    const handleChange = (type,data) => {
        if(type === "country"){
            setSelectedCountryList(data);
        }
        else if(type === "ingredient"){
            setSelectedIngredientList(data);
        }
    }

    const currentScreen = (screenName) => {
        if(screenName === "Global"){
                return (
                <Box sx={{flexGrow:1}}>
                    <Grid2 container  direction={"row"}  columns={{ xs: 4, sm: 8, md: 12 }}>
                        {postData.map((post,index) => {
                            if(!post.followed){
                                return (
                                    <Grid2 key={post.id} item size={{ xs: 2, sm: 4, md: 4 }}>
                                        <Box sx={{margin:"auto", width:"fit-content"}}>
                                            <Post isFromFollowedUser={post.followed} type={"home"} imageHeight={"10rem"} cursor={"pointer"} width={"20rem"} description={post.description} username={post.username}/>
                                        </Box>
                                    </Grid2>
                                )
                            }
                        })}
                    </Grid2>
                </Box>
            )
        }
        else if(screenName == "Following"){
            return(
                <Box sx={{flexGrow:1}}>
                    <Grid2 container  direction={"row"}  columns={{ xs: 4, sm: 8, md: 12 }}>
                        {postData.map((post,index) => {
                            if(post.followed){
                                return (
                                    <Grid2 key={index} item size={{ xs: 2, sm: 4, md: 4 }}>
                                        <Box sx={{margin:"auto", width:"fit-content"}}>
                                            <Post isFromFollowedUser={post.followed} type={"home"} imageHeight={"10rem"} cursor={"pointer"} width={"20rem"} description={post.description} username={post.username}/>
                                        </Box>
                                    </Grid2>
                                )
                            }
                        })}
                    </Grid2>
                </Box>
            )
        }
    }
    return (
        <Box sx={{height:"inherit"}}>
            <Box sx={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                <Box sx={{width:"fit-content", marginBottom:"1%",marginTop:"2%"}}>
                    <Box sx={{marginBottom:"2%"}}>
                        <Search/>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"space-between", float:"left", paddingLeft:"5%"}}>
                        <Box sx={{marginRight:"10%"}}>
                            <Dropdown handleChange={(event) => handleChange("country",event.target.value)} selectedValue={selectedCountryList} isMultiple={true} placeholder={"Countries"} data={listOfCountries}/>
                        </Box>
                        <Box>
                            <Dropdown handleChange={(event) => handleChange("ingredient", event.target.value)} selectedValue={selectedIngredientList} isMultiple={true} placeholder={"Ingredients"} data={listOfIngredients}/>
                        </Box>
                    </Box>
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

                {followingActive ? currentScreen("Following") : currentScreen("Global")}
            </Box>
        </Box>
    )
}

export default Home;