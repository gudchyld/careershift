import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image'
const Footer = () => {
    return ( 
        <footer className="footer">
            <Image src='/footer.png' width={128} height={77}/>
            <h1 className="logo">CAREERSHIFTng</h1>
            
            <div className="footer-icons">
                <FaTwitterSquare className="icon"/>
                <FaInstagramSquare className="icon"/>
                <FaLinkedin className="icon"/>
                <FaFacebookSquare className="icon"/>
            </div>
        </footer>
     );
}
 
export default Footer;
