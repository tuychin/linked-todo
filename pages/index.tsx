import type { NextPage } from 'next'
import Head from 'next/head'
import nookies from 'nookies';
import { verifyIdToken } from '../services/firebaseAdmin';
import { useAuth } from '../context/Auth';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const { uid, email } = await verifyIdToken(cookies.token);

  if (!uid) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
  
    return {
      props: {}
    };
  }

  return {
    props: { email },
  };
}

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const Home: NextPage = ({ email }) => {
  const { logout } = useAuth();

  return (
    <Container>
      <Head>
        <title>Home | Linked-todo</title>
      </Head>

      <Typography variant="h1">
        {`Your email: ${email}`}
      </Typography>
      <Button onClick={logout} variant="contained" color="warning">
        Logout
      </Button>
    </Container>
  )
}

export default Home
