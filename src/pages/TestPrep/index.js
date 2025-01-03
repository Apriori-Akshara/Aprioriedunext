import Head from 'next/head';
import React from 'react';
import styles from '../../styles/testprep.module.css';
import Image from 'next/image';
import { FaLock } from 'react-icons/fa'; // Import a lock icon
import { useSelector } from 'react-redux'; // To access authentication status from Redux
import Link from 'next/link';

export default function Index() {
  const { isAuthenticated, user } = useSelector((state) => state.auth); // Access user information from Redux

  // Language cards with type
  const languageCards = [
    {
      type: 'french',
      heading: 'French Language',
      text: 'Get ready to put your French skills to the test with our exciting range of quizzes.',
      link: '/Practicetest/FrenchQuizs',
    },
    {
      type: 'spanish',
      heading: 'Spanish Language',
      text: 'Get ready to put your Spanish skills to the test with our exciting range of quizzes.',
      link: '/Practicetest/SpanishQuizs',
    },
    {
      type: 'german',
      heading: 'German Language',
      text: 'Get ready to put your German skills to the test with our exciting range of quizzes.',
      link: '/Practicetest/GermanQuizs',
    },
    // {
    //   type: 'italian',
    //   heading: 'Italian Language',
    //   text: 'Get ready to put your Italian skills to the test with our exciting range of quizzes.',
    //   link: '/Practicetest/ItalianQuizs',
    // },
  ];

  // Determine if a card should be locked
  const isCardLocked = (cardType) => {
    return user?.type !== 'all' && user?.type !== cardType;
  };

  // Sort language cards with unlocked first and locked last
  const sortedLanguageCards = languageCards.sort((a, b) => {
    if (!isCardLocked(a.type) && isCardLocked(b.type)) return -1; // Unlocked comes first
    if (isCardLocked(a.type) && !isCardLocked(b.type)) return 1;  // Locked comes last
    return 0; // Maintain order if both are locked or both are unlocked
  });

  // Test prep cards (not affected by user.type)
  const testPrepCards = [
    {
      url: '/Testprep/4.jpg',
      name: 'MCQs',
      text: 'Select the correct answers from given options',
    },
    {
      url: '/Testprep/2.jpg',
      name: 'Fill in the blanks',
      text: 'Fill in the blanks with the correct answers',
    },
    {
      url: '/Testprep/3.jpg',
      name: 'Jumbled Sentences',
      text: 'Reorder words to get the correct answers',
    },
    {
      url: '/Testprep/7.jpg',
      name: 'Match the following',
      text: 'Highlight the incorrect words to get the correct answer',
    },
    // {
    //   url: '/Testprep/6.jpg',
    //   name: 'Drag and drop to the correct box',
    //   text: 'Select missing words to get the correct answer',
    // },
  ];

  return (
    <>
      <Head>
        <title>Practice Test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.headcont}>
            <div className={styles.mainheading}>Practice Test</div>
          </div>

          {/* Render test prep cards */}
          <div className={styles.cards}>
            {testPrepCards.map((card) => (
              <div key={card.name} className={styles.card}>
                <div className={styles.imgcont}>
                  <Image
                    className={styles.img}
                    width={400}
                    height={300}
                    src={card.url}
                    alt="image"
                  />
                </div>
                <div className={styles.info}>
                  <div className={styles.name}>{card.name}</div>
                  <div className={styles.text}>{card.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Render language cards with sorting and locked states */}
          <div className={styles.cards1}>
            {sortedLanguageCards.map((card) => (
              <div
                key={card.type}
                className={`${styles.card1} ${isCardLocked(card.type) ? styles.locked : ''}`}
              >
                <div className={styles.cardheading1}>{card.heading}</div>
                <div className={styles.cardtext1}>{card.text}</div>
                {!isCardLocked(card.type) ? (
                  <Link href={card.link} className={styles.btn1}>
                    Start Test
                  </Link>
                ) : (
                  <div className={styles.lockedText}>
                    <FaLock className={styles.lock}/> Locked
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
