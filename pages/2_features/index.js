import Head from 'next/head'
import Image from 'next/image'
import styles from './features.module.css'
import img1 from './Iconfeatures1.png'
import img2 from './Iconfeatures2.png'
import img3 from './Iconfeatures3.png'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Features</title>

      </Head>
      <main className={styles.main}>
        <h2 className={styles.title}>Features</h2>
        <div className={styles.flex}>
          <div className={styles.card}>
            <div className={styles.iconwrapper}>
              <Image src={img1}/>
            </div>
            <div>
              <h2>Find a Doctor</h2>
              <p>Find new doctor and care your-self list with best care jear you..</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.iconwrapper}>
              <Image src={img2}/>
            </div>    
            <div>
              <h2>Estimate Your Cost</h2>
              <p>Estimate your cost and get the best  medical experiences ..</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.iconwrapper}>
              <Image src={img3}/>
            </div>
            <div>
              <h2>Medical Student</h2>
              <p>Build a bettert medical student engage with our special content ..</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
