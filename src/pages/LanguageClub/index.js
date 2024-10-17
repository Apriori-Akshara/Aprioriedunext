import React from 'react'
import Head from 'next/head'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'
import Slider from "../../../components/home/LanguagesSlider" 
import Reveal from '../../../components/Reveal'
import { motion } from 'framer-motion';

export default function LanguageClub() {
  return (
    <>
      <Head>
        <title>Language Club</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main>
    {/* <div>
    <Reveal>
      <div className={styles.bigicontainer}>

   <div className={styles.headcont}><div className={styles.mainheading}>Language Club</div></div>
      </div>
    </Reveal>
      <Reveal>
        <Slider />
      </Reveal>

      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.text2}>At our language club, we believe that language learning is not just a skill, but a transformative journey that opens doors to new opportunities, experiences, and connections. Whether you're learning a language for travel, work, or personal enrichment, our club offers a supportive and engaging environment where you can learn, grow, and thrive. So why not join us on our language learning adventure?<br/><br/>Together, we'll explore the beauty and diversity of languages and cultures from around the world, and embark on a journey of discovery that will enrich our lives and broaden our horizons in ways we never imagined possible.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/content/language.jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>

      </div>
      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.text2}>One of the key features of our language club is our diverse range of language offerings. Whether you're interested in mastering a widely spoken language like Spanish, French, or Mandarin, or delving into a lesser-known language like Swahili, Russian, or Arabic, our club offers resources and support to help you achieve your language learning goals.<br/><br/>We provide a variety of language learning materials, including textbooks, online resources, and language exchange programs, to cater to different learning styles and preferences. Our club also hosts language classes, workshops, and conversation groups led by experienced instructors and native speakers, providing members with opportunities to practice their language skills in a supportive and interactive environment.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/content/25 (1).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>

    </div> */}

   <div className={styles.readingClubContainer}>
      {/* Header Section */}
      <motion.div 
        className={styles.headerSection}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to the Language Club</h1>
        <p>Explore new languages, embrace diverse cultures, and expand your horizons.</p>
      </motion.div>

      {/* Split Content Section */}
      <motion.div 
        className={styles.contentSection}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.textContent}>
          <h2>What Makes Our Club Special?</h2>
          <p>
          At our language club, we believe that language learning is not just a skill, but a transformative journey that opens doors to new opportunities, experiences, and connections. Whether you're learning a language for travel, work, or personal enrichment, our club offers a supportive and engaging environment where you can learn, grow, and thrive. So why not join us on our language learning adventure?<br/><br/>Together, we'll explore the beauty and diversity of languages and cultures from around the world, and embark on a journey of discovery that will enrich our lives and broaden our horizons in ways we never imagined possible.
          </p>
          <p>
          One of the key features of our language club is our diverse range of language offerings. Whether you're interested in mastering a widely spoken language like Spanish, French, or Mandarin, or delving into a lesser-known language like Swahili, Russian, or Arabic, our club offers resources and support to help you achieve your language learning goals.
          </p>
        </div>
        <motion.div
          className={styles.imageContent}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img className={styles.img30} src="/content/25 (1).jpg" alt="Reading Club" />
        </motion.div>
      </motion.div>

      {/* Testimonial Section */}
      <motion.div
        className={styles.testimonialSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>What Our Members Say</h2>
        <motion.div
          className={styles.testimonial}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <blockquote>
          "The Language Club not only improved my French but also introduced me to a whole new world of culture and people. It’s a great way to learn beyond the classroom."
          </blockquote>
          <p>- A Happy Member</p>
        </motion.div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className={styles.ctaSection}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Join the Language Club</h2>
        <p>Join us today and start your path to mastering a new language!</p>
        <motion.a 
          href="/"
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Become a Member
        </motion.a>
      </motion.div>
    </div>
    <Reveal>
        <Slider />
      </Reveal>
    </main>
    </>

  )
}
