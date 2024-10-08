import Head from 'next/head'
import React from 'react'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { LiaAwardSolid } from "react-icons/lia";
import { FaChalkboardTeacher } from "react-icons/fa";
import Reveal from '../../../components/Reveal';

export default function LanguageClub() {
  return (
    <>
        <Head>
        <title>About Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main>
      <div>
    <Reveal>
      <div className={styles.bigicontainer}>
      {/* <div className={styles.bigcontainer}>
      <div className={styles.text10}>
        <div className={`${styles.top55}`}>About Us</div>
        <div className={`${styles.middle56} ${styles.text12}`}> Upskilledu Solutions was created with a goal in mind to change the current trend where people are losing interest in liberal arts education. Liberal arts education is just as practical and valuable as technical studies. </div>
        <div className={`${styles.bottom55} ${styles.text13}`}></div>
      </div>
      <div className={styles.imgcont10}>
        <Image className={styles.img10} width={2400} height={1600} src={"/illustrations/6.png"} alt="image"/>
      </div>
      </div> */}

<div className={styles.headcont}><div className={styles.mainheading}>About Us</div></div>
      </div>
    </Reveal>
      {/* <div className={styles.topcontainer}>
        <div className={styles.tint}/>
        <Image className={styles.img} src={'/content/16.jpg'} width={2400} height={1400} alt="img"/>
        <div className={styles.textcontainer}>
        <Reveal>
          <div className={styles.heading1}>About Us</div>
        </Reveal>
        <Reveal>
          <div className={styles.text11}>Upskilledu Solutions was formed with a vision to reverse the prevalent trend of diminishing interest in liberal arts education and to refute the view that it is any less practical or vocational compared to the technical fields of study.</div>
        </Reveal>
        </div>
      </div> */}
      {/* <Reveal>
        <div className={styles.middle5}>
          <div className={styles.left5}>
            <div className={styles.heading5}>OUR PHILOSOPHY</div>
            <div className={styles.text6}>Planning, Consistency, and focus<br/>
            outshine talent... Everytime</div>
          </div>
          <div className={styles.right5}>
            <Image className={styles.img5} src={'/content/14.jpg'} width={500} height={500} alt="img"/>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.middle6}>
          <div className={styles.left6}>
            <div className={styles.heading5}>OUR IDEOLOGY</div>
            <div className={styles.text6}>To educate curious minds <br/>
            about limitless possibilities</div>
          </div>
          <div className={styles.right5}>
            <Image className={styles.img5} src={'/content/23.jpg'} width={500} height={500} alt="img"/>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.middle13}>
          <div className={styles.left5}>
            <div className={styles.heading5}>OUR GOAL</div>
            <div className={styles.text6}>Provide high-quality learning <br/>
            opportunities for students</div>
          </div>
          <div className={styles.right5}>
            <Image className={styles.img5} src={'/content/15.jpg'} width={500} height={500} alt="img"/>
          </div>
        </div>
      </Reveal> */}

      <div className={styles.eventscards1}>
      <Reveal>
        <div className={styles.eventcard}>
          <div className={styles.eventcardimgcontainer}>
            <Image className={styles.eventcardimg} src={'/content/14.jpg'} width={400} height={400} alt="image"/>
          </div>
          <div className={styles.eventtopic}>OUR PHILOSOPHY</div>
          <div className={styles.eventtext}>Planning, Consistency, and focus
          outshine talent... Everytime</div>
        </div>
      </Reveal>

      <Reveal>
        <div className={styles.eventcard}>
          <div className={styles.eventcardimgcontainer}>
            <Image className={styles.eventcardimg} src={'/content/23.jpg'} width={400} height={400} alt="image"/>
          </div>
          <div className={styles.eventtopic}>OUR IDEOLOGY</div>
          <div className={styles.eventtext}>To educate curious minds
          about limitless possibilities</div>
        </div>
      </Reveal>

      <Reveal>
        <div className={styles.eventcard}>
          <div className={styles.eventcardimgcontainer}>
            <Image className={styles.eventcardimg} src={'/content/15.jpg'} width={400} height={400} alt="image"/>
          </div>
          <div className={styles.eventtopic}>OUR GOAL</div>
          <div className={styles.eventtext}>Provide high-quality learning
          opportunities for students</div>
        </div>
      </Reveal>
      </div>

      <div className={styles.new}>

      <div className={styles.headcont1}><div className={styles.mainheading}>Why Choose Us?</div></div>

      <div className={styles.flex10}>
      <Reveal>
        <div className={styles.point}>
            <div className={styles.iconcontainer}><IoMdCheckmarkCircleOutline className={styles.icon}/></div>
            <div className={styles.textcontainer1}>
              <div className={styles.top}>Quick Results</div>
              <div className={styles.btm}>Get quick and guaranteed results with the best teachers.</div>
            </div>
          </div>
      </Reveal>
      <Reveal>
        <div className={styles.point}>
            <div className={styles.iconcontainer4}><LiaAwardSolid className={styles.icon}/></div>
            <div className={styles.textcontainer1}>
              <div className={styles.top}>Our Reputation</div>
              <div className={styles.btm}>We have a strong reputation and recognition.</div>
            </div>
          </div>
      </Reveal>
      <Reveal>
        <div className={styles.point}>
            <div className={styles.iconcontainer5}><FaChalkboardTeacher  className={styles.icon}/></div>
            <div className={styles.textcontainer1}>
              <div className={styles.top}>Interactive teaching</div>
              <div className={styles.btm}>We use online platforms, videos and quizzes.</div>
            </div>
          </div>
      </Reveal>
      <Reveal>
        <div className={styles.point}>
            <div className={styles.iconcontainer1}><MdAttachMoney className={styles.icon}/></div>
            <div className={styles.textcontainer1}>
              <div className={styles.top}>Save Money</div>
              <div className={styles.btm}>You can save a lot of money on our lessons & resources.</div>
            </div>
          </div>
      </Reveal>
      <Reveal>
        <div className={styles.point}>
            <div className={styles.iconcontainer2}><TiMessages className={styles.icon}/></div>
            <div className={styles.textcontainer1}>
              <div className={styles.top}>Get Support</div>
              <div className={styles.btm}>Our staff and teachers are always ready to help you.</div>
            </div>
          </div>
      </Reveal>
      </div>

      </div>

    </div>
      </main>
    </>

  )
}