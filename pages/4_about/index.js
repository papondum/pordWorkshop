import Head from 'next/head'
import Image from 'next/image'
import styles from './about.module.css'
export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.title}>About us</div>
        <div className={styles.subtitle}>we know your home is more than just a place to live, that’s why we’re committed to providing the best home</div>
        <div className={styles.flex}>
          <div className={styles.card}>
              <h2>50</h2>
              <p>Numbers of Lenders</p>
          </div>
          <div className={`${styles.card} ${styles.active}`}>
              <h2>100+</h2>
              <p>Completed Loans (valu$m)</p>
          </div>
          <div className={styles.card}>
              <h2>25</h2>
              <p>Live Loans</p>
          </div>
          <div className={styles.card}>
              <h2>12</h2>
              <p>Live Transactions</p>
          </div>
        </div>
      </main>
    </div>
      <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.title}>About us</div>
        <div className={styles.subtitle}>we know your home is more than just a place to live, that’s why we’re committed to providing the best home</div>
        <div className={`${styles.flex} ${styles.secondflex}`} >
          <div className={styles.card_s}>
              <h2>50</h2>
              <p>Numbers of Lenders</p>
          </div>
          <div className={styles.card_s}>
              <h2>100+</h2>
              <p>Completed Loans (valu$m)</p>
          </div>
          <div className={styles.card_s}>
              <h2>25</h2>
              <p>Live Loans</p>
          </div>
          <div className={styles.card_s}>
              <h2>12</h2>
              <p>Live Transactions</p>
          </div>
          <div className={`${styles.slider} ${styles.starter}`} />
        </div>
      </main>
    </div>
      </>
  )
}