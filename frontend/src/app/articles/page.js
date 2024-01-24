'use client';

import DisplayArticle from '../components/DisplayArticle';
import useGetArticle from '../hooks/useGetArticle';

const page = () => {
  const { isLoading, error, articles } = useGetArticle();
  console.log(articles);

  return (
    <div>
      articles
      <DisplayArticle data={articles} />
    </div>
  );
};

export default page;
