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

      <Header />

      <main className={styles.main}>
          <div className={styles.textBoasVindas}>
            <h1>Seja bem vindo!</h1>
            <h4>Hora de codar</h4>
          </div>

        <div className={styles.body}>
         <img className={styles.imagem} src="fotoJoao.jpg" alt="Foto-João" />
        <div className={styles.card}>
        <p>
                Olá meu nome é <b>João Antônio</b>, tenho 21 anos de idade,  sou programador
                <b> FULL STACK</b> iniciante mas já possuo bastante projetos postados
                no github, eu amo codificar e amo ainda mais o javascript, pois ele foi
                o meu primeiro ponto que eu fiquei agarrado, mas depois de estudar e estudar,
                vi o quanto ele é poderoso para criação de API, sites, aplicativos,etc.
                </p>
        </div>

         

          {/* <div  className={styles.containerCard}>
            <div className={styles.subCard} style={{margin: 25}}>
              <div className={styles.marcador}></div>
              <div className={styles.subCard} style={{
                marginTop: 30, marginInlineStart: 30, padding: 20,
                background: "#fff", color: "#000", justifyContent: 'center',
                alignItems: 'center', display: 'flex'}}>
                   <p>
                Olá meu nome é <b>João Antônio</b>, tenho 21 anos de idade,  sou programador
                <b> FULL STACK</b> iniciante mas já possuo bastante projetos postados
                no github, eu amo codificar e amo ainda mais o javascript, pois ele foi
                o meu primeiro ponto que eu fiquei agarrado, mas depois de estudar e estudar,
                vi o quanto ele é poderoso para criação de API, sites, aplicativos,etc.
                </p>
              </div>
            </div>
          </div> */}

        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
