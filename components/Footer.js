import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

import {AiOutlineMail} from 'react-icons/ai'
import {FiPhone} from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'



const Footer = () => {
    return ( 
        <footer className="footer">
            <Image src='/footer.png' width={128} height={77} alt='image-footer'/>
            <h1 className="logo">CAREERSHIFTng</h1>
            
            <div className="footer-icons">
                <Link href="/"><FaTwitterSquare className="icon"/></Link>
                <Link href="https://instagram.com/careershiftng" target='_blank'><FaInstagramSquare className="icon"/></Link>
                <Link href="/"><FaLinkedin className="icon"/></Link>
                <Link href="/"><FaFacebookSquare className="icon"/></Link>
            </div>
            <div className='footer-message'>
                <div className='m-align'><FiPhone className='icon-message' /><p> 08135326860</p></div>
                <div className='m-align'><AiOutlineMail className='icon-message' /> <p> careershiftng@gmail.com</p></div>
                
            </div>
        </footer>
     );
}
 
export default Footer;
