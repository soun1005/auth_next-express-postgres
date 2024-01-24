'use client';

import { useRouter } from 'next/navigation';

const ButtonWithLink = ({ text, page, className }) => {
  const router = useRouter();

  const handleOnClick = (route = '/') => {
    router.push(`${route}`);
  };

  return (
    <button
      className={className}
      type="button"
      onClick={() => handleOnClick(page)}
    >
      <p>{text}</p>
    </button>
  );
};

export default ButtonWithLink;
