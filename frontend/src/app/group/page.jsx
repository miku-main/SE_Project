"use client";

import { Paper, Grid, Typography, Stack, Avatar, Box } from '@mui/material';
import { useEffect, useRef, useState } from "react";
import { groupList } from "./testdata";

const placeholderImg = "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg";

const GroupCard = ({ name }) => (
    <Paper elevation={2} sx={{ padding: 2, marginBottom: 2, border: '2px solid #FAADAD', borderRadius: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center">
            {/* Rounded Square Image */}
            <Box
                component="img"
                src={placeholderImg}
                alt={name}
                sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 2,
                    objectFit: 'cover'
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
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={0} sm={2.4} md={2.4} lg={2.4}></Grid>
                <Grid item xs={12} sm={7.2} md={7.2} lg={7.2}>
                    {groupList.map((group, index) => (
                        <GroupCard key={index} name={group} />
                    ))}
                </Grid>
                <Grid item xs={0} sm={2.4} md={2.4} lg={2.4}></Grid>
            </Grid>
        </Box>
    )
}

export default Group;