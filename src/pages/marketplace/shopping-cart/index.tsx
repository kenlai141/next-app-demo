import AppLayout from '@components/layout/AppLayout';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import QuantityCounter from './components/QuantityCounter';
import _ from 'lodash';
import useSWR, { Fetcher } from 'swr';
import { IMovie, IPurchaseItem } from 'types/models';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { toHKDString } from '@utils/formatString';
import Dialog from '@components/Dialog/CustomDialog';

const Index = (props: any) => {
  const headers = ['Item', 'Description', 'Price', 'Qty', 'Subtotal'];
  const [cartItems, setCartItems] = useState<IPurchaseItem[]>([]);
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  const cartItemsInState = useSelector((state: RootState) => state.shoppingCart.items);

  const enumerateItems = (movies: IMovie[]): IPurchaseItem[] => {
    const enu = _.values(_.groupBy(cartItemsInState)).reduce((acc, item: string[]) => {
      acc.set(item[0], item.length);
      return acc;
    }, new Map<string, number>());

    const movieMap = movies.reduce((acc, item: IMovie) => {
      acc.set(item.id, item);
      return acc;
    }, new Map<string, IMovie>());

    return Array.from(enu.entries()).map(([id, qty]) => {
      return {
        ...movieMap.get(id),
        qty,
      } as IPurchaseItem;
    });
  };
  const fetcher: Fetcher<void> = (input: RequestInfo | URL, init?: RequestInit) =>
    fetch(input, init)
      .then((res) => res.json())
      .then((data) => {
        const res = enumerateItems(data);
        setCartItems(res);
      });
  const { error, isLoading } = useSWR('/data/movie-item.json', fetcher);

  const handleChange = (id: string, newQty: number) => {
    if (newQty === 0)
      setCartItems((prev) => {
        _.remove(prev, { id });
        return [...prev];
      });
    else
      setCartItems((prev) => {
        const matchedIdx = _.findIndex(prev, { id });
        prev[matchedIdx].qty = newQty;
        return [...prev];
      });
  };
  const calculateTotal = useCallback(() => {
    return _.sumBy(cartItems, (item: IPurchaseItem) => Number(item.price) * item.qty);
  }, [cartItems]);

  const openCheckoutDialog = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = (action: any) => {
    setDialogOpen(false);
  };

  return (
    <AppLayout>
      <h2 style={{ padding: '24px 0' }}>Shopping Cart</h2>
      <div style={{ display: 'block', padding: '20px 0 40px 0' }}>
        <Stack direction={'row'}>
          <Box style={{ flexGrow: 1 }}>
            <Table style={{ borderCollapse: 'collapse' }}>
              <TableHead>
                <TableRow>
                  {headers.map((h) => (
                    <TableCell key={h} align={'center'}>
                      {h}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow
                    key={item.id}
                    style={{ borderTop: '2px solid grey', borderBottom: '2px solid grey' }}
                  >
                    <TableCell style={{ width: '12%' }}>
                      <Card variant="outlined" style={{ backgroundColor: '#FFF0', border: 'none' }}>
                        <CardActionArea data-movie-code={item.id}>
                          <CardMedia
                            component="img"
                            alt="green iguana"
                            height="180"
                            image={item.pic}
                            style={{ objectFit: 'contain', width: '180px' }}
                          />
                        </CardActionArea>
                      </Card>
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline' }}>
                      <Box style={{ display: 'block' }}>
                        <Typography variant={'h5'} style={{ paddingBottom: '1rem' }}>
                          {item.name}
                        </Typography>
                        <Typography variant={'body1'}>{item.desc}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell style={{ width: '8%' }}>{toHKDString(item.price)}</TableCell>
                    <TableCell align={'center'} style={{ width: '8%' }}>
                      <QuantityCounter
                        qty={item.qty}
                        onChange={(newQty) => handleChange(item.id, newQty)}
                      ></QuantityCounter>
                    </TableCell>
                    <TableCell align={'center'} style={{ width: '10%' }}>
                      {toHKDString(Number(item.price) * item.qty)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <Box
            style={{
              flexGrow: 0,
              backgroundColor: '#AAAAAA',
              height: '420px',
              width: '200px',
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" style={{ padding: '20px 30px' }}>
              Total
            </Typography>
            <Typography variant="body1" style={{ padding: '20px 20px' }}>
              {toHKDString(calculateTotal())}
            </Typography>
            <Button variant="contained" onClick={openCheckoutDialog}>
              Check out
            </Button>
            <Dialog
              content={'Are you going to checkout?'}
              onClose={handleDialogClose}
              open={isDialogOpen}
              title={'Check Out'}
            />
          </Box>
        </Stack>
      </div>
    </AppLayout>
  );
};

export default Index;
