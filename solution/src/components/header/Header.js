import styles from './Header.module.css';
import mobileMenu from './../../assets/images/icon-menu.svg';
import menuClose from './../../assets/images/icon-menu-close.svg';
import { useState } from 'react';

const Header = () => {
    const [showNav, setShowNav] = useState(false);

    const handleShowNavClick = () => {
        setShowNav(prevState => !prevState);
    }

    return (
        <header className={styles.header}>
            <div className={styles['w-logo']}>W.</div>
            {showNav ?
                <div className={styles['nav-container']}>
                    <div className={styles["close-icon-container"]}><img src={menuClose} /></div>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>New</li>
                            <li>Popular</li>
                            <li>Trending</li>
                            <li>Categories</li>
                        </ul>
                    </nav>
                </div> :
                <button onClick={handleShowNavClick}>
                    <img src={mobileMenu} alt="menu" />
                </button>}

        </header>
    );
}

export default Header;
