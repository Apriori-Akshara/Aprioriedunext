import React, { useEffect, useState } from 'react'
import { youdata } from "../../../Data/Conversationdata/Danisha1.js"; // Importing the quiz data
import Head from 'next/head.js';
import styles from '../../../styles/quiz/conversation.module.css';
import Image from 'next/image.js';
import Link from 'next/link.js';
import { useDispatch, useSelector } from 'react-redux';
import { unlockPage } from '@/Store.js';
import { FaLock } from 'react-icons/fa';

export function getServerSideProps(context) {
  return {
    props: { params: context.params }
  };
}

export default function Conversation({ params }) {
  const { id } = params;
  const dispatch = useDispatch();
  const unlockedPages = useSelector((state) => state.unlockedPages.unlockedPagesFrench);
  const subject = 'Danish';
  const [isClient, setIsClient] = useState(false);

  const videodata = youdata.filter((data) => data.id === id);

  // Ensure the component only renders after the client-side hydration
  useEffect(() => {
    setIsClient(true); // This ensures that client-specific logic runs only after hydration

    if (id) {
      const currentIndex = youdata.findIndex((page) => page.id === id);
      if (currentIndex !== -1 && currentIndex < youdata.length - 1) {
        const nextPageId = youdata[currentIndex + 1].id;
        if (!unlockedPages.includes(nextPageId)) {
          const multiple = [nextPageId, youdata[currentIndex + 2]?.id, youdata[currentIndex + 3]?.id, youdata[currentIndex + 4]?.id, youdata[currentIndex + 5]?.id]
          dispatch(unlockPage({ subject, pageId: multiple }));
        }
      }
    }
  }, [id, youdata, dispatch, unlockedPages]);

  if (!isClient) {
    // Avoid rendering any dynamic content on the server that depends on the client-side state
    return null;
  }

  return (
    <>
      <Head>
        <title>{videodata[0].title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main>
        <div className={styles.container1}>
          <div className={styles.headcont}>
            <div className={styles.mainheading}>{videodata[0].title}</div>
          </div>
          <div className={styles.flex}>
          <div className={styles.topcontainer}>
            <div className={styles.topimgcontainer}>
              <iframe className={styles.video} width="560" height="315" src={videodata[0].youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <div className={styles.info}>
              <h4 className={styles.title2}>{videodata[0].title}</h4>
              <p className={styles.dsec2}>{videodata[0].desc}</p>
              </div>
            </div>
          </div>
            <div className={styles.Adcontainer}>
            {youdata.slice(0,8).map(data => {
              const isUnlocked = unlockedPages.includes(data.id);
      return (
        <div key={data.id} className={styles.videocontainer1}>
          {isUnlocked ?  <Link className={styles.link1} href={`/Conversations/DanishConversationA1/${data.id}`}>
        <div className={styles.imgcont4}>
        <div className={styles.logocont}>
          <Image className={styles.imagelogo} src={'/youtube/youtube.png'} width={400} height={180} alt='image'/>
          </div>
          <Image className={styles.image4} src={data.url} width={400} height={180}/>
        </div>
        <div>
          <h3 className={styles.title4}>{data.title}</h3>
          <p className={styles.desc4}>{data.desc.slice(0,30)}...</p>
        </div>
        </Link> : <div className={styles.locked1}>
          <div className={styles.lockOverlay}><FaLock /><p>Locked</p></div>
         <div className={styles.imgcont4}>
         <div className={styles.logocont}>
           <Image className={styles.imagelogo} src={'/youtube/youtube.png'} width={400} height={180} alt='image'/>
           </div>
           <Image className={styles.image4} src={data.url} width={400} height={180}/>
         </div>
         <div>
           <h3 className={styles.title4}>{data.title}</h3>
           <p className={styles.desc4}>{data.desc.slice(0,30)}...</p>
         </div>
         </div>
         }
       

      </div>
      )
    })}
            </div>
          </div>
        </div>
    </main>
    </>
  )
}
