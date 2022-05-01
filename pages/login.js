import styled from "styled-components";
import Head from "next/head";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
const login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://imgs.search.brave.com/veKebSEPmOQywtiQ1yoRRraPWHi5Y2gbs424aZB74zs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9taXNz/aW5ndHJpY2tzLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wNS93aGF0c2Fw/cC1sb2dvLWljb25l/LnBuZw" />
        <Button onClick={signIn} variant="Outlined">
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  padding: 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 50px;
`;
