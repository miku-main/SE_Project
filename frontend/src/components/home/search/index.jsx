import SearchIcon from "./assets/searchIcon";
import {InputBase, Box} from "@mui/material";

const Search = () => {
    const searchContainerStyle = {
        width:"60rem",
        backgroundColor:"#FFFFFF",
        borderRadius:"1.5rem",
        padding:"2%"
    };

    const searchInnerContainerStyle = {
        paddingLeft:"3%",
        display:"flex",
        width:"inherit",
        paddingRight:"6%",
    };

    const searchInputContainerStyle = {
        width:"inherit"
    }

    const searchIconContainerStyle={
        marginRight:"2%"
    }

    return(
        <Box sx={searchContainerStyle}>
            <Box sx={searchInnerContainerStyle}>
                <Box sx={searchIconContainerStyle}>
                    <SearchIcon/>
                </Box>
                <Box sx={searchInputContainerStyle}>
                    <InputBase fullWidth={true} sx={{ml:1,flex:1}} inputProps={{"aria-label": "Search"}}/>
                </Box>
            </Box>
        </Box>
    )
}  

export default Search;