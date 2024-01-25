import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const router = useRouter();
  const base = 'http://localhost:4000/api';

  const login = async ({ email, password }) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${base}/login`,
        {
          email,
          password,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (response.status === 200) {
        router.push('/articles');
        setIsLoading(false);
        const token = response.data.accessToken;
        localStorage.setItem('token', token);
        return token;
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data);
    }
  };

  return { login, isLoading, error };
};

export default useLogin;
