import React from 'react';
import AppLayout from '@components/layout/AppLayout';
import SearchBar from '@components/SearchBar/SearchBar';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import useSWR, { Fetcher } from 'swr';
import { increment } from '@store/shopping-cart';
import { IMovie } from '@local-types/index';

const Index = (props: any) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { search } = router.query;

  const fetcher: Fetcher<IMovie[]> = (input: RequestInfo | URL, init?: RequestInit) =>
    fetch(input, init).then((res) => res.json());
  const { data = [], error, isLoading } = useSWR('/data/movie-item.json', fetcher);

  const handleClickOnImage = (e: any) => {
    const btn = e.currentTarget as HTMLButtonElement;
    const movieCode = btn.dataset.movieCode;
    router.push(`/marketplace/movies/${movieCode}`);
  };

  const handleClick = (nested: string) => {
    dispatch(increment(nested));
  };

  return (
    <AppLayout>
      <div style={{ padding: '2rem 0 2rem 0' }}>
        <SearchBar initialValue={search}></SearchBar>
      </div>
      <Grid container item>
        {data.map((movie) => (
          <div key={movie.id} style={{ padding: '2rem', width: 'min-content' }}>
            <Card variant="outlined">
              <CardActionArea data-movie-code={movie.id} onClick={handleClickOnImage}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="240"
                  image={movie.pic}
                  sx={{ width: '280px' }}
                />
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  style={{ width: '100%' }}
                  color="success"
                  onClick={() => handleClick(movie.id)}
                >
                  Add to cart
                </Button>
              </CardActions>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.name}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Grid>
    </AppLayout>
  );
};

export default Index;
