"use client";

import Image from 'next/image';
import styles from './InfoCard.module.css'

export type InfoCardProps = {
  img?: string;
  url?: string;
  title: string;
  description: string;
}

function InfoCard(props: InfoCardProps) {
  const content = (
    <>
      {props.img && <Image src={props.img} alt={props.title} width={48} height={48} className={styles.img} />}

      <div className={styles.textBlock}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </>
  );

  if (props.url) {
    return (
      <a className={`${styles.card} ${styles.hoverable}`} href={props.url} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  } else {
    return (
      <div className={styles.card}>
        {content}
      </div>
    )
  }
}

export default InfoCard;
