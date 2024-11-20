import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/quiz/quizpage.module.css';
import { data } from "../../Data/ReadingAssignments/French"; // Importing the quiz data
import Link from 'next/link';
import { IoPlayCircleSharp } from "react-icons/io5";
import { useSelector } from 'react-redux'; // To access authentication status from Redux
import { FaLock } from 'react-icons/fa';

export default function FrenchQuizes() {
  const { isAuthenticated, user } = useSelector((state) => state.auth); // Access authentication status
  const unlockedPages = useSelector((state) => state.unlockedAssignments.unlockedAssignmentsFrench);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true when client-side is ready
  }, []);

  if (!isClient) {
    // Optionally return a loader or nothing until the client is ready
    return null;
  }

  return (
    <>
      <Head>
        <title>French Reading Assignments</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.headcont}>
            <div className={styles.mainheading}>French Reading Assignments</div>
          </div>

          <div className={styles.cards1}>
            {data.map((data, index) => {
              const isUnlocked = unlockedPages.includes(data.id);
              // Determine if the quiz should be locked
              const isLocked = !isAuthenticated && index > 0;
              return (
                <div key={data.quiz} className={`${styles.card1} ${isLocked ? styles.locked : ''}`}>
                  {isUnlocked || user.type === 'all' ? <Link href={`FrenchReadingAssignment/${data.id}`} className={styles.link}>
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
                  </Link>:<div className={styles.locked2}>
                <div className={styles.lockOverlay3}>
                  <FaLock />
                  <p>Locked</p>
                </div>
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
                  </div>}

                </div>
              );
            })}
          </div>

        </div>
      </main>
    </>
  );
}
