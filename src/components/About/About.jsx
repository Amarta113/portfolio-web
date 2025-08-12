import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.svg")}
          alt="Me working on a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>

            <div className={styles.aboutItemText}>
              <h3>Learning Full-Stack Development</h3>
              <p>
                I’m a Computer Science student exploring frontend and backend 
                development with React, TypeScript, Node.js, and Express.js. 
                I enjoy building small projects to strengthen my skills. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h3>AI/ML Enthusiast</h3>
              <p>
                Practicing Python-based AI and ML, including data preprocessing, 
                simple machine learning models, and Retrieval-Augmented Generation (RAG) chatbots. 
                Familiar with tools and frameworks like TensorFlow, Scikit-learn, Langchain and HuggingFace Transformers.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h3>UI & Data Visualization</h3>
              <p>
                  While I enjoy coding more than UI design, I understand the importance of 
                  a good interface. I practice creating clean, user-friendly designs with 
                  HTML, CSS, and Streamlit, and I use Pandas and Matplotlib to visualize 
                  data and tell clear, meaningful stories.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
