import Head from 'next/head'
import React from 'react'
import styles from '../../styles/quiz/quizpage.module.css'
import Image from 'next/image'
import { quiz } from "../../Data/italianquestions"; // Importing the quiz data
import Link from 'next/link';
import { FaLock } from 'react-icons/fa'; // Import a lock icon
import { useSelector } from 'react-redux'; // To access authentication status from Redux

export default function FrenchQuizes() {

  const { isAuthenticated } = useSelector((state) => state.auth); // Access authentication status

  return (
    <>
      <Head>
        <title>Italian Language</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.headcont}><div className={styles.mainheading}>Italian Language</div></div>

          <div className={styles.cards1}>
            {quiz.map((data, index) => {
              // Determine if the quiz should be locked
              const isLocked = !isAuthenticated && index > 0;
              return (
                <div key={data.quiz} className={`${styles.card1} ${isLocked ? styles.locked : ''}`}>
                  <Link href={`ItalianQuiz/${data.quiz}`} className={styles.link}>
                    <div className={styles.imgcont}>
                      <Image className={styles.img5} src={'/assests/1.png'} width={500} height={500} alt="img" />
                    </div>
                    <div className={styles.info}>
                      <div className={styles.name}>{data.name}</div>
                      <div className={styles.level}>Level: {data.level}</div>
                      <div className={styles.topic}>Topic: {data.topic}</div>
                    </div>
                  </Link>
                  {isLocked && (
                    <div className={styles.lockOverlay}>
                      <FaLock className={styles.lockIcon} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  )
}
