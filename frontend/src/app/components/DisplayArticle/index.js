import React from 'react';

const DisplayArticle = ({ data }) => {
  return (
    <>
      {data.map(({ article: { id, description, image, title } }) => {
        console.log(id, description, image, title);

        return (
          <div key={id}>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={image} alt={title} />
          </div>
        );
      })}
    </>
  );
};

export default DisplayArticle;
