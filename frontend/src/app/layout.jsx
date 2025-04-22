// app/layout.jsx
"use client";

import React, { useState } from "react";
import { AppContext } from "./contexts";
import { connectMongoDB } from "../../config/mongodb";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from "@clerk/nextjs";
import Navigator from "../components/global/navigator";
import { Container, Box } from "@mui/material";

connectMongoDB();

export default function RootLayout({ children }) {
  // 1. Your post‑selection state & context
  const [selectedPost, setSelectedPost] = useState({
    title: "",
    description: "",
    username: "",
    steps: [],
    ingredients: [],
  });
  const appSettings = {
    post: {
      changeCurrent: ({ title, description, username, ingredients, steps }) =>
        setSelectedPost({ title, description, username, ingredients, steps }),
      current: selectedPost,
    },
  };

  return (
    <html lang="en">
      {/* this <head/> lets Next inject title/meta etc */}
      <head />
      <body style={{ margin: 0 }}>
        <ClerkProvider>
          <Box sx={{ bgcolor: "#D9D9D9", minHeight: "100vh" }}>
            <SignedIn>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100vh",
                }}
              >
                {/* — Header — */}
                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h1>Belly</h1>
                  <UserButton />
                </Box>

                {/* — Main + Navigator — */}
                <AppContext.Provider value={appSettings}>
                  <Container
                    disableGutters
                    maxWidth={false}
                    sx={{
                      flex: 1,
                      display: "flex",
                      position: "center",
                    }}
                  >
                    <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
                      {children}
                    </Box>
                    <Box
                      sx={{
                        position: "fixed",
                        bottom: "5%",
                        right: "50%",
                      }}
                    >
                      <Navigator />
                    </Box>
                  </Container>
                </AppContext.Provider>
              </Box>
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </Box>
        </ClerkProvider>
      </body>
    </html>
  );
}
