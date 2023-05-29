import Link from 'next/link'
import { FaBars, FaTimes } from "react-icons/fa";
import styles from '../styles/Navbar.module.css'



const Navbar = () => {
    return (     
        <nav className={styles.navHolder}>
            <div className={styles.logo}>
                <h1>CAREERSHIFTng</h1>
            </div>
            <div className={styles.navLinkHolder}>
                <Link className={styles.navLink} href="/">Home</Link>               
                <Link className={styles.navLink} href="/about">About</Link>
                <Link className={styles.navLink} href="/services">Services</Link>
                <Link className={styles.navLink} href="/contacts">Contacts</Link>
                <button className={styles.navBtn}><FaTimes /></button>
            </div>
            <button className={styles.navBtn}><FaBars /></button>
        </nav>
     );
}
 
export default Navbar;