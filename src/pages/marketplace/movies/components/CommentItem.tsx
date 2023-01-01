import React from 'react';
import { Box, TableCell, TableRow } from '@mui/material';

const CommentItem = ({ commentItem = {} }: any) => {
  return (
    <TableRow style={{ border: '1px solid grey' }}>
      <TableCell
        style={{
          width: '160px',
          height: '160px',
          borderRight: '2px solid grey',
          verticalAlign: 'baseline',
        }}
      >
        <Box>{commentItem.user || ''}</Box>
      </TableCell>
      <TableCell style={{ verticalAlign: 'baseline' }}>
        <Box>{commentItem.comment || ''}</Box>
      </TableCell>
    </TableRow>
  );
};

export default CommentItem;
