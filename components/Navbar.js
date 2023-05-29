import Link from 'next/link'
import { FaBars, FaTimes } from "react-icons/fa";
import styles from '../styles/Navbar.module.css'
import classNames from 'classnames';
import { useRef } from 'react';


const Navbar = () => {

    const navRef = useRef(null);
    const showNav = () => {
        navRef.current.classList.toggle(styles.show)
    }
    return (     
        <nav className={styles.navHolder}>
            <div className={styles.logo}>
                <h1>CAREERSHIFTng</h1>
            </div>
            <div className={styles.navLinkHolder} ref={navRef}>
                <Link onClick={showNav} className={styles.navLink} href="/">Home</Link>               
                <Link onClick={showNav} className={styles.navLink} href="/about">About</Link>
                <Link onClick={showNav} className={styles.navLink} href="/services">Services</Link>
                <Link onClick={showNav} className={styles.navLink} href="/contacts">Contacts</Link>
                <button onClick={showNav} className={classNames(styles.navBtn, styles.navBtnClose)}><FaTimes /></button>
            </div>
            <button onClick={showNav} className={styles.navBtn}><FaBars /></button>
        </nav>
     );
}
 
export default Navbar;