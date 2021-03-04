import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header/Header';
import Photo from '../components/FotoPefil/FotoPerfil'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>João Antônio</title>
      </Head>

      <Header/>

      <main className={styles.main}>
        <div className={styles.body}>
        <Photo/>

        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
