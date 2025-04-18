"use client";

import { Paper, Grid2, Typography, Stack, Box } from '@mui/material';
import { useEffect, useRef, useState } from "react";
import { groupList } from "./testdata";

const tempImg = "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574";

const GroupCard = ({ name, onClick }) => (
    <Paper elevation={2} sx={{ padding: 2, marginBottom: 2, border: '2px solid #FAADAD', borderRadius: 3, maxWidth: 600, width: '100%', '&:hover': {backgroundColor: '#ffe6e6'}}} onClick={onClick} >
        <Stack direction="row" spacing={2} alignItems="center">
            <Box
                component="img"
                src={tempImg}
                alt={name}
                sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 2,
                    objectFit: 'cover',
                }}
            />

            <Box>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    [Description line here]
                </Typography>
            </Box>
        </Stack>
    </Paper>
);

const Group = () => {
    return(
        <Box sx={{ flexGrow: 1, backgroundColor: '#fff5f5'}}>
            {/* header */}
            <Box sx={{position: 'sticky', top: 0, backgroundColor: '#FAADAD', padding: '1rem', textAlign: 'center'}}>
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>Groups</Typography>
            </Box>
            {/* spacer */}
            <Box sx={{ height: 16 }} />
            {/* content */}
            <Grid2 container direction={"column"} alignItems={"center"} >
                {/* new group button */}
                <Grid2 width={{ xs: '100%', sm: '100%', md: '100%', lg: '100%' }} display="flex" justifyContent="center" >
                    <Paper elevation={2}
                        onClick={() => console.log("Clicked create/join")}
                        sx={{
                            padding: 2,
                            marginBottom: 2,
                            border: '2px dashed #FAADAD',
                            borderRadius: 3,
                            maxWidth: 600,
                            width: '100%',
                            textAlign: 'center',
                            '&:hover': {
                                backgroundColor: '#ffe6e6',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                height: 64,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography variant="h6" color="text.secondary">
                                Create or Join Group
                            </Typography>
                        </Box>
                    </Paper>
                </Grid2>
                {groupList.map((group, index) => (
                    <Grid2 key={index} width={{ xs: '100%', sm: '100%', md: '100%', lg: '100%' }} display="flex" justifyContent="center" > 
                        <GroupCard name={group} onClick={() => console.log(`Clicked group: ${group}`)}/> {/* onclick unimplemented */}
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    )
}

export default Group;