import Head from 'next/head'
import Image from 'next/image'
import swimg from './sweater.png'
import styles from './product.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <div className={styles.flex}>
          <div className={styles.card}>
              <div className={styles.title}>Discover the Difference.</div>
          </div>
          <div className={styles.card}>
            <div className={`${styles.card1} ${styles.cardstyle1}`}>
                <Image src={swimg} />
                <h2>Product</h2>
                <p>Online shopping for retail sales direct to consumers via Web sites and mobile apps.</p>
            </div>
            <div className={`${styles.card1} ${styles.cardstyle2}`}>
              <h2>Trading</h2>
              <p>Online financial exchanges for currency exchanges or trading purposes.</p>
          </div>
          </div>
        </div>
        
      </main>
    </div>
  )
}
