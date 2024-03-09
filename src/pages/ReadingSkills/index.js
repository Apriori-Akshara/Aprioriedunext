import React from 'react'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'
import Reveal from '../../../components/Reveal'
import dynamic from 'next/dynamic'

const LanguageClub = () => {
  return (
    <div>
      <div className={styles.topcontainer}>
        <div className={styles.tint}/>
        <Image className={styles.img} src={'/content/reading/1.jpg'} width={2400} height={1400} alt="img"/>
        <div className={styles.textcontainer}>
        <Reveal>
          <div className={styles.heading1}>Reading Club</div>
        </Reveal>
        <Reveal>
          <div className={styles.text1}>Read, understand, interpret, and evaluate written texts.</div>
        </Reveal>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.left1}>
        {/* <Reveal>
          <div className={styles.heading2}>LOREM IPSUM IPSUM</div>
        </Reveal> */}
        <Reveal>
          <div className={styles.text2}>A reading club is more than just a gathering of individuals; it's a haven for book enthusiasts to come together and celebrate the art of storytelling. At our reading club, we believe that books have the power to transport us to new worlds, challenge our perspectives, and inspire meaningful discussions. With a diverse array of members ranging from seasoned bibliophiles to eager beginners, our club is a vibrant tapestry of literary passion and intellectual curiosity. 
          <br/><br/>We meet regularly, whether in person or virtually, to delve into a wide range of literary works spanning genres, cultures, and time periods. From classic literature to contemporary bestsellers, from thought-provoking non-fiction to captivating fiction, our club explores the rich tapestry of human experience through the written word.</div>
        </Reveal>
          </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/content/reading/2.jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>
      <div className={styles.middle2}>
        <div className={styles.left1}>
        {/* <Reveal>
          <div className={styles.heading2}>LOREM IPSUM IPSUM</div>
        </Reveal> */}
        <Reveal>
          <div className={styles.text2}>One of the most rewarding aspects of our reading club is the sense of community it fosters. Each member brings their unique perspectives, experiences, and insights to the table, enriching our discussions and broadening our understanding of the books we read.<br/><br/> Whether it's a heated debate over the moral ambiguity of a character's actions or a shared moment of joy over a beautifully crafted sentence, our club provides a supportive space where everyone's voice is heard and valued. Through our shared love of reading, we form connections that transcend the pages of the books we read, forging friendships and fostering a sense of belonging that extends far beyond our meetings.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/content/reading/3.jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(LanguageClub), { ssr: false });