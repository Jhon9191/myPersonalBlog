import Head from 'next/head'
import styles from './FotoPerfil.module.css'

export default function Conteudo() {
  return (
    <div className={styles.box2}>
      <img src="fotoJoao.jpg" alt="Foto-João" />
    </div>
  )
}
