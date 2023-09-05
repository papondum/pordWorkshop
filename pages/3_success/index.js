import Head from 'next/head'
import Image from 'next/image'
import styles from './success.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Features</title>

      </Head>
      <main className={styles.main}>
        <div className={styles.title}>Get to know about us</div>
        <div className={styles.flex}>
          <div className={styles.card}>
            <div className={styles.innercard}>
              <div className={styles._innerest}>
              <h2>22k+</h2>
              <p>Use Order Online</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.innercard}>
            <div className={styles._innerest}>
              <h2>459</h2>
              <p>Trusted Clients</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.innercard}>
            <div className={styles._innerest}>
              <h2>12k</h2>
              <p>Use Order Online</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
