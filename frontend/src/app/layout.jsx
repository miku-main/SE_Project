"use client"

import React, { useRef, useState } from 'react';
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
  // Add liked parameter to each post when receieved by database
  const likedPosts = useRef([]);
  const posts = useRef(postData.map((post) => {
    return {...post, liked:false}
  }));
  const [selectedPost, setSelectedPost] = useState({
    id:0,
    title:"",
    description:"",
    username:"",
    steps:[],
    ingredients:[],
    likes:0,
    country:"",
    liked:false,
    followed:false
  });
  const [bookmarks, setBookmarks] = useState([]);
  const appSettings = {
    post:{
      changeCurrent: ({id,title,description,username,steps,ingredients,likes,country,liked,followed}) => {
        const post = {
          id: id,
          username: username, 
          likes: likes,
          description:description,
          title: title,
          ingredients: ingredients,
          steps: steps,
          country: country,
          liked:liked,
          followed:followed
      }

      console.log(likedPosts.current);
     
      if(likedPosts.current.indexOf(post) !== -1){
        console.log("Selected")
        likedPosts.current.forEach((post) => {
          if(id === post.id){
            setSelectedPost(post);
          }
        })
      }
      else{
        setSelectedPost({
          id,
          title,
          description,
          username,
          ingredients,
          steps,
          likes,
          country,
          liked,
          followed
        })
      }


      },
      current:selectedPost,
      addLike:(selectedPostId) => {
        //Update likes in database

        //Use this for testing purposes
        const newPosts = posts.current.map((post) => {
          if(post.id === selectedPostId){
            post.likes = post.likes + 1;
            post.liked = true;
          }
          return post;
        });
        console.log(posts);

        return newPosts;
      },
      removeLike:(selectedPostId) => {
        //Update likes in database

        //Use this for testing purposes
       const newPosts =  posts.current.map((post) => {
          if(post.id === selectedPostId){
            post.likes = post.likes - 1;
            post.liked = false;
          }
          return post;
        });
        return newPosts;
        // setSelectedPost({...selectedPost,likes:selectedPost.likes--})
      },
      posts:posts.current,
      updatePosts: (newPosts) => {
        posts.current = newPosts
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
      posts:{
        liked:likedPosts.current,
        addLikedPost: (newPost) => {
          const oldList = likedPosts.current;
          oldList.push(newPost);
          likedPosts.current = oldList; 
         
        },
        removeLikedPost: (id) => {
          const oldList = likedPosts.current.filter((post) => post.id !== id);
          likedPosts.current = oldList; 
        }
      }
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
