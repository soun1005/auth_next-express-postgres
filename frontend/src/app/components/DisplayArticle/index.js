import styles from './DisplayArticle.module.css';

const DisplayArticle = ({ data }) => {
  return (
    <>
      {data.map(({ article: { id, description, image, title } }) => {
        return (
          <div className={styles.container} key={id}>
            <div>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.desc}>{description}</p>
            </div>
            <img src={image} alt={title} className={styles.img} />
          </div>
        );
      })}
    </>
  );
};

export default DisplayArticle;
