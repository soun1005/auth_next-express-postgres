'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import DisplayArticle from '../components/DisplayArticle';
import useGetArticle from '../hooks/useGetArticle';
import styles from './articles.module.css';
import Loading from '../components/Loading';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/navigation';

const page = () => {
  const { isLoading, articles } = useGetArticle();
  const { removeToken } = useAuth();
  const router = useRouter();

  const handleOnClick = () => {
    removeToken();
    router.push('/');
  };

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      redirect('/');
    }
  }, [token]);

  return (
    <div className={styles.container}>
      {isLoading && <Loading />}
      <div className={styles.titleWrap}>
        <h1>articles</h1>
        <button className={`${styles.btn} logoutBtn`} onClick={handleOnClick}>
          Log out
        </button>
      </div>
      <div className={styles.articleWrap}>
        <DisplayArticle data={articles} />
      </div>
    </div>
  );
};

export default page;
