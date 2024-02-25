/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Image from "next/image";
import {Roboto} from "next/font/google";
// import styles from "@/styles/Home.module.css";

import careerImage from "../public/Career-image-collage-up3.png";
import Link from "next/link";

// const roboto_init = Roboto({
//   subsets:["latin"],
//   weight:["100","300", "500","700"]
// })

export default function Home() {
  // function handleLeftScroll() {
  //   const left = document.querySelector(".review");
  //   left.scrollBy(200, 0);
  // }

  // function handleRightScroll() {
  //   const right = document.querySelector(".review");
  //   right.scrollBy(-200, 0);
  // }

  return (
    <>
      <Head>
        <title>CareerShiftng | Home</title>
      </Head>
      <main className="home">
        {/* Hero goes here */}
        <section className="hero-holder">
          <div className="hero-container">
            <div className="hero-item hero-one">
              <h2 className={`poppins hero-title`}>CAREERSHIFTng</h2>
              <p className="hero-text">
                Lets help build the career you deserve
              </p>
              <div className="hero-button-container">
                <Link className="hero-button bt1" href={`/services`}>
                  Our Services
                </Link>
                <Link className="hero-button bt2" href={`/contacts`}>
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hero-item hero-two">
              <Image
                src={careerImage}
                fill
                style={{ objectFit: "contain" }}
                alt="working-lady"
              />
            </div>
          </div>
        </section>

        {/* Services Begin here */}
        <div className="service-content">
          <h2>OUR SERVICES</h2>
          <div className="services">
            <div className="service-det light">
              <Image
                src="/recruit.png"
                width={70}
                height={70}
                alt="image-recruit"
              />
              <h4>RECRUITMENT SERVICES</h4>
              <p>
                360 Recruitment Services<br></br>
                Human Resource Mgt<br></br>
                Job Posting + Advert Placement<br></br>
              </p>
            </div>
            <div className="service-det">
              <Image
                src="/write.png"
                width={70}
                height={70}
                alt="image-writer"
              />
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
            <div className="service-det light">
              <Image
                src="/business.png"
                width={70}
                height={70}
                alt="image-business"
              />
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
              <Image
                src="/career.png"
                width={70}
                height={70}
                alt="image-career"
              />
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


        {/* Begin Reviews */}
        <section className="reviews">
          <p className="review-title">What our customers are saying..</p>
          <div className="review-section">
            {/* <button className="left" onclick={handleLeftScroll}><Image src="/left-arrow.png"  width={30} height={30}/></button> */}

            <div className="review">
              <p>
                I contracted careershiftng for a CV revamp and a cover letter
                set-up and the results I got were mind blowing even to me at
                first and I have gotten several interviews just from the work
                they did.
              </p>
              <p>Josh | Financial Accountant</p>
            </div>

            <div className="review">
              <p>
                My company contracted careershiftng for business and tax
                advisory services, the solutions provided were outstanding and
                the company was saved over a million naira in tax cost..
              </p>
              <p>Jehoshaphat | CEO Gadutech</p>
            </div>
          </div>
          {/* <button className="right" onclick={handleRightScroll}><Image src="/right-arrow.png" width={30} height={30}/></button> */}
        </section>
      </main>
    </>
  );
}
