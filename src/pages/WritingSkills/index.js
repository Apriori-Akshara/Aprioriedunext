import React from 'react'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'
import Reveal from '../../../components/Reveal'


export default function LanguageClub() {
  return (
    <div>
      <div className={styles.topcontainer}>
        <div className={styles.tint}/>
        <Image className={styles.img} src={'/content/writing/1.jpg'} width={2400} height={1400} alt="img"/>
        <div className={styles.textcontainer}>
        <Reveal>
          <div className={styles.heading1}>Writing Club</div>
        </Reveal>
        <Reveal>
          <div className={styles.text1}>Enable your Writing skills to create clear and effective written communication in various forms and contexts.</div>
        </Reveal>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
          {/* <div className={styles.heading2}>LOREM IPSUM IPSUM</div> */}
          <div className={styles.text2}>One of the most valuable aspects of our writing club is the sense of community it fosters. Writing can often be a solitary and isolating endeavor, but our club provides a supportive network of like-minded individuals who share a passion for storytelling and a commitment to helping each other succeed.<br/><br/>Through workshops, critique sessions, and group discussions, members have the opportunity to share their work, receive feedback from peers, and learn from each other's experiences. Whether you're seeking guidance on plot development, character arc, or finding your voice as a writer, our club provides a safe and supportive space where you can grow and develop as an artist.</div>
        </Reveal>

        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/content/writing/2.jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>
      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
          {/* <div className={styles.heading2}>LOREM IPSUM IPSUM</div> */}
          <div className={styles.text2}>At our writing club, we believe that everyone has a story to tell and that writing is a powerful tool for self-expression, empowerment, and connection. Whether you're a seasoned professional or a novice writer just starting out, our club welcomes writers of all backgrounds, genres, and levels of experience.<br/><br/>So why not join us on our writing journey? Together, we'll explore the boundless possibilities of language and imagination, support each other through the highs and lows of the creative process, and celebrate the transformative power of storytelling in all its forms.</div>
        </Reveal>

        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/content/writing/3.jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>

      </div>
    </div>
  )
}