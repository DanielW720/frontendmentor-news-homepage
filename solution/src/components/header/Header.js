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
            <div
                className={styles['nav-container']}
                onClick={(e) => {
                    // Only call handleShowNavClick if div is clicked, not if nav is clicked
                    if (e.target === e.currentTarget) {
                        handleShowNavClick();
                    }
                }}
                style={
                    {
                        "left": `${showNav ? '0' : '100%'}`
                    }
                }>
                <nav style={
                    {

                    }
                }>
                    <div className={styles["close-icon-container"]}>
                        <img src={menuClose} alt="Menu close button" onClick={handleShowNavClick} />
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>New</li>
                        <li>Popular</li>
                        <li>Trending</li>
                        <li>Categories</li>
                    </ul>
                </nav>
            </div>
            <button onClick={handleShowNavClick} >
                <img src={mobileMenu} alt="Menu button" />
            </button>
        </header>
    );
}

export default Header;
