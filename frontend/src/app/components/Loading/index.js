import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ldsHeart}>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
