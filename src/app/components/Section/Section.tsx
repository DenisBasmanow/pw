import styles from './Section.module.css'
import InfoCard, { InfoCardProps } from "../InfoCard/InfoCard";
import SocialLink, { SocialLinkProps } from '../SocialLink/SocialLink';

type SectionProps = {
  title: string;
  content: InfoCardProps[] | SocialLinkProps[];
}

function Section(props: SectionProps) {
  let content: React.ReactNode[] = [];
  let contentStyles: string = "";

  if (props.content.length > 0 && (props.content[0] as InfoCardProps).title !== undefined) {
    content = props.content.map((card, index) => (
      <InfoCard
        {...(card as InfoCardProps)}
        key={index}
      />
    ))
    contentStyles = styles.cards;
  } else if (props.content.length > 0 && (props.content[0] as SocialLinkProps).url !== undefined) {
    content = props.content.map((card, index) => (
      <SocialLink
        {...(card as SocialLinkProps)}
        key={index}
      />
    ))
    contentStyles = styles.socials;
  }

  return (
    <div className={styles.section}>
      <div className={styles.title}>{props.title}</div>
      <div className={contentStyles}>
        {content}
      </div>
    </div>
  )
}

export default Section;
