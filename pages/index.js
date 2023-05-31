/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import workingLady from "../public/serious-worker.png";
import Link from 'next/link'

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
            <h2 className="hero-title">CAREERSHIFTng</h2>
            <p className="hero-text">Lets help you build the career you desire</p>
            <div className="hero-button-container">
              <Link className="hero-button bt1" href={`/services`}>Our Services</Link>
              <Link className="hero-button bt2" href={`/contacts`}>Contact Us</Link>
            </div>
          </div>
          <div className="hero-item hero-two">
            <Image src={workingLady} fill style={{objectFit: 'contain'}} alt="working-lady"/>
          </div>
          </div>
        </section>

        <h2 className="title">COMPETITIVE RESUME PACKAGES</h2>
        <section className="cards">
          <div className="card one">
            <h4 className="card-title">BASIC</h4>
            <p className="card-detail price">$22</p>
            <p className="card-detail">
              <Image src="/check-mark.png" width={13} height={10} />
              CV Revamp
            </p>
            <p className="card-detail">
              <Image src="/check-mark.png" width={13} height={10} />
              Cover Letter
            </p>
          </div>

          <div className="card two">
            <h4 className="card-title">STANDARD</h4>
            <p className="card-detail price">$35</p>
            <p className="card-detail">
              <Image src="/check-mark.png" width={13} height={10} />
              CV Revamp
            </p>
            <p className="card-detail">
              <Image src="/check-mark.png" width={13} height={10} />
              Cover Letter
            </p>
            <p className="card-detail">
              <Image src="/check-mark.png" width={13} height={10} />
              Linkedin Optimization
            </p>
          </div>
          <div className="card three">
            <h4 className="card-title">GOLD</h4>
            <p className="card-detail price">$48</p>
            <p className="card-detail">
              <Image src="/check-mark.png" width={13} height={10} />
              CV Revamp
            </p>
            <p className="card-detail">
              <Image src="/check-mark.png" width={13} height={10} />
              Cover Letter
            </p>
            <p className="card-detail">
              <Image src="/check-mark.png" width={13} height={10} />
              Interview Session
            </p>
            <p className="card-detail">
              <Image src="/check-mark.png" width={13} height={10} />
              Linkedin Optimization
            </p>
          </div>
          <div className="card four">
            <h4 className="card-title">PREMIUM</h4>
            <p className="card-detail price">$69</p>
            <p className="card-detail">
              <Image src="/check-mark.png" width={13} height={10} />
              CV Revamp
            </p>
            <p className="card-detail">
              <Image src="/check-mark.png" width={13} height={10} />
              Cover Letter
            </p>
            <p className="card-detail">
              <Image src="/check-mark.png" width={13} height={10} />
              Job Search
            </p>
            <p className="card-detail">
              <Image src="/check-mark.png" width={13} height={10} />
              Career Coaching
            </p>
            <p className="card-detail">
              <Image src="/check-mark.png" width={13} height={10} />
              Interview Session
            </p>
            <p className="card-detail">
              <Image src="/check-mark.png" width={13} height={10} />
              Linkedin Optimization
            </p>
          </div>
        </section>

        <section className="reviews">
          <p className="review-title">What our customers are saying..</p>
          <div className="review-section">

          
          {/* <button className="left" onclick={handleLeftScroll}><Image src="/left-arrow.png"  width={30} height={30}/></button> */}
          
              <div className="review">
                <p>I contracted careershiftng for a CV revamp and a cover letter set-up and the results 
                  I got were mind blowing even to me at first and I have gotten several interviews just from the work they did.</p>
                <p>Josh | Financial Accountant</p>
              </div>

              <div className="review">
                <p>I contracted careershiftng for a CV revamp and a cover letter set-up and the results I got were mind blowing even to me at first 
                  and I have gotten several interviews just from the work they did.</p>
                <p>Valerie | Web Developer</p>
              </div>
              </div>
              {/* <button className="right" onclick={handleRightScroll}><Image src="/right-arrow.png" width={30} height={30}/></button> */}
            

        </section>
      </main>
    </>
  );
}
