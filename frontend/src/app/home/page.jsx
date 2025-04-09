"use client";

import { useState } from "react";
import { Box, Grid, Typography, BottomNavigation, BottomNavigationAction, Card, CardMedia, CardContent, IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import DeleteIcon from '@mui/icons-material/Delete';


const initialSavedData = [
    { name: "Spaghetti Carbonara", image: "carbonara.jpg" },
    { name: "Avocado Toast", image: "avocado.jpg" },
    { name: "Chicken Curry", image: "curry.jpg" },
    { name: "Fresh Basil", image: "basil.jpg" }
];

const Bookmark = () => {
    const [savedData, setSavedData] = useState(initialSavedData);
    const [navValue, setNavValue] = useState(2); // 2 = Bookmarks

    const handleRemoveBookmark = (indexToRemove) => {
        setSavedData(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff5f5' }}>
            {/* Header */}
            <Box sx={{ backgroundColor: '#FAADAD', padding: '1rem', textAlign: 'center' }}>
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>Bookmarks</Typography>
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
