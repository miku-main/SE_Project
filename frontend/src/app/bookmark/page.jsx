import { useState } from "react";
import { Box, Grid, Typography, BottomNavigation, BottomNavigationAction, Card, CardMedia, CardContent } from "@mui/material";
import Home from "../../components/home/home";
import Search from "../../components/home/search";
import Post from "../../components/home/post";
import Dropdown from "../../components/global/dropdown";
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import {listOfCountries, listOfIngredients} from "../../constants";

const Bookmark = () => {
        const [savedData, setSavedData] = useState([
        { name: "Spaghetti Carbonara", image: "carbonara.jpg" },
        { name: "Avocado Toast", image: "avocado.jpg" },
        { name: "Chicken Curry", image: "curry.jpg" },
        { name: "Fresh Basil", image: "basil.jpg" }
    ]);
    
    const addSavedItem = (newItem) => {
        setSavedData([...savedData, newItem]);
    };
    return(
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
             <Box sx={{ backgroundColor: '#ff6b6b', padding: '1rem', textAlign: 'center', color: 'white' }}>
                <Typography variant="h5">Bookmarks</Typography>
            </Box>
            <Box sx={{ flexGrow: 1, padding: '10px' }}>
                <Grid container spacing={2}>
                    {savedData.map((item, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={`/images/${item.image}`}
                                    alt={item.name}
                                />
                                <CardContent>
                                    <Typography variant="body1" align="center">
                                        {item.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <BottomNavigation showLabels sx={{ boxShadow: '0 -2px 5px rgba(0,0,0,0.1)' }}>
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Post" icon={<AddBoxIcon />} />
                <BottomNavigationAction label="Bookmarks" icon={<BookmarkIcon />} />
                <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
                <BottomNavigationAction label="Groups" icon={<GroupIcon />} />
            </BottomNavigation>
        </Box>
    )
}

export default Bookmark;
