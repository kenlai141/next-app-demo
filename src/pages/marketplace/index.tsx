import React from 'react';
import AppLayout from '@components/layout/AppLayout';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import styles from './index.module.css';
import SearchBar from '@components/SearchBar/SearchBar';
import useSWR, { Fetcher } from 'swr';

type TPromo = {
  src: string;
  alt: string;
};
const Index = (props: any) => {
  const fetcher: Fetcher<TPromo[]> = (input: RequestInfo | URL, init?: RequestInit) =>
    fetch(input, init).then((res) => res.json());
  const {
    data: promos = [],
    error,
    isLoading,
  } = useSWR('/next-app-demo/data/carousel-movie.json', fetcher);

  return (
    <AppLayout>
      <div style={{ padding: '2rem 0' }}>
        <Carousel>
          {promos.map((movie, idx) => (
            <Paper
              key={idx}
              style={{ height: '540px', textAlign: 'center', backgroundColor: '#333333' }}
            >
              <img
                src={movie.src}
                alt={movie.alt}
                style={{ maxHeight: '100%' }}
                className={styles.undraggable}
              />
            </Paper>
          ))}
        </Carousel>
      </div>
      <div>
        <SearchBar />
      </div>
    </AppLayout>
  );
};

export default Index;
