import Head from 'next/head'
import Image from 'next/image'

const Services = () => {

    return ( 
        <>
        <Head>
          <title>CareerShiftng | Services</title>
        </Head>
        <section className="service">
          <div className="service-image">
             <Image src='/services.png' layout='fill'/>
          </div>
          <div className="service-content">
             <h2>OUR SERVICES</h2>
             <div className="services">
               <div className="service-det">
                  <Image src="/recruit.png" width={70} height={70}/>
                  <h4>RECRUITMENT SERVICES</h4>
                  <p>
                    360 Recruitment Services<br></br>
                    Human Resource Mgt<br></br>
                    Job Posting + Advert Placement<br></br>
                  </p>
               </div>
               <div className="service-det">
                  <Image src="/write.png" width={70} height={70}/>
                  <h4>TECHNICAL WRITING</h4>
                  <p>
                    Cover Letters<br></br>
                    Personal Statements<br></br>
                    LinkedIn Optimization<br></br>
                    Content + Creative Writing<br></br>
                    Project + Assignment Review<br></br>
                    Resume Wrting & Revamp<br></br>
                  </p>
               </div>
               <div className="service-det">
                  <Image src="/business.png" width={70} height={70}/>
                  <h4>BUSINESS TECHNICAL CONSULTING</h4>
                  <p>
                    Business Advisory<br></br>
                    Financial + Tax Consulting<br></br>
                    Business Plans & Proposals<br></br>
                    Business Promotions + Marketing<br></br>
                    Website + Logo + Graphics<br></br>
                    Design
                  </p>
               </div>
               <div className="service-det">
                  <Image src="/career.png" width={70} height={70}/>
                  <h4>CAREER COACHING</h4>
                  <p>
                    Interview Guides<br></br>
                    Career Mentorship<br></br>
                    Effective Networking<br></br>
                    Job Offer Negotiations
                  </p>
               </div>
             </div>
          </div>
        </section>
        </>
     );
}
 
export default Services;