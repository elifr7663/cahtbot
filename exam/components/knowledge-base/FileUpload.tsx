'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

interface FileUploadProps {
  onFileSelect: (files: File[]) => void;
}

export default function FileUpload({ onFileSelect }: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFileSelect(acceptedFiles);
  }, [onFileSelect]);

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

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed',
        borderColor: isDragActive ? 'primary.main' : 'divider',
        borderRadius: 1,
        p: 3,
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover': {
          bgcolor: 'action.hover',
        },
      }}
    >
      <input {...getInputProps()} />
      <UploadFileIcon sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />
      {isDragActive ? (
        <Typography>Drop the files here ...</Typography>
      ) : (
        <Typography>
          Drag and drop files here, or click to select files
        </Typography>
      )}
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        DOC, DOCX, PDF, XLSX up to 20MB
      </Typography>
    </Box>
  );
}