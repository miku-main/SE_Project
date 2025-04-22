"use client";

import React from "react";
import { SignIn } from "@clerk/nextjs";
import { Box, Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5429c",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 360,
          p: 4,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Belly
        </Typography>
        <SignIn routing="path" path="/login" />
      </Box>
    </Box>
  );
}
