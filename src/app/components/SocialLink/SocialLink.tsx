"use client";

import Image from 'next/image';
import styles from './SocialLink.module.css'

export type SocialLinkProps = {
  icon: string;
  url: string;
}

function SocialLink(props: SocialLinkProps) {
  return (
    <a className={styles.link} href={props.url} target="_blank" rel="noreferrer">
      <Image src={props.icon} alt={props.url} width={24} height={24} />
    </a>
  )
}

export default SocialLink;
