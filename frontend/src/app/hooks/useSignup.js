import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const router = useRouter();
  const base = 'http://localhost:4000/api';

  const signup = async ({ email, password, firstName, lastName }) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${base}/signup`,
        {
          firstName,
          lastName,
          email,
          password,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (response.status === 200) {
        router.push('/');
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data);
    }
  };

  return { signup, isLoading, error };
};

export default useSignup;
