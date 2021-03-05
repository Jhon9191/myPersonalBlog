import Head from 'next/head'
import styles from './FotoPerfil.module.css'

export default function Conteudo() {
  return (
    <img className={styles.imagem} src="fotoJoao.jpg" alt="Foto-João" />
  )
}
