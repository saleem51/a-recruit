import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>a-recruit</title>
        <meta name="description" content="contenu optimisé SEO" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          A-RECRUIT
        </h1>
        
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
