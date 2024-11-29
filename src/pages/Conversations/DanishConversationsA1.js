import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/quiz/conversation.module.css';
import Image from 'next/image';
import { youdata } from "../../Data/Conversationdata/Danisha1"; // Importing the quiz data
import Link from 'next/link';
import { FaLock } from 'react-icons/fa'; // Import a lock icon
import { useSelector } from 'react-redux'; // To access authentication status from Redux

export default function FrenchQuizes() {
  const { isAuthenticated, user } = useSelector((state) => state.auth); // Access authentication status
  const unlockedPages = useSelector((state) => state.unlockedPages.unlockedPagesDanish);
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
        <title>Danish Conversation</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main>
        <div className={styles.container1}>
          <div className={styles.headcont}>
            <div className={styles.mainheading}>Danish Conversation</div>
          </div>

          <div className={styles.container}>
          {youdata.map((data, index) => {
          const isUnlocked = unlockedPages.includes(data.id);
      return (
        <div key={data.id} className={styles.videocontainer}>

{isUnlocked || user.type === 'all' ? (
              <Link className={styles.link} href={`/Conversations/DanishConversationA1/${data.id}`}>
                <div className={styles.imgcont}>
                  <div className={styles.logocont}>
                    <Image
                      className={styles.imagelogo}
                      src={'/youtube/youtube.png'}
                      width={400}
                      height={180}
                      alt='image'
                    />
                  </div>
                  <Image className={styles.image} src={data.url} width={400} height={180} alt={data.title} />
                </div>
                <div>
                  <h3 className={styles.title}>{data.title}</h3>
                  <p className={styles.desc}>{data.desc.slice(0, 100)}...</p>
                </div>
              </Link>
            ) : (
              <div className={styles.locked}>
                <div className={styles.lockOverlay}>
                  <FaLock />
                  <p>Locked</p>
                </div>
                <div className={styles.imgcont}>
                  <div className={styles.logocont}>
                    <Image
                      className={styles.imagelogo}
                      src={'/youtube/youtube.png'}
                      width={400}
                      height={180}
                      alt='image'
                    />
                  </div>
                  <Image className={styles.image} src={data.url} width={400} height={180} alt={data.title} />
                </div>
                <div>
                  <h3 className={styles.title}>{data.title}</h3>
                  <p className={styles.desc}>{data.desc.slice(0, 100)}...</p>
                </div>
              </div>
            )}

      </div>
      )
    })}
          </div>
        </div>
      </main>
    </>
  );
}
