import Head from 'next/head'
import Image from 'next/image'
import styles from './footer.module.css'
import img from './besnik.png'
import fbimg from './fbicon.svg'
import igimg from './igicon.svg'
import ytimg from './yticon.svg'
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.contentwrap} style={{marginTop: 1400/878+'%'}}>
          <div className={styles.title}>How can we help you. get in touch</div>
          <div className={styles.flex}>
            <div className={styles.desc}>To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</div>
            <button className={styles.button}>Contact Us</button>
          </div>
        </div>
        <footer className={styles.footer}>
        <div className={styles.footeraction}>
          <div style={{alignItems: 'end', display: 'flex'}}>
            <Image src={img}/>
          </div>
          <div className={styles.menuwrapper}>
            <div className={styles.menuitem}>ABOUT</div>
            <div className={styles.menuitem}>SERVICE</div>
            <div className={styles.menuitem}>WHY US</div>
            <div className={styles.menuitem}>CONTACT</div>
          </div>
          <div className={styles.iconlist}>
            <div className={styles.iconbutton} ><Image src={fbimg} /></div>
            <div className={styles.iconbutton} ><Image src={igimg} /></div>
            <div className={styles.iconbutton} ><Image src={ytimg} /></div>
          </div>
        </div>
        <div style={{width:'100%', height: '1px', background: '#2c2c2c'}}/>
        <div className={styles.copyright}>Copyright © 2020 Besnik Creative</div>
      </footer>
      </main>
     
    </div>
  )
}
