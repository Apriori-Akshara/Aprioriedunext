import Head from 'next/head'
import React from 'react'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'
import Reveal from '../../../components/Reveal'

export default function LanguageClub() {
  return (
    <>
      <Head>
        <title>Testimonials</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main>    
      <div>
    <Reveal>
      <div className={styles.bigicontainer}>
      <div className={styles.bigcontainer}>
      <div className={styles.text10}>
        <div className={`${styles.top55}`}>Testimonials</div>
        <div className={`${styles.middle56} ${styles.text12}`}>Read what our satisfied students have to say about their experience with us.</div>
        <div className={`${styles.bottom55} ${styles.text13}`}></div>
        {/* <button className={styles.btn}>Apply Now</button> */}
      </div>
      <div className={styles.imgcont10}>
        <Image className={styles.img10} width={2400} height={1600} src={"/illustrations/5.png"} alt="image"/>
      </div>
      </div>
      </div>
    </Reveal>
      {/* <div className={styles.topcontainer}>
        <div className={styles.tint}/>
        <Image className={styles.img} src={'/content/12.jpg'} width={2400} height={1400} alt="img"/>
        <div className={styles.textcontainer}>
        <Reveal>
          <div className={styles.heading1}>Testimonials</div>
        </Reveal>
        <Reveal>
          <div className={styles.text1}>“Read what our satisfied students have to say about their experience with us.”</div>
        </Reveal>
        </div>
      </div> */}
    <div className={styles.cards}>
    <Reveal>
        <div className={styles.card}>
          <div className={styles.topflex}>
          <div className={styles.imgcontainer1}>
            <Image className={styles.img1} src={'/profileimg/7.webp'} width={600} height={600} alt="image"/>
          </div>
          <div className={styles.testname}>
              <div>Swastik</div>
              <div className={styles.newlanguage}>READING CLUB</div>
            </div>
          </div>
          <div>As a student at the coaching institute, I can't express how much I enjoy the vocab quizzes, storytelling activities, and writing contests. These engaging activities not only enhance my language skills but also ignite my creativity. And the best part? I consistently manage to win prizes! It's incredibly motivating to see my efforts rewarded. </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.card}>
          <div className={styles.topflex}>
          <div className={styles.imgcontainer1}>
            <Image className={styles.img1} src={'/profileimg/8.webp'} width={600} height={600} alt="image"/>
          </div>
          <div className={styles.testname}>
              <div>Sara</div>
              <div className={styles.newlanguage}>READING CLUB</div>
            </div>
          </div>
          <div>As a student here, I can confidently say that all the teachers are not only excellent but also incredibly helpful. Their dedication to our growth and learning is commendable. Since joining, my confidence has soared. The personalized attention, engaging lessons, and supportive environment have truly transformed my educational experience.</div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.card}>
          <div className={styles.topflex}>
          <div className={styles.imgcontainer1}>
            <Image className={styles.img1} src={'/profileimg/6 (10).png'} width={600} height={600} alt="image"/>
          </div>
            <div className={styles.testname}>
              <div>Dyumna</div>
              <div className={styles.newlanguage}>SPANISH FOUNDATION (A1 & A2)</div>
            </div>
          </div>
          <div>The beginner level Spanish lessons took up a very holistic approach towards understanding the language and to gain the ability to start speaking it a little by the end of the modules. Dominic sir's way of teaching helped me in initiating and engaging in basic conversation in Spanish. Overall, it was a wonderful learning experience.</div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.card}>
          <div className={styles.topflex}>
          <div className={styles.imgcontainer1}>
            <Image className={styles.img1} src={'/profileimg/6 (9).png'} width={600} height={600} alt="image"/>
          </div>
            <div className={styles.testname}>
              <div>Nipun Banerjee</div>
              <div className={styles.newlanguage}>SPANISH FOUNDATION (A1 & A2)</div>
            </div>
          </div>
          <div>The overall content delivery was phenomenal. The level of interaction even in an online session made the whole experience fruitful. The content itself was extremely informative and the most important part of the classes that made it different and effective was the practice of correct pronunciation. That itself is something that is hard to grasp and teach.</div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.card}>
          <div className={styles.topflex}>
          <div className={styles.imgcontainer1}>
            <Image className={styles.img1} src={'/profileimg/6 (8).png'} width={600} height={600} alt="image"/>
          </div>
          <div className={styles.testname}>
              <div>Prisha Chhabra</div>
              <div className={styles.newlanguage}>GERMAN FOUNDATION & INTERMEDIATE (A1, A2, B1 & B2)</div>
            </div>
          </div>
          <div>The 10-day Spanish foundation course with Apriori Education completely changed the way I look at learning a new language. I am thankful to be aware of how enriching, fun and lasting the knowledge of an interesting language like Spanish can be. From the first class till the last, you learn every aspect of its practicality when you come around to speaking it. </div>
        </div>
      </Reveal>
    </div>
    </div></main>
    </>

  )
}