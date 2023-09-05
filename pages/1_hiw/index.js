import Head from 'next/head'
import Image from 'next/image'
import styles from './first.module.css'
import img1 from './Iconhiw1.png'
import img2 from './Iconhiw2.png'
import img3 from './Iconhiw3.png'
export default function Home() {
  return (
    <div className={styles.first_container}>
      <Head>
        <title>First assignment</title>

      </Head>
      <main className={styles.main}>
        <div className={styles.title}>How it works?</div>
        <div className={styles.flex}>
          <div className={styles.card}>
            <div className={styles.icon} style={{background: '#9672FF'}}>
              <Image
                src={img1}
                width={25}
                height={25}
              />
            </div>
            <h2>Research Suburbs</h2>
            <p>Get started swiftly & easily by importing a  demo of your choice in a single click.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon} style={{background: '#4DDFFD'}}>
              <Image
                src={img2}
                width={25}
                height={25}
              /></div>
            <h2>Instant Valuation</h2>
            <p>Over 30 high quality profession designed re-built website concepts to choose from.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon} style={{background: '#F2B8EC'}}>
            <Image
      src={img3}
      width={25}
      height={25}
    />
            </div>
            <h2>Track Property</h2>
            <p>Build your website using fully visual interface, using our revolutionary page builder.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
