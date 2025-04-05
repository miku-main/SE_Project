import SearchIcon from "./assets/searchIcon";
import {InputBase, Box} from "@mui/material";

const Search = ({data, handleChange}) => {
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
    
    let searchTimeout = null;

    const search = (data, input) => {
        let fields = [];

        console.log(data);
        data.forEach((item) => {
            let matched = false;
            for(let a = 0, b = 0; a < item.length; a++){
                if(item.toUpperCase().charAt(a) === input.toUpperCase().charAt(b)){
                    matched = true;
                    b++;
                    if(input.length == b){
                        break;
                    } 
                }
                else{
                    matched = false;
                    break;
                }
            }
            if(matched){
                fields.push(item);
            }
        })

        console.log(fields);
        return fields;
    }

    return(
        <Box sx={searchContainerStyle}>
            <Box sx={searchInnerContainerStyle}>
                <Box sx={searchIconContainerStyle}>
                    <SearchIcon/>
                </Box>
                <Box sx={searchInputContainerStyle}>
                    <InputBase onChange={(event) => {
                        clearTimeout(searchTimeout)
                        searchTimeout = setTimeout(() => {
                            handleChange(search(data,event.target.value));
                        },1500);

                    }} fullWidth={true} sx={{ml:1,flex:1}} inputProps={{"aria-label": "Search"}}/>
                </Box>
            </Box>
        </Box>
    )
}  

export default Search;