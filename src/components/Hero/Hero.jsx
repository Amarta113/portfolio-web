import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Amarta!</h1>
        <p className={styles.description}>
          I’m a Computer Science student and beginner developer passionate about 
          AI, Machine Learning, and web development. I enjoy contributing to 
          open source projects, even though I’m still building up to making 
          major contributions. I love working in teams, collaborating with others, 
          and learning something new every day.
        </p>
        <a href="mailto:amarta.waghani010@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};