"use client"

import { Box, Grid2, Switch, Typography, Button } from "@mui/material";
import Search from "../../components/home/search";
import Post from "../../components/home/post";
import { useEffect, useRef, useState } from "react";
import Dropdown from "../../components/global/dropdown";
import {listOfCountries, listOfIngredients, postData} from "../../constants";
const Home = () => {

    const [filter,setFilter] = useState({
        result:{
            followed:[],
            notFollowed:[],
        },
        selectedCountryList:[],
        selectedIngredientList:[],
    });

    const [followingActive, setFollowingActive] = useState(false);

    const [selectedCountryList, setSelectedCountryList] = useState([]);
    const [selectedIngredientList, setSelectedIngredientList] = useState([]);
    const postTitles = useRef(postData.filter((post) => post.followed === followingActive).map((post) => {
        return post.title;
    }));

    const recentSearchedData = useRef(postTitles.current);
    const containsIngredients = (selectedIngredients, ingredients) => {
        let matched = false;
        ingredients.map((ingredient) => {
            if(selectedIngredients.indexOf(ingredient) !== -1){
                matched = true;
            }
        })

        return matched;
    }

    useEffect(() => {
        let result = {
            followed:[],
            notFollowed:[]
        };

      
        postData.map((post) => {
            if(post.followed){
                result.followed.push(post)
            }
            else{
                result.notFollowed.push(post);
            }
        })
      
        setFilter({...filter, result});
        console.log(filter.result)
    },[]);

    useEffect(() => {
        if(selectedCountryList.length !== 0 || selectedIngredientList.length !== 0){
            let result = [];
            
            postData.map((post) => {
                if(post.followed === followingActive){
                    if(selectedCountryList.indexOf(post.country) !== -1){
                        result.push(post);
                    }
                    else if(containsIngredients(selectedIngredientList,post.ingredients)){
                        result.push(post);
                    }
                }
            })
           
            result = handleSearchChange(recentSearchedData.current, false);
    
            setFilter({
                selectedCountryList,
                selectedIngredientList,
                result : {
                    followed: followingActive ? result : filter.result.followed,
                    notFollowed: !followingActive ? result : filter.result.notFollowed
                }
            })
        }
        else{
            let result = []

            if(selectedCountryList.length === 0 && selectedIngredientList.length === 0){
                postData.map((post) => {
                    if(post.followed === followingActive){
                        result.push(post);
                    }
                })
            }
            else if(selectedCountryList.length === 0){
                postData.map((post) => {
                    if(post.followed === followingActive){
                         if(containsIngredients(selectedIngredientList,post.ingredients)){
                            result.push(post);
                        }
                    }
                })
            }
            else if(selectedIngredientList.length === 0){
                postData.map((post) => {
                    if(post.followed === followingActive){
                         if(selectedCountryList.indexOf(post.country) !== -1){
                            result.push(post);
                        }
                    }
                })
            }

            // result = handleSearchChange(recentSearchedData.current, false);

            setFilter({
                selectedCountryList,
                selectedIngredientList,
                result : {
                    followed: followingActive ? result : filter.result.followed,
                    notFollowed: !followingActive ? result : filter.result.notFollowed
                }
            })
        }

    },[selectedCountryList,selectedIngredientList,followingActive])

    const handleCountryDropdownChange = (data) => {
        setSelectedCountryList(data);
 
    }

    const handleIngredientDropdownChange = (data) => {
        setSelectedIngredientList(data);
    }

  
    const handleSearchChange = (searchedData, isOnlySearch) => {
        let result = [];

        if(followingActive){
            postData.map((post) => {
                if(searchedData.indexOf(post.title) !== -1 && post.followed == followingActive){
                    if(selectedCountryList.length === 0 && selectedIngredientList.length === 0){
                
                        if(post.followed === followingActive){
                            result.push(post);
                        }
                        
                    }
                    else if(selectedCountryList.length === 0){
                        if(post.followed === followingActive){
                                if(containsIngredients(selectedIngredientList,post.ingredients)){
                                result.push(post);
                            }
                        }
                    
                    }
                    else if(selectedIngredientList.length === 0){
                        if(post.followed === followingActive){
                                if(selectedCountryList.indexOf(post.country) !== -1){
                                result.push(post);
                            }
                        }
                    }
                }
            })
        }
        else{
            postData.map((post) => {
                if(searchedData.indexOf(post.title) !== -1 && post.followed == followingActive){
                    if(selectedCountryList.length === 0 && selectedIngredientList.length === 0){
                        console.log("Option 1")
                        result.push(post);
                    }
                    else if(selectedCountryList.length === 0){
                        if(containsIngredients(selectedIngredientList,post.ingredients)){
                            result.push(post);
                        }
                    }
                    else if(selectedIngredientList.length === 0){
                        if(selectedCountryList.indexOf(post.country) !== -1){
                            result.push(post);
                        } 
                    }
                    
                }
            })
        }
        console.log(result);

        if(isOnlySearch){
            if(followingActive){
                setFilter({...filter, result:{...filter.result, followed:result}})
            }
            else{
                setFilter({...filter, result:{...filter.result, notFollowed:result}})
            }
        }

        recentSearchedData.current = searchedData;
        return result;
    }

    const currentScreen = (screenName) => {
        if(screenName === "Global"){
                return (
                <Box sx={{flexGrow:1}}>
                    <Grid2 container  direction={"row"}  columns={{ xs: 4, sm: 8, md: 12 }}>
                        {filter.result.notFollowed.map((post,index) => {
                            if(!post.followed){
                                return (
                                    <Grid2 key={post.id} item size={{ xs: 2, sm: 4, md: 4 }}>
                                        <Box sx={{margin:"auto", width:"fit-content"}}>
                                            <Post likes={post.likes} ingredients={post.ingredients} steps={post.steps} title={post.title} isFromFollowedUser={post.followed} type={"home"} imageHeight={"10rem"} cursor={"pointer"} width={"20rem"} description={post.description} username={post.username}/>
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
                        {filter.result.followed.map((post,index) => {
                            if(post.followed){
                                return (
                                    <Grid2 key={index} item size={{ xs: 2, sm: 4, md: 4 }}>
                                        <Box sx={{margin:"auto", width:"fit-content"}}>
                                            <Post likes={post.likes} ingredients={post.ingredients} steps={post.steps} title={post.title} isFromFollowedUser={post.followed} type={"home"} imageHeight={"10rem"} cursor={"pointer"} width={"20rem"} description={post.description} username={post.username}/>
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
                        <Search handleChange={handleSearchChange} data={postTitles.current}/>
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
                            postTitles.current = postData.filter((post) => post.followed).map((post) => {
                                return post.title;
                            })
                            setFollowingActive(true);
                        }} sx={{color:"white", backgroundColor: followingActive ? "#FAADAD" : "rgba(250,173,173,0.5)", borderTopRightRadius:"0", borderBottomRightRadius:"0"}}>Following</Button>
                        <Button onClick={() => {
                            postTitles.current = postData.filter((post) => !post.followed).map((post) => {
                                return post.title;
                            })
                            setFollowingActive(false);
                        }} sx={{color:"white", backgroundColor: followingActive ? "rgba(250,173,173,0.5)" :"#FAADAD" ,borderTopLeftRadius:"0", borderBottomLeftRadius:"0"}}>Global</Button>
                    </Box>
                </Box>

            {/* Saved Recipes Grid */}
            <Box sx={{ flexGrow: 1, padding: '1rem', overflowY: 'auto' }}>
                <Grid container spacing={2}>
                    {savedData.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image={`/images/${item.image}`} // You must ensure this path is valid
                                    alt={item.name}
                                />
                                <CardContent>
                                    <Typography variant="body1" align="center" fontWeight="bold">
                                        {item.name}
                                    </Typography>
                                </CardContent>
                                {/* Delete/Remove bookmark icon */}
                                <IconButton
                                    sx={{ position: 'absolute', top: 5, right: 5, color: 'white', backgroundColor: '#fa5c5c', '&:hover': { backgroundColor: '#ff0000' } }}
                                    onClick={() => handleRemoveBookmark(index)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Card>
                        </Grid>
                    ))}
                    {savedData.length === 0 && (
                        <Grid item xs={12}>
                            <Typography align="center" sx={{ color: '#888', marginTop: '2rem' }}>
                                No bookmarks yet.
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Box>

            {/* Bottom Navigation */}
            <BottomNavigation
                value={navValue}
                onChange={(event, newValue) => setNavValue(newValue)}
                showLabels
                sx={{ boxShadow: '0 -2px 5px rgba(0,0,0,0.1)', borderTop: '1px solid #ddd' }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Post" icon={<AddBoxIcon />} />
                <BottomNavigationAction label="Bookmarks" icon={<BookmarkIcon />} />
                <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
                <BottomNavigationAction label="Groups" icon={<GroupIcon />} />
            </BottomNavigation>
        </Box>
    );
};

export default Bookmark;
