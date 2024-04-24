import React from 'react'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'
import Slider from "../../../components/home/LanguagesSlider" 
import Reveal from '../../../components/Reveal'

export default function ItalianLC() {
  return (
    <div>
    <div className={styles.bigheading}>Italian Language Club</div>

      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>Welcome to the Italian Language Club!</div>
          <div className={styles.text2}>We are delighted to offer a warm and welcoming community for individuals eager to explore the Italian language and culture. Whether you're a beginner taking your first steps in Italian or an advanced learner looking to deepen your understanding, our club provides a supportive environment where you can immerse yourself in the beauty and richness of the Italian language.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/2 (5).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>

      </div>
      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
        <div className={styles.heading2}>About Us</div>
          <div className={styles.text2}>At the Italian Language Club, we’re more than just language learners—we’re passionate explorers of all things Italian. Whether you’re a curious beginner or a seasoned conversationalist, our club is your home away from home. Let’s embark on a linguistic journey together!</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/2 (6).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>

      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>Academics</div>
          <div className={styles.text2}>Tailored specifically for schools and colleges, our club offers a comprehensive platform for students to immerse themselves in the richness of the Italian language. Our carefully crafted curriculum is designed to provide a solid foundation in Italian grammar, vocabulary, and pronunciation while also delving into the vibrant cultural nuances that make Italy so unique. With a team of experienced educators who are passionate about sharing their love for the language, we provide engaging lessons and interactive activities that inspire students to excel in their language learning journey. Whether you're a beginner or an advanced learner, our Italian Language Club is your gateway to unlocking the doors to academic success and cultural enrichment.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/italian (1).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>

      </div>
      {/* <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
        <div className={styles.heading2}>Why we are better?</div>
          <div className={styles.text2}>Where passion and proficiency converge to redefine language learning. What sets us apart? It's our unwavering dedication to providing a truly immersive and enriching experience that goes beyond the confines of traditional education. Our club boasts a dynamic curriculum tailored to each student's unique needs, guided by a team of passionate educators who are experts in their field. From interactive lessons to cultural immersion activities, we offer a comprehensive approach that fosters not only linguistic fluency but also a deep appreciation for Italian culture and heritage. Join us and discover why we are the premier choice for Italian language education. Unleash your potential with us and embark on a journey that will broaden your horizons and open doors to new opportunities in academia, travel, and beyond.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/italian (2).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div> */}

      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>Culture</div>
          <div className={styles.text2}>From the sun-kissed shores of the Amalfi Coast to the historic streets of Rome, immerse yourself in the beauty and splendor of Italy's art, music, cuisine, and traditions. Indulge in the rich flavors of authentic pasta and gelato, marvel at the timeless masterpieces of Michelangelo and Leonardo da Vinci, and revel in the passionate rhythms of Italian opera and dance. Experience the warmth of Italian hospitality in bustling piazzas and family-owned trattorias, and embrace the vibrant spirit of la dolce vita that permeates every aspect of Italian life.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/cc (8).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>

      </div>
      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
        <div className={styles.heading2}>Career</div>
          <div className={styles.text2}> In an increasingly globalized world, proficiency in Italian opens doors to a multitude of professional opportunities across various industries such as tourism, hospitality, international relations, art, and cuisine. Whether you aspire to work as a tour guide in the historic streets of Florence, manage luxury hotels along the picturesque Amalfi Coast, promote Italian culture and heritage as a diplomat, or pursue a career in fashion and design in Milan, fluency in Italian not only enhances your marketability but also deepens your appreciation for the rich cultural heritage of Italy.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/cc (5).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>

      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>Why Choose Us?</div>
          <div className={styles.text2}>Join our diverse community of language enthusiasts and embark on an enriching journey of learning and discovery. Whether you dream of exploring Italy's breathtaking landscapes, savoring its delicious cuisine, or simply connecting with native speakers, our Italian Language Club is the perfect place to start. Benvenuti!<br/><br/> We can't wait to share this adventure with you!</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/italian1.jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>

      </div>
      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
        <div className={styles.heading2}>Join Us</div>
          <div className={styles.text2}>Whether you're a student, a professional, or a Italian enthusiast, everyone is welcome at the Italian Language Club. Join us today and become part of a dynamic and engaged community! <br/><br/>

          For more information about our activities and upcoming events, feel free to explore our website or contact us directly. We look forward to welcoming you to our club and sharing our passion for the Italian language with you!</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/italian.png'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <Slider />
      </Reveal>
      <div className={styles.space}></div>

    </div>
  )
}

