"use client"

import React, { useState } from 'react';
import '../../src/index.css';
import {Box, Container} from "@mui/material"
import Navigator from '../components/global/navigator';
import { AppContext } from './contexts';
import { ClerkProvider } from '@clerk/nextjs'
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"



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
      <html lang="en">
        <body>
          <ClerkProvider>
              <div>
                  <div>
                      {/*
                      <Image src="/lol.svg" height={40} width={40} alt="Logo" />
                      */}
                      <h1>
                          Belly
                      </h1>

                  </div>
                  <ClerkLoading>
                  </ClerkLoading>
                  <ClerkLoaded>
                      <SignedIn>
                          <UserButton />
                      </SignedIn>
                      <SignedOut>
                          <SignInButton mode="modal" aftersigninurl="" aftersignupurl="">
                              <button>Login</button>
                          </SignInButton>
                      </SignedOut>
                  </ClerkLoaded>
              </div>
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
          </ClerkProvider>
        </body>
      </html>
  )
}

export default Layout;
