'use client';

import { useContext, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ThemeContext } from '@/components/theme/ThemeRegistry';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  alpha,
  ClickAwayListener,
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupIcon from '@mui/icons-material/Group';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  { 
    text: 'Conversations', 
    icon: <ChatBubbleOutlineIcon />, 
    path: '/conversations', 
  },
  { 
    text: 'Knowledge Base', 
    icon: <MenuBookIcon />, 
    path: '/knowledge-base',
  },
  { 
    text: 'Analytics', 
    icon: <AnalyticsIcon />, 
    path: '/analytics',
  },
  { 
    text: 'Agents', 
    icon: <GroupIcon />, 
    path: '/agents',
  },
];

export default function Sidebar({ open, onClose }: SidebarProps) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const router = useRouter();
  const pathname = usePathname();

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
    
      if (open) {
        const sidebarElement = document.querySelector('.MuiDrawer-paper');
        const menuButton = document.querySelector('#menu-toggle-button');
        
        if (sidebarElement && 
            !sidebarElement.contains(event.target as Node) && 
            menuButton && 
            !menuButton.contains(event.target as Node)) {
          onClose();
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [open, onClose]);

  const handleNavigation = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      hideBackdrop={true}
      sx={{
        '& .MuiDrawer-paper': {
          marginTop: '64px',
          height: 'calc(100% - 64px)',
          backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
          color: isDark ? '#ffffff' : 'text.primary',
          left: 0,
          border: 'none',
          zIndex: 1200,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
        },
        '& .MuiBackdrop-root': {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              component="div"
              key={item.text}
              onClick={() => handleNavigation(item.path)}
              sx={{
                bgcolor: pathname === item.path ? 
                  (isDark ? alpha('#2196f3', 0.15) : alpha('#2196f3', 0.08)) : 
                  'transparent',
                '&:hover': {
                  bgcolor: pathname === item.path ?
                    (isDark ? alpha('#2196f3', 0.25) : alpha('#2196f3', 0.12)) :
                    (isDark ? alpha('#ffffff', 0.05) : alpha('#000000', 0.04))
                }
              }}
            >
              <ListItemIcon 
                sx={{ 
                  color: pathname === item.path ? 'primary.main' : 'inherit',
                  minWidth: '40px',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{
                  color: pathname === item.path ? 'primary.main' : 'inherit'
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}