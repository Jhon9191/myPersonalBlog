import styles from './Header.module.css'
import { Button } from 'reactstrap'

const Header = () => {
    return (
        <header className={styles.Header}>
             <nav className={styles.nav_links}>
                <li><a href="/">Inicio</a></li>
                <li><a href="/Sobre">Sobre</a></li>
                <li><a href="/Contato">Contato</a></li>
            </nav> 
        </header>
    );
}

export default Header;