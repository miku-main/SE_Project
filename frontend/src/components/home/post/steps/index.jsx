import {Box, Typography} from "@mui/material";
import Step from "./step";

const Steps = ({steps}) => {
    return (
        <Box>
            {steps.map((step,index) => {
                return (
                    <Box key={index} sx={{display:"flex", marginBottom:"5%"}}>
                        <Box sx={{marginRight:"5%", height:"100%", display:"flex", alignSelf:"center"}}>
                            <Typography color="white" variant="h6">{index + 1}</Typography>
                        </Box>
                        <Box>
                            <Step details={step}/>
                        </Box>
                    </Box>
                )
            })}
        </Box>
    )
}

export default Steps;