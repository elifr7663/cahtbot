'use client';

import { useContext, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  alpha,
  CircularProgress,
} from '@mui/material';
import { ThemeContext } from '@/components/theme/ThemeRegistry';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DownloadIcon from '@mui/icons-material/Download';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import { useDropzone } from 'react-dropzone';

interface UploadingFile extends File {
  id: string;
  progress?: number;
}

interface KnowledgeFile {
  id: string;
  name: string;
  category: string;
  date: string;
  size: string;
}

export default function KnowledgeBasePage() {
  const { mode } = useContext(ThemeContext);
  const isDark = mode === 'dark';
  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  
  const [files, setFiles] = useState<KnowledgeFile[]>([
    {
      id: '1',
      name: 'Second Set of FAQ\'s - AI Chatbot.pdf',
      category: 'No category',
      date: '3/4/2025',
      size: '2.5MB'
    },
    // Add more sample files here
  ]);

  const onDrop = (acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      ...file,
      id: Math.random().toString(36).substr(2, 9)
    }));
    setUploadingFiles(prev => [...prev, ...newFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.ms-excel': ['.xlsx'],
    },
    maxSize: 20971520, // 20MB
  });

  const removeUploadingFile = (fileId: string) => {
    setUploadingFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const handleUpload = async () => {
    if (uploadingFiles.length === 0) return;
    
    setIsUploading(true);
    try {
      // Simulate upload process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Add files to the list
      const newFiles = uploadingFiles.map(file => ({
        id: file.id,
        name: file.name,
        category: 'No category',
        date: new Date().toLocaleDateString(),
        size: `${(file.size / (1024 * 1024)).toFixed(2)}MB`
      }));
      
      setFiles(prev => [...prev, ...newFiles]);
      setUploadingFiles([]); // Clear uploading files
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Box sx={{ 
      p: 4, // کاهش padding
      maxWidth: 1200, 
      margin: '0 auto',

    }}>
      {/* Header */}
      <Typography variant="h5" sx={{ 
        mb: 1,
        color: isDark ? 'rgba(255, 255, 255, 1)' :'',
        fontSize: '1.75rem',
        letterSpacing: '0.02em',
        textShadow: isDark ? '0 0 1px rgba(255, 255, 255, 0.5)' : 'none'
      }}>
        Knowledge Base
      </Typography>
      <Typography variant="body1" sx={{ 
        mb: 3,
        color: isDark ? 'rgba(255, 255, 255, 0.87)' : ''
      }}>
        Upload and manage your knowledge base documents for integration
      </Typography>
    
      {/* Upload Section with Drag & Drop */}
      <Paper
        {...getRootProps()}
        sx={{
          p: 4,
          mt: 2,
          bgcolor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
          border: '2px dashed',
          borderColor: isDragActive 
            ? 'primary.main' 
            : (isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.12)'),
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          '&:hover': {
            borderColor: 'primary.main',
            bgcolor: isDark ? 'rgba(255, 255, 255, 0.08)' : alpha('#1976d2', 0.04),
          }
        }}
      >
        <input {...getInputProps()} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <UploadFileIcon sx={{ 
            fontSize: 40,
            color: isDragActive ? 'primary.main' : (isDark ? 'rgba(255, 255, 255, 0.87)' : 'primary.main')
          }} />
          <Typography variant="h6" sx={{ 
            mt: 2,
            mb: 1,
            color: isDragActive ? 'primary.main' : (isDark ? 'rgba(255, 255, 255, 0.87)' : 'inherit')
          }}>
            {isDragActive ? 'Drop files here' : 'Upload Document'}
          </Typography>
          <Typography sx={{ 
            color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
            textAlign: 'center',
            fontSize: '0.875rem'
          }}>
            Click to upload or drag and drop<br />
            DOC, DOCX, PDF, XLSX up to 20MB
          </Typography>
        </Box>
      </Paper>
    
      {/* دکمه بارگذاری در وسط */}
      <Box sx={{ mt: 2, mb: 2, display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          startIcon={isUploading ? <CircularProgress size={20} color="inherit" /> : <CloudUploadIcon />}
          onClick={handleUpload}
          disabled={isUploading}
        >
          {isUploading ? 'Uploading...' : 'Upload Files'}
        </Button>
      </Box>
    
      {/* Files List */}
      <Paper sx={{
        mt: 4,
        bgcolor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
        overflow: 'hidden',
      }}>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            p: 2, 
            borderBottom: 1, 
            borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'divider',
            fontWeight: 500,
            color: isDark ? 'rgba(255, 255, 255, 0.87)' : 'inherit'
          }}
        >
          Knowledge Base Files
        </Typography>
        <List sx={{ p: 0 }}>
          {files.map((file) => (
            <ListItem
              key={file.id}
              sx={{
                borderBottom: '1px solid',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.12)',
                '&:hover': {
                  bgcolor: isDark ? 'rgba(255, 255, 255, 0.08)' : alpha('#000000', 0.04),
                },
              }}
            >
              <ListItemIcon>
                <InsertDriveFileIcon sx={{ color: isDark ? 'primary.light' : 'primary.main' }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ 
                    color: isDark ? 'rgba(255, 255, 255, 0.87)' : '#000000',
                    fontWeight: 500
                  }}>
                    {file.name}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" sx={{ 
                    color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'
                  }}>
                    {`${file.category} • ${file.date}`}
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <IconButton 
                  size="small"
                  sx={{ 
                    color: isDark ? '#ffffff' : 'inherit',
                    mr: 1
                  }}
                >
                  <DownloadIcon fontSize="small" />
                </IconButton>
                <IconButton 
                  size="small"
                  sx={{ 
                    color: isDark ? '#ff1744' : 'error.main'
                  }}
                >
                  <DeleteOutlineIcon fontSize="small" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}