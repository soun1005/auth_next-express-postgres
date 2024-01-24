'use client';

import { useRouter } from 'next/navigation';

const Button = ({ text, page }) => {
  const router = useRouter();

  const handleOnClick = (route = '/') => {
    router.push(`${route}`);
  };

  return (
    <button type="button" onClick={() => handleOnClick(page)}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
