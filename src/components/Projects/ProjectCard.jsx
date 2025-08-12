import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, video },
}) => {
  return (
    <div className={styles.card}>
      {/* LEFT SIDE - DESCRIPTION */}
      <div className={styles.left}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Github
          </a>
          <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Video
          </a>
        </div>
      </div>

      {/* RIGHT SIDE - VIDEO */}
      <div className={styles.right}>
        {video ? (
          <div className={styles.videoWrapper}>
            <iframe
              src={`${video}?vq=hd1080&rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              frameBorder="0"
            ></iframe>
          </div>
        ) : (
          <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}
          />
        )}
      </div>
    </div>
  );
};
