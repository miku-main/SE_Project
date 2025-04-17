"use client"

import React, { useState } from 'react';
import '../../src/index.css';
import {Box, Container} from "@mui/material"
import Navigator from '../components/global/navigator';
import { AppContext } from './contexts';
import { postData } from '../constants';


const Layout = ({children}) => {

  const navigatorContainerStyle = {
    position:"fixed",
    bottom:"5%",
  }
  
  const layoutStyle = {
    backgroundColor:"#D9D9D9",
    height:"100vh"
  }

  const innerLayoutStyle = {
    display:"flex",
    justifyContent:"center",
    height:"100%",
    width:"100%"
  }

  // Change later to use database
  const [posts, setPosts] = useState(postData);

  const [selectedPost, setSelectedPost] = useState({
    id:0,
    title:"",
    description:"",
    username:"",
    steps:[],
    ingredients:[],
    likes:0
  });
  const [bookmarks, setBookmarks] = useState([]);
  const appSettings = {
    post:{
      changeCurrent: ({id,title,description,username,ingredients,steps,likes,liked}) => {
        setSelectedPost({
          id,
          title,
          description,
          username,
          ingredients,
          steps,
          likes,
          liked
        })
      },
      current:selectedPost,
      addLike:(selectedPostId) => {
        //Update likes in database

        //Use this for testing purposes
        const newPosts = posts.map((post) => {
          if(post.id === selectedPostId){
            post.likes = post.likes + 1;
            console.log(post.likes)
          }
          return post;
        });
        console.log(selectedPostId);

        return newPosts;
      },
      removeLike:(selectedPostId) => {
        //Update likes in database

        //Use this for testing purposes
       const newPosts =  posts.map((post) => {
          if(post.id === selectedPostId){
            post.likes = post.likes - 1;
            console.log(post.likes);
          }
          return post;
        });
        console.log(selectedPostId);
        return newPosts;
        // setSelectedPost({...selectedPost,likes:selectedPost.likes--})
      },
      posts:posts,
      updatePosts: (newPosts) => {
        setPosts(newPosts);
      }
    },

    user:{
      bookmark:{
          bookmarks:bookmarks,
          updateBookmarks: (newBookmark) => {
            let temp = bookmarks;
            temp.push(newBookmark);
            setBookmarks(temp);
            console.log(temp);

          },
          deleteBookmark: (selectedBookmark) => {
            setBookmarks(bookmarks.filter((bookmark) => bookmark != selectedBookmark));
          }
      },
    }
  }
  // const [appInfo, setAppInfo] = useState({
  //   post:{
  //     changeCurrent: () => {},
  //     current:{
  //       username:"",
  //       description:"",
  //       title:""
  //     }
  //   }
  // });

  return (
    <html>
      <body>
        <AppContext.Provider value={appSettings}>
          <Container sx={{overflowY:"hidden"}} disableGutters={true} maxWidth={false}>
            <Box sx={layoutStyle}>
              <Box sx={innerLayoutStyle}>
                <Box sx={{height:"inherit", overflowY:"auto", width:"inherit"}}>
                  {children}
                </Box>
                <Box sx={navigatorContainerStyle}>
                  <Navigator/>
                </Box>
              </Box>
            </Box>
          </Container>
        </AppContext.Provider>
      </body>
    </html>
  )
}

export default Layout;
