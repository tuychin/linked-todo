import React, { useState, useEffect, useContext, createContext } from 'react';
import nookies from 'nookies';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../services/firebaseClient';

const AuthContext = createContext({});

const login = async () => {
  try {
    await signInWithPopup(auth, new GoogleAuthProvider());
    window.location.href = '/';
  } catch (err) {
    alert(err);
  }
};

const logout = async () => {
  await auth.signOut();
  window.location.href = '/login';
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, 'token', '', {});
        return;
      }

      const token = await user.getIdToken();
      setUser(user);
      nookies.set(undefined, 'token', token, {});
    });
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
