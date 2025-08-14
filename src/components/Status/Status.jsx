import React, { useState } from "react";
import styles from "./Status.module.css";

export const Status = () => {
  const [status, setStatus] = useState({
    statement: "Today is Pakistan's Independence Day. I feel proud of where I am, standing with my nation. As part of the nation's youth, I believe it is now my responsibility to contribute to its progress. ",
    mood: "🇵🇰"
  });

  const updateStatus = (field, value) => {
    setStatus(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className={styles.container} id="status">
      <h2 className={styles.title}>Today's Status</h2>
      <div className={styles.statusCard}>
        <div className={styles.statusHeader}>
          <span className={styles.mood}>{status.mood}</span>
          <span className={styles.date}>{new Date().toLocaleDateString()}</span>
        </div>
        
        <div className={styles.statusContent}>
          <div className={styles.statusItem}>
            <h3>💡 What's new today</h3>
            <p>{status.statement}</p>
          </div>
        </div>
        
        <div className={styles.statusFooter}>
          <small>💡I update this daily to track learning, struggling, debugging journey!</small>
        </div>
      </div>
    </section>
  );
};
