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

          <div className={styles.textBoasVindas}>
            <h1>Seja bem vindo!</h1>
          </div>

        <Photo/>

            
              <div className={styles.history}>
                  <p>
                  Olá meu nome é <b>João Antônio</b>, tenho 21 anos de idade,  sou programador
                  <b> FULL STACK</b> iniciante mas já com bastante prrojetos praticados e postados
                  no github, eu amo codificar e amo ainda mais o javascript, pois ele foi
                  o meu primeiro ponto que eu fiquei agarrado, mas depois de estudar e estudar,
                  vi o quanto ele é poderoso para criação de API, sites, aplicativos,etc.
                  </p>
              </div>
            


        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
