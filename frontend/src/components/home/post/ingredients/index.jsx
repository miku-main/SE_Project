import { Grid, Box } from "@mui/material";
import Ingredient from "./ingredient";

const Ingredients = ({list}) => {
    return (
        <Box sx={{flexGrow:1, width:"inherit"}}>
            <Grid container direction={"row"} spacing={3} columns={{xs: 4, sm: 8, md: 12}}>
                {list.map((ingredient,index) => {
                    return (
                        <Grid key={index} size={{ xs: 2, sm: 4, md: 6 }}>
                            <Ingredient name={ingredient}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default Ingredients;