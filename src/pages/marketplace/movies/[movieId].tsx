import React, { useState } from 'react';
import AppLayout from '@components/layout/AppLayout';
import { useRouter } from 'next/router';
import { Box, Stack } from '@mui/material';
import Description from './components/Description';
import useSWR from 'swr';
import Image from '@components/Image/Image';
import Comment from './components/Comment';
import { IComment, IDescription, IMovie } from '@local-types/models';
import CommentInputArea from './components/CommentInputArea';

enum DataType {
  MOVIE = 'MOVIE',
  COMMENT = 'COMMENT',
}

const Index = (props: any) => {
  const router = useRouter();
  const { movieId } = router.query;
  const [desc, setDesc] = useState<IDescription[]>([]);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [commentItems, setCommentItems] = useState<IComment[]>([]);

  const renderMovieItem = (data: IMovie[]) => {
    const movie = data.find((movie) => movie.id === movieId);
    if (!movie) return;

    setImageUrl(movie.pic);

    const desc: IDescription[] = [
      {
        title: 'name',
        value: movie.name,
      },
      { title: 'description', value: movie.desc },
      { title: 'duration', value: movie.duration },
      { title: 'rating', value: movie.rating },
    ];

    setDesc(desc);
  };

  const fetcher: (params: DataType[]) => Promise<void> = async (params: DataType[]) => {
    const requests = {
      MOVIE: { url: '/data/movie-item.json', callback: renderMovieItem },
      COMMENT: { url: '/data/comment-item.json', callback: (data: any) => setCommentItems(data) },
    };

    const f = (url: string, cb: (data: any) => void) =>
      fetch(url)
        .then((r) => r.json())
        .then((data) => cb(data));

    await Promise.all(params.map((param) => f(requests[param].url, requests[param].callback)));
  };

  const { error, isLoading } = useSWR([DataType.MOVIE, DataType.COMMENT], fetcher);

  const handleSubmitComment = (textAreaEl: HTMLTextAreaElement) => {
    const comment = textAreaEl.value;
    textAreaEl.value = '';

    setCommentItems((prev) => {
      const newId = prev[prev.length - 1].id + 1;
      return [
        ...prev,
        {
          id: newId,
          user: 'anonymous_user',
          comment,
          time: new Date().toISOString(),
        },
      ];
    });
  };

  return (
    <AppLayout>
      <Box style={{ padding: '16px 8px 16px 8px' }}>
        <h2>{movieId}</h2>
      </Box>
      <Stack direction="row" spacing={8}>
        <Box>
          <Image
            src={imageUrl}
            alt=""
            width={400}
            height={600}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Box>
        <Box height={600} width={2} style={{ margin: '5px 48px', border: '1px dashed' }}></Box>
        <Box height={600}>
          <Description descList={desc} isLoading={isLoading} />
        </Box>
      </Stack>
      <Box style={{ padding: '32px 0 16px 0', borderBottom: '2px solid grey', width: '100%' }}>
        <h3>Comments</h3>
      </Box>
      <Box style={{ padding: '24px 0' }}>
        <Comment commentItems={commentItems} />
      </Box>
      <Box style={{ padding: '32px 0 16px 0', width: '100%' }}>
        <CommentInputArea
          width={'100%'}
          height={'120px'}
          onSubmit={handleSubmitComment}
        ></CommentInputArea>
      </Box>
    </AppLayout>
  );
};

export default Index;
