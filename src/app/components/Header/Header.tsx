"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const allEmojis = ["🍇", "🍈", "🍉", "🍊", "🍌", "🍍", "🥝", "🍅", "🍆", "🌶️", "🫒", "🥥", "🥒", "🥨", "🥐", "🥖", "🍙", "☕", "🍵", "🫖", "🥢", "🦧", "🦄", "🦥", "🦦", "🦫", "🦔", "🦆", "🐤", "🐧", "🦩", "🐸", "🐢", "🐊", "🦎", "🐟", "🐙", "🦀", "🦐", "🐝", "🐌", "🍀", "🪕", "📸", "😶‍🌫️", "🫩", "🤓", "🪵", "🛩️", "🪂", "🌈"];
  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    setEmoji(allEmojis.at(Math.floor(Math.random() * allEmojis.length)) || allEmojis[0]);
  }, [])

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Hi! <span className={styles.emoji}>{emoji}</span></h1>
      <div className={styles.separator}></div>
      <p className={styles.subtext}>
        I&apos;m Denis. And I&apos;m a developer. <a className={styles.arch} href="https://youtu.be/cC1CqyCN9Q0" target="_blank" rel="noreferrer">I use arch btw</a>
      </p>
    </header>
  )
}

export default Header;

