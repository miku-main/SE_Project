import { Grid2, Box } from "@mui/material";
import Ingredient from "./ingredient";

const Ingredients = ({list}) => {
    return (
        <Box sx={{flexGrow:1, width:"inherit"}}>
            <Grid2 container direction={"row"} spacing={3} columns={{xs: 4, sm: 8, md: 12}}>
                {list.map((ingredient,index) => {
                    return (
                        <Grid2 key={index} size={{ xs: 2, sm: 4, md: 6 }}>
                            <Ingredient name={ingredient}/>
                        </Grid2>
                    )
                })}
            </Grid2>
        </Box>
    )
}

export default Ingredients;