import type { NextPage } from 'next'
import Head from 'next/head'
import { signInWithGoogle } from '../services/firebase';
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

const Login: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Login | Linked-todo</title>
      </Head>

      <Typography variant="h3">
        Login page!
      </Typography>
      <Button variant="contained" onClick={signInWithGoogle}>
        Sign in with google
      </Button>
    </Container>
  )
}

export default Login;

