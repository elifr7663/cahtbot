'use client';

import { Box, TextField } from '@mui/material';
import { SxProps } from '@mui/system';

interface InputBoxProps {
  inputType: string;
  label: string;
  value: string;
  setValue: (value: string) => void;
  mainBoxSX?: SxProps;
  autoComplete?: string;
}

export default function InputBox({ 
  inputType, 
  label, 
  value, 
  setValue, 
  mainBoxSX,
  autoComplete 
}: InputBoxProps) {
  return (
    <Box sx={mainBoxSX}>
      <TextField
        type={inputType}
        label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        fullWidth
        autoComplete={autoComplete}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '0.375rem',
          }
        }}
      />
    </Box>
  );
}
