import React from 'react';
import { Table, TableBody } from '@mui/material';
import CommentItem from './CommentItem';

const Comment = ({
  commentItems = [],
}: {
  commentItems: { id: string; user: string; comment: string }[];
}) => {
  return (
    <Table style={{ borderCollapse: 'collapse' }}>
      <TableBody>
        {commentItems &&
          commentItems.map((item) => <CommentItem key={item.id} commentItem={item} />)}
      </TableBody>
    </Table>
  );
};

export default Comment;
