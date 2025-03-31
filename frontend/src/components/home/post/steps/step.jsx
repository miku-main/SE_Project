import { Box, Typography } from "@mui/material";

const Step = ({details}) => {
    return (
        <Box sx={{height:"4rem",width:"40rem",backgroundColor:"#FAADAD", borderRadius:"3rem"}}>
            <Box>
                <Typography color="white" variant="body2" padding={"1.5rem"}>
                    {details}
                </Typography>
            </Box>
        </Box>
    )
}

export default Step;
