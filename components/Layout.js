import Footer from "./Footer";
import Navbar from "./Navbar";
import {Poppins} from "next/font/google";

const poppins_init = Poppins({
   subsets:["latin"],   
   weight:["100","300","500","700"],
   variable: "--font-poppins",
   display: "swap",
   adjustFontFallback: false,
 });

const Layout = ({ children }) => {
    return (
        <div className={`${poppins_init.variable} content `}>
           <Navbar />
           { children }
           <Footer />
        </div> 
    
     );
}
 
export default Layout;