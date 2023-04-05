import styles from './Header.module.css';
import mobileMenu from './../../assets/images/icon-menu.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles['w-logo']}>W.</div>
            <button>
                <img src={mobileMenu} alt="menu" />
            </button>
        </header>
    );
}

export default Header;
