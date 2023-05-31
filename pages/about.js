/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import Image from 'next/image'
import founder from '../public/ifeoma, founder 2.png'

const About = () => {
    return (  
        <>
        <Head>
          <title>CareerShiftng | About</title>
        </Head>
        <section className="about">
          <div className="about-image">
             <Image src='/about.png' layout="fill"/>
          </div>
          <div className="about-content">
          <h2>Yes, you found us</h2>
          <p> Careershiftng consulting is a network of trusted technical consultants who offer best-in-class human resources, technical writing, career mentorship and business consulting services. 
            The company was established in January 2022 and has grown to achieve 100% client satisfaction ratings across all services rendered
          </p>
          <h2>We have a story</h2>
          <p>Careershiftng was initially created on the premise of assisting young graduates to easily navigate through complex job-hunting requirements and career decisions after school.
             Based on popular demands, the company extended its services to senior-level professionals across all career fields and global business entities using a network of professional consultants 
             and business partners who have stood the test of time in building successful careers and businesses in Nigeria and across continents.
          </p>
          <h2>Our Founder</h2>
           <Image src={founder} width={300} height={420}
           alt="ifeoma, founder"
           />
           <h3>ELENDU LILIAN</h3>
           <h4 className="subtitle">FOUNDER,  BUSINESS CONSULTING AND  HUMAN RESOURCES</h4>
          <p className="founder-det">Lilian is an experienced chartered accountant with giant strides in tax, ICT and telecommunication sector. She started her career as a lead consultant for finance and human resources to becoming an assistant manager with a government agency.
             A  graduate of the University of Abuja with distinctions and currentiy pursuing an MBA with Nexford University, Washington DC. 
             She developed skills and ventured into business consulting and people management where she has achieved great milestones connecting and networking with great minds in the business community.
          </p>
          </div>

        </section>
        </>
    );
}
 
export default About;