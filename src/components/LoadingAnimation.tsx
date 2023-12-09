import React from 'react';
import styles from '../styles/loadingAnimation.module.css'; 

const LoadingAnimation: React.FC = () => {
  return (
    <div className={styles.loadingSpinner}>
        <div className={styles.loadingContent}>
        <h2> one more second ...</h2>
      </div>
    </div>
  );
};

export default LoadingAnimation;
