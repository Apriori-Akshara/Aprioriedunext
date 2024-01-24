import React from 'react'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'


export default function LanguageClub() {
  return (
    <div>
      <div className={styles.topcontainer}>
        <div className={styles.tint}/>
        <Image className={styles.img} src={'/content/17.jpg'} width={2400} height={1400} alt="img"/>
        <div className={styles.textcontainer}>
          <div className={styles.heading1}>Contact Us</div>
          <div className={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
      <div className={styles.consubcontainer}>
          <div className={styles.contopic}>Get in touch</div>
          <div className={styles.coninfos}>
            <div className={styles.coninfo}>
              <div className={styles.coninfotitle}>Address Info:</div>
              303 A, <br />
              Hemkunt Chambers, <br />
              Nehru Place 110019
            </div>
            <div className={styles.coninfo}>
              <div className={styles.coninfotitle}>Email Info:</div>
              <b>Operations:</b> <br /> operations@hyperglotreview.com
              <br /><br/>
              <b>Sales & Marketing:</b> <br /> info@hyperglotreview.com
              <br />
            </div>
            <div className={styles.coninfo}>
              <div className={styles.coninfotitle}>Phone Info:</div>
              <b>Landline</b> <br /> 011 3569 1637
              <br /><br/>
              <b>Operations</b> <br /> +91 97171 89650/ 659
              <br /><br/>
              <b>Sales</b> <br /> +91 97170 41338
              <br />
            </div>
          </div>
        </div>

        <div className={styles.consubcontainer}>
          <div className={styles.conflex}>
            <div className={styles.conmapcontainer}>
              <div className={styles.conmaptitle}>Location Map</div>
              <div className={styles.conmapp}>
                <iframe
                  className={styles.conframe}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.3476705615544!2d77.25111663864222!3d28.548875650008164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c5169e0e05%3A0xcd70c7b07c55f036!2sHemkunt%20Chambers!5e0!3m2!1sen!2sin!4v1701147259591!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className={styles.conmapcontainer}>
              <div className={styles.conmaptitle}>Message Us</div>
              <form className={styles.conform}>
                <input type='text' placeholder="Full Name" name='name' required />
                <input type='text' placeholder="Email Address" name='mail' required />
                <textarea type='text' placeholder="Write a Message" name='message' required />
                <button type='submit' className={styles.conbutton}>Send</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}