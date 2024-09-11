import Head from 'next/head'
import React from 'react'
import styles from '../../styles/testprep.module.css'
import Image from 'next/image'
import { FaLock } from 'react-icons/fa'; // Import a lock icon
import { useSelector } from 'react-redux'; // To access authentication status from Redux
import Link from 'next/link';

export default function index() {

  const { isAuthenticated } = useSelector((state) => state.auth); // Access authentication status

  const data = [
    {
      url:'/Testprep/4.jpg',
      name:'MCQs',
      text:'Select the correct answers from given options',
    },
  {
    url:'/Testprep/2.jpg',
    name:'Fill in the blanks',
    text:'Fill in the blanks with the correct answers',
  },
  {
    url:'/Testprep/3.jpg',
    name:'Jumbled Words',
    text:'Reorder words to get the correct answers',
  },
  {
    url:'/Testprep/5.jpg',
    name:'Click on the correct answer',
    text:'Highlight the incorrect words to get the correct answer',
  },
  {
    url:'/Testprep/6.jpg',
    name:'Drag and drop to the correct box',
    text:'Select missing words to get the correct answer',
  }]

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
    <div className={styles.headcont}><div className={styles.mainheading}>Practice Test</div></div>

    <div className={styles.cards}>

       {data.map((data)=>{ 
              return (<div key={data.name} className={`${styles.card}`}>
            <div className={styles.imgcont}>
              <Image className={styles.img} width={400} height={300} src={data.url} alt="image"/>
            </div>
            <div className={styles.info}>
              <div className={styles.name}>{data.name}</div>
              <div className={styles.text}>{data.text}</div>
            </div>
                </div>
        )})}

    </div>

<div className={styles.cards1}>

<div className={styles.card1}>
  <div className={styles.cardheading1}>French Language</div>
  <div className={styles.cardtext1}>Get ready to put your French skills to the test with our exciting range of quizzes.</div>
  <Link href='/Practicetest/FrenchQuizs' className={styles.btn1}>Start Test</Link>
</div>

<div className={styles.card1}>
  <div className={styles.cardheading1}>Spanish Language</div>
  <div className={styles.cardtext1}>Get ready to put your Spanish skills to the test with our exciting range of quizzes.</div>
  <Link href='/Practicetest/SpanishQuizs' className={styles.btn1}>Start Test</Link>
</div>

<div className={styles.card1}>
  <div className={styles.cardheading1}>German Language</div>
  <div className={styles.cardtext1}>Get ready to put your German skills to the test with our exciting range of quizzes.</div>
  <Link href='/Practicetest/GermanQuizs' className={styles.btn1}>Start Test</Link>
</div>

<div className={styles.card1}>
  <div className={styles.cardheading1}>Italian Language</div>
  <div className={styles.cardtext1}>Get ready to put your Italian skills to the test with our exciting range of quizzes.</div>
  <Link href='/Practicetest/ItalianQuizs' className={styles.btn1}>Start Test</Link>
</div>

</div>
 </div>
 </main>
</>
  )
}
