import styles from './Header.module.css';
import blogLogo from '../assets/logo.svg';

export function Header(){
    return (
        <header className={styles.header}>
            <img src={blogLogo} />
            <h1> Meu Blog</h1>
        </header>
    )
}