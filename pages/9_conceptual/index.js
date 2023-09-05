import Head from 'next/head'
import Image from 'next/image'
import styles from './conceptual.module.css'
import logo from './besnillogo.png'
import fbimg from './fbicon.png'
import igimg from './igicon.png'
import ytimg from './yticon.png'
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.flex}>
          <div className={styles.card}>
            <div className={styles.innercard}>
              <div><Image src={logo} /></div>
              <p>Copyright © 2020.Besnik creative</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.innercard}>
              <div className={styles.input}>
                <input type="text" placeholder='Your business email...'/>
                <button>Get started </button>
              </div>
              <div className={styles.menu}>
                <div>ABOUT</div>
                <div>HOW IT WORKS</div>
                <div>CONTACT</div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.innercard}>
              <div className={styles.iconlist}>
              <Image src={fbimg} height={12} width={8}/>
              <Image src={igimg} height={12} width={12}/>
              <Image src={ytimg} height={12} width={12}/>
              </div>
              <p>Designed by Besnik</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
