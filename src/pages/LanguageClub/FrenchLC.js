import React from 'react'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'
import Slider from "../../../components/home/LanguagesSlider" 
import Reveal from '../../../components/Reveal'

export default function FrenchLC() {
  return (
    <div>
    <div className={styles.bigheading}>French Language Club</div>

      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>Welcome to the French Language Club!</div>
          <div className={styles.text2}>We are thrilled to introduce you to the French Language Club, a vibrant community dedicated to the exploration, learning, and appreciation of the beautiful French language. Whether you're a complete beginner or aiming to enhance your linguistic skills, our club provides a welcoming and stimulating environment for delving into French in all its richness.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/2 (11).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>

      </div>
      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
        <div className={styles.heading2}>About Us</div>
          <div className={styles.text2}>We organize cultural events, film screenings, French cuisine tastings, trips, and encounters with French speakers to explore and celebrate this diversity. Thematic workshops cover a wide range of topics such as French cuisine, Francophone literature, French history, music, and more. Movie nights, guided tours, concerts, wine tastings, and art exhibitions are integral parts of our calendar for exploring French culture in all its forms.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/2 (2).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>

      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>Academics</div>
          <div className={styles.text2}>Dedicated to fostering a passion for the French language within academic settings, we cater to schools and colleges seeking to enhance their language programs. Our club offers comprehensive resources, engaging activities, and immersive experiences designed to cultivate fluency and cultural appreciation. Whether you're a student eager to expand your language skills or an institution aiming to enrich your curriculum, our experienced educators and tailored programs ensure a rewarding journey into the beauty and depth of French language and culture.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/france.jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>

      </div>
      {/* <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
        <div className={styles.heading2}>Why we are better?</div>
          <div className={styles.text2}>What sets us apart? It's our unwavering commitment to providing unparalleled quality in language education. Our team of dedicated instructors brings years of expertise and passion to every lesson, ensuring that students receive the highest caliber of instruction. From innovative teaching methods to personalized attention, we tailor our approach to meet the unique needs of each learner, fostering rapid progress and lasting fluency. Our immersive environment goes beyond the classroom, offering cultural experiences and interactive activities that enrich the learning journey.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/france.webp'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div> */}

      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>Culture</div>
          <div className={styles.text2}>Embark on a journey through the captivating tapestry of French culture with our French Language Club. From the romantic allure of Parisian streets to the exquisite flavors of French cuisine, immerse yourself in the art, literature, music, and traditions that define this rich and diverse heritage. Explore the works of iconic French writers, savor the delights of fine wines and cheeses, and celebrate the vibrant festivals that punctuate the French calendar.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/cc (7).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>

      </div>
      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
        <div className={styles.heading2}>Career</div>
          <div className={styles.text2}>In today's interconnected world, proficiency in French opens pathways to diverse professional fields such as international business, diplomacy, hospitality, interpretation, and more. Whether your aspirations lead you to navigate global markets, represent your nation on diplomatic platforms, or guide tourists through the charming avenues of French cities, mastering French not only equips you with essential skills but also unlocks a world of opportunities.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/cc (2).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>

      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>Why Choose Us?</div>
          <div className={styles.text2}>By joining the French Language Club, you'll have the opportunity to meet like-minded people, improve your language skills, and discover the cultural richness of the Francophone world. Whether you're motivated by travel, literature, gastronomy, or simply the joy of learning, our club provides a friendly platform to explore your passions and broaden your horizons.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/france (1).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>

      </div>
      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
        <div className={styles.heading2}>Join Us</div>
          <div className={styles.text2}>Whether you're a student, a professional, or a French enthusiast, everyone is welcome at the French Language Club. Join us today and become part of a dynamic and engaged community! <br/><br/>

For more information about our activities and upcoming events, feel free to explore our website or contact us directly. We look forward to welcoming you to our club and sharing our passion for the French language with you!</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/french (2).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <Slider className={styles.btm}/>
      </Reveal>
      <div className={styles.space}></div>

    </div>
  )
}
