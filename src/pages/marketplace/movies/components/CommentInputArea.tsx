import { Box, Button, TextareaAutosize } from '@mui/material';
import React, { useRef } from 'react';

const CommentInputArea = ({ width, height, onSubmit }: any) => {
  const ref = useRef(null);
  return (
    <div>
      <TextareaAutosize
        ref={ref}
        style={{ width, height, padding: '8px', lineHeight: 1.5 }}
        placeholder="Please enter some comment..."
      />
      <Button variant="contained" onClick={() => onSubmit(ref.current)}>
        Submit
      </Button>
    </div>
  );
};

export default CommentInputArea;
