'use client';

import { useState, useContext } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Sidebar from '@/components/navigation/Sidebar';
import ThemeToggle from '@/components/theme/ThemeToggle';
import { ThemeContext } from '@/components/theme/ThemeRegistry';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { mode } = useContext(ThemeContext);

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={1}
        sx={{ 
          backgroundColor: mode === 'light' ? 'white' : '#121212',
          color: mode === 'light' ? 'text.primary' : 'white',
          zIndex: (theme) => theme.zIndex.drawer + 1 
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            sx={{ mr: 2 }}
          >
            {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-square"
              style={{ color: '#1976d2' }}
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Nexbot Lite
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} sx={{ ml: 'auto' }}>
            <ThemeToggle />
          </Stack>
        </Toolbar>
      </AppBar>

      <Toolbar />

      <Sidebar 
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </>
  );
} 