import Head from 'next/head';
import React from 'react';
import styles from '../../styles/quiz/quizpage.module.css';
import Image from 'next/image';
import { data } from "../../Data/Languagelessons/spanish"; // Importing the quiz data
import Link from 'next/link';
import { FaLock } from 'react-icons/fa'; // Import a lock icon
import { useSelector } from 'react-redux'; // To access authentication status from Redux
import { IoPlayCircleSharp } from 'react-icons/io5';

export default function FrenchQuizes() {
  const { isAuthenticated } = useSelector((state) => state.auth); // Access authentication status

  return (
    <>
      <Head>
        <title>Spanish lessons</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.headcont}>
            <div className={styles.mainheading}>Spanish Lessons</div>
          </div>

          <div className={styles.cards1}>
            {data.map((data, index) => {
              // Determine if the quiz should be locked
              const isLocked = !isAuthenticated && index > 0;
              return (
                <div key={data.quiz} className={`${styles.card1} ${isLocked ? styles.locked : ''}`}>
                  <Link href={`Spanishlesson/${data.id}`} className={styles.link}>
                  {isLocked && (
                    <div className={styles.lockOverlay1}>
                      <FaLock className={styles.lockIcon1} />
                    </div>
                  )}
                  <div className={styles.cardflex5}>
                    <div className={styles.info}>
                      <div className={styles.name}>{data.name}</div>
                      <div className={styles.level}>Level: {data.level}</div>
                    </div>
                    <div className={styles.imgcont}>
                      {/* <Image  src={'/assests/1.png'} width={500} height={500} alt="img" /> */}
                      <IoPlayCircleSharp className={styles.img6}/>
                    </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </main>
    </>
  );
}
