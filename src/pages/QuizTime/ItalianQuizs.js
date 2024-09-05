import Head from 'next/head'
import React from 'react'
import styles from '../../styles/quiz/quizpage.module.css'
import Image from 'next/image'
import { quiz } from "../../Data/italianquestions"; // Importing the quiz data
import Link from 'next/link';

export default function FrenchQuizes() {
  return (
    <>
      <Head>
        <title>Italian Quiz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.headcont}><div className={styles.mainheading}>Italian Quiz</div></div>

          <div className={styles.cards1}>

            {quiz.map(data=><Link href={`ItalianQuiz/${data.quiz}`} className={styles.link}>
            <div key={data.quiz} className={styles.card1}>
              <div className={styles.imgcont}>
              <Image className={styles.img5} src={'/assests/1.png'} width={500} height={500} alt="img"/>
              </div>
              <div className={styles.info}>
                <div className={styles.name}>{data.name}</div>
                <div className={styles.level}>Level: {data.level}</div>
                <div className={styles.topic}>Topic : {data.topic}</div>
              </div>
              </div>
              </Link>)}

          </div>
        </div>
      </main>
    </>
  )
}
