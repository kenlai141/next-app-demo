import React, { MouseEventHandler, useState } from 'react';
import { Button, Input, Stack } from '@mui/material';
import { useRouter } from 'next/router';

const SearchBar = (props: any) => {
  const { initialValue } = props;
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>(initialValue || '');

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (keyword) router.push(`/marketplace/movies?${new URLSearchParams({ search: keyword })}`);
  };

  const handleTextInput = (e: any) => {
    setKeyword(e.currentTarget.value);
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <div
        style={{
          padding: '0 16px 0 1rem',
          border: '1px solid',
          borderColor: 'var(--purple)',
          borderRadius: '1rem',
          width: '60%',
          minWidth: '200px',
        }}
      >
        <Input
          placeholder={'Enter a movies'}
          disableUnderline={true}
          style={{ width: '100%' }}
          value={keyword}
          onChange={handleTextInput}
        />
      </div>
      <Button variant="contained" onClick={handleSubmit} autoFocus>
        Search
      </Button>
    </Stack>
  );
};

export default SearchBar;
