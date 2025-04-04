import styles from './Main.module.css'
import Section from '../Section/Section';

import wslogo from '../../../../public/weksoftware.png';
import aelogo from '../../../../public/antievil.png';
import toolslogo from '../../../../public/tools.png';

function Main() {
  return (
    <main className={styles.main}>
      <Section
        title="My projects"
        content={[
          {
            title: "AntiEvil",
            description: "Discord bot for protecting servers",
            img: aelogo.src,
            url: "https://weksoftware.ru/antievil"
          },
          {
            title: "weksoftware.ru",
            description: "Website for a team of developers",
            img: wslogo.src,
            url: "https://weksoftware.ru"
          },
          {
            title: "weks.dev",
            description: "Yet another website for weksoftware",
            img: wslogo.src,
            url: "https://weks.dev"
          },
          {
            title: "d.weks.dev",
            description: "This website",
            img: wslogo.src,
            url: "https://github.com/DenisBasmanow/pw"
          },
          {
            title: "MironBot",
            description: "Discord bot that works with stuff from tools.weksoftware",
            img: toolslogo.src,
            url: "https://github.com/weksoftware/miron"
          },
          {
            title: "AntiEvil logs viewer",
            description: "Lets you view saved Discord messages",
            img: toolslogo.src,
          },
        ]}
      />

      <Section
        title="What I use"
        content={[
          {
            title: "[🎷] Next.js",
            description: "React framework",
            url: "https://nextjs.org"
          },
          {
            title: "[🎷] React",
            description: "Javascript library for web & native apps",
            url: "https://react.dev"
          },
          {
            title: "[🍋‍🟩] FastAPI",
            description: "Python framework for building APIs",
            url: "https://fastapi.tiangolo.com"
          },
          {
            title: "[🍋‍🟩] Disnake",
            description: "Python library for Discord API",
            url: "https://disnake.dev"
          }
        ]}
      />

      <Section
        title="My socials"
        content={[
          {
            icon: "/github.svg",
            url: "https://github.com/DenisBasmanow"
          },
          {
            icon: "/discord.svg",
            url: "https://discord.com/users/405714652824338434"
          },
          {
            icon: "/telegram.svg",
            url: "https://t.me/denis_wsdev"
          }
        ]}
      />
    </main>
  )
}

export default Main;
