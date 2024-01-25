'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import DisplayArticle from '../components/DisplayArticle';
import useGetArticle from '../hooks/useGetArticle';
import styles from './articles.module.css';
import Loading from '../components/Loading';

const page = () => {
  const { isLoading, articles } = useGetArticle();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      redirect('/');
    }
  }, []);

  return (
    <div className={styles.container}>
      {isLoading && <Loading />}
      <h1>articles</h1>
      <div className={styles.articleWrap}>
        <DisplayArticle data={articles} />
      </div>
    </div>
  );
};

export default page;
