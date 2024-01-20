import styles from "../../src/styles/Home/gallery.module.css"
import Image from "next/image"
import Reveal from "../Reveal"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

export default function Ourgallery() {
  return (
    <div className={styles.container}>
    <div>
    <Reveal>
      <div className={styles.title5}>Our Gallery</div>
    </Reveal>
      <Reveal>
      <div className={styles.scontainer}>
        <div className={styles.gallery}>
          <div className={styles.over1}/>
          <Image className={styles.img1} src={"/assests/1.jpg"} width={700} height={700} alt="image"/>
          <div className={styles.belowimg}>
          <div className={styles.hover1}>
            <div className={styles.over2}/>
            <Image className={styles.img2} src={"/assests/2.jpg"} width={700} height={700} alt="image"/>
          </div>
          <div className={styles.hover2}>
            <div className={styles.over3}/>
            <Image className={styles.img3} src={"/assests/3.jpg"} width={700} height={700} alt="image"/>
          </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.textcontainer}>
            <div className={styles.text1}>Reading Skills</div>
            <div className={styles.text1}>Writing Skills</div>
            <div className={styles.text1}>Speaking Skills</div>
            <div className={styles.text1}>Vocab and Spellings</div>
          </div>
          <Reveal>
          <div className={styles.title}>WHY CHOOSE US</div>
          </Reveal>
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
      </Reveal>
      </div>
    </div>
  )
}