import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
               <h1>CAREERSHIFTng</h1>
            </div>
            <Link className="nav-link" href="/">Home</Link>
            <Link className="nav-link" href="/team">Team</Link>
            <Link className="nav-link" href="/about">About</Link>
            <Link className="nav-link" href="/services">Services</Link>
            <Link className="nav-link" href="/contacts">Contacts</Link>
        </nav>
     );
}
 
export default Navbar;