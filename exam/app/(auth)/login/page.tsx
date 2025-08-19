"use client";

import { Box, Typography, Button, Container } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import InputBox from "@/components/controlls/InputBox";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // Mock login - replace with actual authentication
      console.log("Logging in with:", email, password);

      // Redirect to dashboard or home page after successful login
      // router.push('/dashboard');
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-message-square text-blue-600"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
      {/* Title */}
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 600,
          color: "#111827",
          mb: 6,
          fontSize‍: "1.875rem",
        }}
      >
        Nexbot Lite
      </Typography>

      {/* Login Form */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "360px",
          bgcolor: "white",
          borderRadius: 1,
          p: 2,
          boxShadow: "0 3px 3px rgba(0,0,0,0.08)",
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <InputBox
            inputType="email"
            label="Email address"
            value={email}
            setValue={setEmail}
            mainBoxSX={{ mb: 1 }}
            autoComplete="email"
          ></InputBox>

          <InputBox
            inputType="password"
            label="Password"
            value={password}
            setValue={setPassword}
            mainBoxSX={{ mb: 1 }}
            autoComplete="current-password"
          ></InputBox>

    
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              padding: "0.343rem 0.56rem",
              bgcolor: "#2563EB",
              "&:hover": {
                bgcolor: "#1D4ED8",
              },
              textTransform: "none",
              fontSize: "0.875rem",
              fontWeight: 500,
              borderRadius: "0.375rem",
            }}
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
