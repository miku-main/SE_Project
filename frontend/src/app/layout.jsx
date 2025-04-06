"use client"

import React, { useState } from 'react';
import '../../src/index.css';
import {Box, Container} from "@mui/material"
import Navigator from '../components/global/navigator';
import { AppContext } from './contexts';



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


  const [selectedPost, setSelectedPost] = useState({
    title:"",
    description:"",
    username:"",
    steps:[],
    ingredients:[]
  })
  const appSettings = {
    post:{
      changeCurrent: ({title,description,username,ingredients,steps}) => {
        setSelectedPost({
          title,
          description,
          username,
          ingredients,
          steps
        })
      },
      current:selectedPost
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
          <Container sx={{overflowY:"hidden"}} disableGutters={true} maxWidth={"xl"}>
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
