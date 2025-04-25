"use client";

import { Paper, Grid, Typography, Stack, Box } from '@mui/material';
import { useEffect, useRef, useState } from "react";
import { groupList } from "./testdata";
import Post from "../../components/home/post";
import {postData} from "../../constants";

const tempImg = "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574";

const GroupCard = ({ name, onClick }) => (
    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, border: '2px solid #FAADAD', borderRadius: 3, maxWidth: '450', width: '100%', '&:hover': {backgroundColor: '#ffe6e6'}}} onClick={onClick} >
        <Stack direction="row" spacing={2} alignItems="center">
            <Box
                component="img"
                src={tempImg}
                alt={name}
                sx={{ width: 64, height: 64, borderRadius: 2, objectFit: 'cover' }}
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
        <Box sx={{ flexGrow: 1, backgroundColor: '#fff5f5', minHeight: '100vh'}}>
            {/* header */}
            <Box sx={{position: 'sticky', top: 0, backgroundColor: '#FAADAD', padding: '2rem', textAlign: 'center'}}>
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>Groups</Typography>
            </Box>
            {/* Content with Grid2 */}
            <Box sx={{ paddingTop: '2rem', paddingBottom: '6rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', height: 'calc(100vh - 10rem)'}}>
                <Grid container sx={{ flexGrow: 1, width: '100%'}}>
                    {/* Left section */}
                    <Grid xs={4} sx={{ paddingLeft: '2rem', paddingRight: '1rem', overflowY: 'auto', height: '100%', width: '27%', '&::-webkit-scrollbar': {display: 'none'}}}>
                        {/* new group button */}
                        <Paper elevation={2}
                            onClick={() => console.log("Clicked new group")}
                            sx={{
                                padding: 2,
                                marginBottom: 2,
                                border: '2px dashed #FAADAD',
                                borderRadius: 3,
                                maxWidth: 1000,
                                width: '100%',
                                textAlign: 'center',
                                '&:hover': {
                                    backgroundColor: '#ffe6e6',
                                },
                            }}
                        >
                            <Box sx={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                                <Typography variant="h6" color="text.secondary">
                                    Create or Join Group
                                </Typography>
                            </Box>
                        </Paper>
                        {groupList.map((group, index) => (
                            <GroupCard key={index} name={group} onClick={() => console.log(`Clicked group: ${group}`)} />
                        ))}
                    </Grid>
                    {/* Divider */}
                    <Grid xs={1} sx={{ width: '1rem' }} />
                    <Grid xs={1} sx={{ width: '3px', borderRadius: '3px', backgroundColor: '#FAADAD', height: '100%' }} />
                    {/* Middle section */}
                    <Grid xs={5} sx={{ paddingLeft: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto', height: '100%', width: '44%' }}>
                        {/* Add posts here */}
                        {postData.map((post, index) => {
                            return (
                                <Box key={post.id} sx={{ marginBottom: '1rem', width: '45%' }}>
                                    <Post
                                        likes={post.likes}
                                        ingredients={post.ingredients}
                                        steps={post.steps}
                                        title={post.title}
                                        isFromFollowedUser={post.followed}
                                        type={"home"}
                                        imageHeight={"10rem"}
                                        cursor={"pointer"}
                                        width={"100%"}
                                        description={post.description}
                                        username={post.username}
                                    />
                                </Box>
                            );
                        })}
                    </Grid>
                    {/* Divider */}
                    <Grid xs={1} sx={{ width: '3px', borderRadius: '3px', backgroundColor: '#FAADAD', height: '100%' }} />
                    <Grid xs={1} sx={{ width: '1rem' }} />
                    {/* Right section */}
                    <Grid xs={2} sx={{ paddingLeft: '1rem', paddingRight: '1rem', overflowY: 'auto', height: '100%', width: '24%', '&::-webkit-scrollbar': {display: 'none'}}}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                            Members
                        </Typography>
                        {/* Test List */}
                        {['User1', 'User2', 'User3', 'User4'].map((user, index) => (
                            <Box key={index} sx={{ padding: '1rem', border: '1px solid #FAADAD', borderRadius: '4px', marginBottom: '1rem' }}>
                                <Typography variant="body1">{user}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    [User details here]
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                </Grid>
            </Box>
            {/* footer */}
            <Box sx={{position: 'fixed', bottom: 0, width: '100%', height: '128px ', backgroundColor: '#FAADAD', padding: '2rem', textAlign: 'center'}}></Box>
        </Box>
    )
}

export default Group;