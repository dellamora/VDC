import styled from "styled-components";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "@firebase/auth";
import firebaseApp from "../common/libs/firebase";
import { useAuth } from "../common/libs/firebase/auth";

import axios from "axios";
import Header from "../common/components/header";

const Teste = styled.h1`
  color: red;
`;

export default function Home(): JSX.Element {
  const auth = getAuth(firebaseApp);

  const provider = new GoogleAuthProvider();
  const { user } = useAuth();

  return (
    <>
      <Header />
      <Teste>Hello, {user?.displayName}!</Teste>
      <button
        onClick={() => {
          axios
            .get("/api")
            .then(res => console.log(res))
            .catch(err => console.error(err));
        }}
      >
        clique aqui
      </button>
      {user ? (
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={() => {
            signInWithPopup(auth, provider)
              .then(res => console.log(res))
              .catch(err => console.error(err));
          }}
        >
          login
        </button>
      )}
    </>
  );
}
