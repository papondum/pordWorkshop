import Head from 'next/head'
import Image from 'next/image'
import img from './getstart.png'
import svgLine from './7_line.svg'
import svgPath from './7_path.svg'
import svgRound from './7_round.svg'
import svgWeb from './7_web.svg'
import svgMobile from './7_mobile.svg'
import avatar from './7_avatar.jpg'
import styles from './getstart.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        
          <div className={styles.card}>
            
            <div className={styles.svgd} style={{fontSize: 0,position: 'absolute', width: '15.1666667%',top:0, left: 0}}>
              <Image src={svgLine} />
            </div>
            <div className={styles.svgd} style={{fontSize: 0,position: 'absolute', top:0, width:'22%', right: 0}}>
              <Image src={svgPath} />
            </div>
            <div className={styles.svgd} style={{fontSize: 0,position: 'absolute',width: '4.16666667%', bottom:0, right: 0}}>
              <Image src={svgRound} />
            </div>
            <div className={styles.svgd} style={{fontSize: 0,position: 'absolute',width: '29.1666667%', bottom: 0, left: 0}}>
              <Image src={svgWeb} />
            </div>
            <div className={styles.cardinner}>
              <div className={styles.mobilestyle}>
                <div className={styles.mobileinnerstyle}>
                  
                    <div className={styles.titlemobile}>
                      <div className={styles.avatarwrapper}><Image src={avatar} /></div>
                      <span>Balance</span>
                      <h3>$12,000</h3>
                    </div>
                    <div className={styles.mobilegraph}>
                      <h3>Status</h3>
                      <div className={styles.weekwrap}>
                        <div className={styles.day}>
                          <span className={styles.price}>$ 100</span>
                          <div className={styles.bar}/>
                          <span className={styles.dayname}>Mon</span>
                        </div>
                        <div className={styles.day}>
                          <span className={styles.price}>$ 100</span>
                          <div className={styles.bar}/>
                          <span className={styles.dayname}>Tue</span>
                        </div>
                        <div className={`${styles.day} ${styles.active}`}>
                          <span className={styles.price}>$ 100</span>
                          <div className={styles.bar}/>
                          <span className={styles.dayname}>Wed</span>
                        </div>
                        <div className={styles.day}>
                          <span className={styles.price}>$ 100</span>
                          <div className={styles.bar}/>
                          <span className={styles.dayname}>Thu</span>
                        </div>
                        <div className={styles.day}>
                          <span className={styles.price}>$ 100</span>
                          <div className={styles.bar}/>
                          <span className={styles.dayname}>Fri</span>
                        </div>
                        <div className={styles.day}>
                          <span className={styles.price}>$ 100</span>
                          <div className={styles.bar}/>
                          <span className={styles.dayname}>Sat</span>                        
                        </div>
                        <div className={styles.day}>
                          <span className={styles.price}>$ 100</span>
                          <div className={styles.bar}/>
                          <span className={styles.dayname}>Sun</span>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className={styles.textwrapper}>
                <h2 className={`${styles.h} `}>Ready to get started?</h2>
                <p className={styles.p}>Products on online services or over the Internet. Electronic commerce draws on technologies such as mobile  commerce application</p>
              </div>
              
            </div>
            
          </div>
        
      </main>
    </div>
  )
}
