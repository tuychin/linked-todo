import type { NextPage } from 'next'
import Head from 'next/head'
import nookies from 'nookies';
import { verifyIdToken } from '../../services/firebaseAdmin';
import { useAuth } from '../../context/Auth';
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

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const { uid } = await verifyIdToken(cookies.token);
  
  if (uid) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();

    return {
      props: {}
    };
  }

  return {
    props: {}
  };
}

const Login: NextPage = () => {
  const { login } = useAuth();

  return (
    <Container>
      <Head>
        <title>Login | Linked-todo</title>
      </Head>

      <Typography variant="h3">
        Login page!
      </Typography>
      <Button variant="contained" onClick={login}>
        Login with google
      </Button>
    </Container>
  )
}

export default Login;

