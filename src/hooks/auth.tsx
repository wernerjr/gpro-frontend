import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/apiClient';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: object;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  /* Exemplo de login verificando se o token ja esta guardado no local storage */
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GPRO_Shenron:token');
    const user = localStorage.getItem('@GPRO_Shenron:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    /* Exemplo de login guardando os dados do usuário e token no local storage
    (se quisermos guardar essa informação em um local mais seguro, podemos optar por um cookie assinado) */

    /*
    const response = await api.post('url_autentication', { email, password });
    */

    /* Mock */
    const response = {
      data: {
        token: 'dgfkbdhfliagbf342134a',
        user: { name: 'Shenron' },
      },
    };

    const { token, user } = response.data;

    localStorage.setItem('@GPRO_Shenron:token', token);
    localStorage.setItem('@GPRO_Shenron:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    /* Exemplo de logout removendo os dados do usuário e token no local storage */
    localStorage.removeItem('@GPRO_Shenron:token');
    localStorage.removeItem('@GPRO_Shenron:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error();
  }

  return context;
}

export { AuthProvider, useAuth };
