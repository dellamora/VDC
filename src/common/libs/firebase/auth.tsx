/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useContext, createContext, useState, useEffect } from "react";

import firebaseApp from ".";

import { User, getAuth, onIdTokenChanged } from "firebase/auth";

import nookies from "nookies";

export const AuthContext = createContext<{ user: User | null }>({
  user: null,
});

export const AuthProvider: React.FC = ({ children }): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth(firebaseApp);
  useEffect(() => {
    return onIdTokenChanged(auth, async user => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", { path: "/" });
      } else {
        const token = await user.getIdToken();
        setUser(user);
        nookies.set(undefined, "token", token, { path: "/" });
      }
    });
  }, []);

  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = auth.currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    // clean up setInterval
    return () => clearInterval(handle);
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

interface UseAuthInterface {
  user: User | null;
}

export const useAuth = (): UseAuthInterface => {
  return useContext(AuthContext);
};
