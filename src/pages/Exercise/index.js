import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux'; // To access authentication status from Redux
import styles from "../../styles/quiz/quizpage.module.css";
import { FaLock } from 'react-icons/fa';

export default function Index() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // Function to determine if a card should be locked
  const isCardLocked = (cardType) => {
    return user?.type !== 'all' && user?.type !== cardType && !user?.next.includes(cardType);
  };

  // Array of card information with type, heading, and text
  const cards = [
    {
      type: 'french',
      heading: 'French Beginner (A1)',
      text: 'Master the language of art, culture, and diplomacy with our French exercise.',
      link: '/Exercise/FrenchExercises',
    },
    {
      type: 'frencha2',
      heading: 'French Beginner (A2)',
      text: 'Master the language of art, culture, and diplomacy with our French exercise.',
      link: '/Exercise/FrenchExercisesA2',
    },
    {
      type: 'frenchb1',
      heading: 'French Intermediate (B1)',
      text: 'Master the language of art, culture, and diplomacy with our French exercise.',
      link: '/Exercise/FrenchExercisesB1',
    },
    {
      type: 'englishb1',
      heading: 'English Beginner (B1)',
      text: 'Master the language of art, culture, and diplomacy with our English exercise.',
      link: '/Exercise/EnglishExercisesB1',
    },
    {
      type: 'german',
      heading: 'German Beginner (A1)',
      text: 'Navigate both casual and formal language settings of Germany with this exercise.',
      link: '/Exercise/GermanExercises',
    },
    {
      type: 'germana2',
      heading: 'German Beginner (A2)',
      text: 'Navigate both casual and formal language settings of Germany with this exercise.',
      link: '/Exercise/GermanExercisesA2',
    },
    {
      type: 'spanish',
      heading: 'Spanish Beginner (A1)',
      text: 'Dive into the vibrant world of Spanish-speaking countries with this exercise.',
      link: '/Exercise/SpanishExercises',
    },
    {
      type: 'spanisha2',
      heading: 'Spanish Beginner (A2)',
      text: 'Dive into the vibrant world of Spanish-speaking countries with this exercise.',
      link: '/Exercise/SpanishExercisesA2',
    },
    {
      type: 'italian',
      heading: 'Italian Beginner (A1)',
      text: 'Master the language of art, culture, and diplomacy with our Italian exercise.',
      link: '/Exercise/ItalianExercises',
    },
    {
      type: 'russian',
      heading: 'Russian Beginner (A1)',
      text: 'Navigate both casual and formal language settings of Russian with this exercise.',
      link: '/Exercise/RussianExercises',
    },
    {
      type: 'dutch',
      heading: 'Dutch Beginner (A1)',
      text: 'Dive into the vibrant world of Dutch-speaking countries with this exercise.',
      link: '/Exercise/DutchExercises',
    },
  ];

  // Sort the cards so that unlocked cards come first
  const sortedCards = cards.sort((a, b) => {
    // If card A is unlocked and card B is locked, A comes first
    if (!isCardLocked(a.type) && isCardLocked(b.type)) {
      return -1;
    }
    // If card A is locked and card B is unlocked, B comes first
    if (isCardLocked(a.type) && !isCardLocked(b.type)) {
      return 1;
    }
    // Keep the default order if both are locked or both are unlocked
    return 0;
  });

  return (
    <>
      <Head>
        <title>Exercise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.headcont}>
            <div className={styles.mainheading}>Exercise</div>
          </div>

          <div className={styles.maintext}>
            Explore the beauty of new cultures by mastering Spanish, French, or German through our engaging lessons. Whether you're a beginner or looking to perfect your fluency, our language courses are designed to guide you at every step.
          </div>

          <div className={styles.cards}>
            {sortedCards.map((card) => (
              <div
                key={card.type}
                className={`${styles.card} ${isCardLocked(card.type) ? styles.locked : ''}`}
              >
                <div className={styles.cardheading}>{card.heading}</div>
                <div className={styles.cardtext}>{card.text}</div>
                {!isCardLocked(card.type) ? (
                  <Link href={card.link} className={styles.btn}>
                    Take a test
                  </Link>
                ) : (
                  <div className={styles.lockedText}><FaLock className={styles.lock} />Locked</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
