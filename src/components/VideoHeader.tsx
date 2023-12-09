import React from 'react';
import styles from '../styles/videoHeader.module.css';

const VideoHeader: React.FC = () => {
  return (
    <div className={styles.videoHeader}>
      <video
        autoPlay
        muted
        loop
        className={styles.video}
      >
        <source src="/images/video.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}>
        <h1 className={styles.heading}>DARAMOLA MARIAM</h1>
      </div>
    </div>
  );
};

export default VideoHeader;
