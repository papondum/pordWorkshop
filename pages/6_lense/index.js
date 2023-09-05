import Head from 'next/head'
import Image from 'next/image'
import tablet from './6_tablet.jpg'
import svgD from './6_D.svg'
import svgCol from './6_column.svg'
import styles from './lense.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.flex}>
          <div className={styles.card}>
            <h2 className={styles.title}>High-quality lenses</h2>
            <p className={styles.paragraph}>You decide when to receive, pause or cancel your subscription. No extra fees - simple.</p>
          </div>
          <div className={styles.imgwrapper}>
            <div style={{marginBottom: 48,top: 0, display: 'inline-flex',position: 'relative',
    alignSelf: 'center'}}>
              <Image src={svgD}/>
              <div style={{position:'absolute', top: 0, display: 'inline-flex'}}><Image src={svgCol}/></div>
              <div className={styles.imgbase}>
                <Image src={tablet}/>
              </div>
            </div>
            </div>
        </div>
      </main>
    </div>
  )
}
