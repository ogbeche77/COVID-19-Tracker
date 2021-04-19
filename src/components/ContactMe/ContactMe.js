import React from 'react';
import styles from './index.module.css';


export const ContactMe = () => {
  return (
    <div className={styles.background}>
      <div className={styles.dialog}>
        <div className={styles.dialogInner}>
          <button  className={styles.closeButton}>
            
          </button>
          <div className={styles.inviteWrapper}>
            <p>Are you sure you want to end this chat?</p>
          </div>
         
        </div>
      </div>
    </div>
  );
};