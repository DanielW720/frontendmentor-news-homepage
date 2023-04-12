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
                        // If showNav, instantly "drag" the nav menu in from the right
                        "left": `${showNav ? '0' : '100%'}`,
                        // Keep dark background when nav menu swipes back to the right
                        "transitionDelay": `${showNav ? '0s' : '0.25s'}`
                    }
                }>
                <nav style={
                    {
                        // If showNav, transition in nav menu from the right
                        "left": `${showNav ? '30%' : '100%'}`
                    }
                }>
                    <div className={styles["close-icon-container"]}>
                        <img src={menuClose} alt="Menu close button" onClick={handleShowNavClick} />
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">New</a></li>
                        <li><a href="#">Popular</a></li>
                        <li><a href="#">Trending</a></li>
                        <li><a href="#">Categories</a></li>
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
