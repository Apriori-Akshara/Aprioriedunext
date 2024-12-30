import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/quiz/quizpage.module.css';
import Image from 'next/image';
import { quiz } from "../../Data/ExerciseData/spanish"; // Importing the quiz data
import Link from 'next/link';
import { FaLock } from 'react-icons/fa'; // Import a lock icon
import { useDispatch, useSelector } from 'react-redux'; // To access authentication status from Redux
import { unlockExercise } from "@/Store";

export default function FrenchQuizes() {
  const { isAuthenticated, user } = useSelector((state) => state.auth); // Access authentication status
  const unlockedPages = useSelector((state) => state.unlockedExercises.unlockedExercisesSpanish);
  const completedQuizzes = useSelector(state => state.finishedQuizzes.completedQuizzes);
  const [isClient, setIsClient] = useState(false);
  const [allCompleted, setAllCompleted] = useState(false); // State to track completion status
  const subject = 'Spanish'
  const dispatch = useDispatch();

  let completedQuizzes1 = completedQuizzes.filter(data=> data.language == subject)
  const unlockedPage = [...new Set(unlockedPages)];

  useEffect(() => {
    setIsClient(true); // Set to true when client-side is ready
  }, []);

  useEffect(() => {
    // Check if all unlocked exercises are completed
    const areAllCompleted = unlockedPage.every((quizId) => {
      const completedData = completedQuizzes1.find(quiz => quiz.exercise.toString() === quizId);
      return completedData && completedData.questionTypes.length > 2; // Modify this condition based on your requirement
    });
    setAllCompleted(areAllCompleted); // Update the state with completion status

    if(areAllCompleted){
      const multiple = 
        [(unlockedPage.length+1).toString(),
          (unlockedPage.length+2).toString(),
          (unlockedPage.length+3).toString(),
          (unlockedPage.length+4).toString(),
          (unlockedPage.length+5).toString(),
        ]
        dispatch(unlockExercise({ subject, exerciseId: multiple }));
    }
  }, [unlockedPage, completedQuizzes1]); // Run this effect when unlocked pages or completed quizzes change

  if (!isClient) {
    // Optionally return a loader or nothing until the client is ready
    return null;
  }

  return (
    <>
      <Head>
        <title>Spanish Exercise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.headcont}>
            <div className={styles.mainheading}>Spanish Exercise (A1)</div>
          </div>

          <div className={styles.cards1}>
            {quiz.map((data, index) => {
              const isUnlocked = unlockedPage.includes(data.quiz);
              // Determine if the quiz should be locked
              const isLocked = !isAuthenticated && index > 1;
             const completedData = completedQuizzes1.find(quiz => quiz.exercise.toString() === data.quiz);
             // Determine if all required question types are completed
             const isCompleted = completedData && completedData.questionTypes.length > 2
             const completedStyles = isCompleted ? styles.completed : ''; // Add completed styles
              return (
                <div key={data.quiz} className={`${styles.card1} ${isLocked ? styles.locked : ''} ${completedStyles}`}>
                  {isUnlocked || user.type === 'all' ? <Link href={`SpanishExercise/${data.quiz}`} className={styles.link}>
                    <div className={styles.imgcont}>
                      <Image className={styles.img5} src={'/assests/1.png'} width={500} height={500} alt="img" />
                    </div>
                    <div className={styles.info}>
                      <div className={styles.name}>{data.name}</div>
                      <div className={styles.level}>Level: {data.level}</div>
                      <div className={styles.topic}>Topic: {data.topic}</div>
                    </div>
                  </Link>:                                <div className={styles.locked2}>
                <div className={styles.lockOverlay3}>
                  <FaLock />
                  <p>Locked</p>
                </div>
                    <div className={styles.imgcont}>
                      <Image className={styles.img5} src={'/assests/1.png'} width={500} height={500} alt="img" />
                    </div>
                    <div className={styles.info}>
                      <div className={styles.name}>{data.name}</div>
                      <div className={styles.level}>Level: {data.level}</div>
                      <div className={styles.topic}>Topic: {data.topic}</div>
                    </div>
                  </div>}
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
  );
}
