import { useState } from "react";
import {
  Box,
  Grid2,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  IconButton
} from "@mui/material";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import HomeIcon from "@mui/icons-material/Home";
import AddBoxIcon from "@mui/icons-material/AddBox";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupIcon from "@mui/icons-material/Group";
import Post from "../../components/home/post"; // same post component used in Home

const initialSavedData = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    image: "carbonara.jpg",
    description: "Creamy pasta with pancetta and cheese.",
    ingredients: ["Pasta", "Eggs", "Cheese", "Pancetta"],
    steps: ["Boil pasta", "Fry pancetta", "Mix all"],
    username: "chef_italy",
    bookmarked: true
  },
  {
    id: 2,
    name: "Avocado Toast",
    image: "avocado.jpg",
    description: "Simple toast topped with fresh avocado.",
    ingredients: ["Bread", "Avocado", "Salt"],
    steps: ["Toast bread", "Mash avocado", "Spread & season"],
    username: "greenlife",
    bookmarked: true
  },
  {
    id: 3,
    name: "Chicken Curry",
    image: "curry.jpg",
    description: "Spicy and flavorful chicken curry.",
    ingredients: ["Chicken", "Spices", "Tomatoes"],
    steps: ["Cook chicken", "Add spices", "Simmer"],
    username: "spicyqueen",
    bookmarked: true
  },
  {
    id: 4,
    name: "Fresh Basil",
    image: "basil.jpg",
    description: "Fresh picked basil leaves for garnishing.",
    ingredients: ["Basil"],
    steps: ["Pick leaves", "Rinse", "Use fresh"],
    username: "gardenlover",
    bookmarked: true
  }
];

const Bookmark = () => {
  const [savedData, setSavedData] = useState(initialSavedData);

  const toggleBookmark = (id) => {
    const updated = savedData.map((item) =>
      item.id === id ? { ...item, bookmarked: !item.bookmarked } : item
    );
    setSavedData(updated);
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Box sx={{ backgroundColor: "#FAADAD", padding: "1rem", textAlign: "center", color: "white" }}>
        <Typography variant="h5">Bookmarks</Typography>
      </Box>

      {/* Grid Layout (same as Home page) */}
      <Box sx={{ flexGrow: 1, padding: "1rem", overflowY: "auto" }}>
        <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }} spacing={2}>
          {savedData
            .filter((item) => item.bookmarked)
            .map((item) => (
              <Grid2 key={item.id} item xs={2} sm={4} md={4}>
                <Box sx={{ margin: "auto", width: "fit-content", position: "relative" }}>
                  {/* Post Card */}
                  <Post
                    title={item.name}
                    ingredients={item.ingredients}
                    steps={item.steps}
                    imageHeight="10rem"
                    width="20rem"
                    description={item.description}
                    username={item.username}
                    isFromFollowedUser={false}
                    type="bookmark"
                    cursor="default"
                  />
                  {/* Bookmark toggle button (top-right) */}
                  <IconButton
                    onClick={() => toggleBookmark(item.id)}
                    sx={{
                      position: "absolute",
                      top: 5,
                      right: 5,
                      backgroundColor: "white",
                      boxShadow: 1
                    }}
                  >
                    {item.bookmarked ? (
                      <BookmarkAddedIcon sx={{ color: "#FAADAD" }} />
                    ) : (
                      <BookmarkAddOutlinedIcon />
                    )}
                  </IconButton>
                </Box>
              </Grid2>
            ))}
        </Grid2>
        {savedData.filter((item) => item.bookmarked).length === 0 && (
          <Typography align="center" sx={{ marginTop: "2rem", color: "gray" }}>
            No saved bookmarks yet.
          </Typography>
        )}
      </Box>

      {/* Bottom Nav (same as Home) */}
      <BottomNavigation showLabels sx={{ boxShadow: "0 -2px 5px rgba(0,0,0,0.1)" }}>
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
