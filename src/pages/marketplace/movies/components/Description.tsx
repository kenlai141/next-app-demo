import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { IDescription } from '@local-types/models';

const Description = ({
  descList = [],
  isLoading,
}: {
  descList: IDescription[];
  isLoading: boolean;
}) => {
  return (
    <>
      <h3 style={{ padding: '16px 0 32px 0' }}>Description</h3>
      {isLoading ? (
        <CircularProgress />
      ) : (
        descList.map((item) => (
          <Box key={item.title} style={{ padding: '16px 0' }}>
            <Typography
              variant="body1"
              color="text.secondary"
              style={{ fontWeight: 'bold', display: 'inline-block', width: '10rem' }}
            >
              {item.title}:
            </Typography>
            &nbsp;&nbsp;
            <Typography variant="body1" color="text.secondary" style={{ display: 'inline-block' }}>
              {item.value}
            </Typography>
          </Box>
        ))
      )}
    </>
  );
};

export default Description;
