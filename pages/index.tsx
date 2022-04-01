import type { NextPage } from 'next'
import Head from 'next/head'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Home | Linked-todo</title>
      </Head>

      <Typography variant="h1">
        Home page!
      </Typography>
      <Button variant="contained" color="warning">
        Logout
      </Button>
    </Container>
  )
}

export default Home
