import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <>
       <Head>
         <title>CareerShiftng | Home</title>
       </Head>
    <main className="home">
      <h2>COMPETITIVE PACKAGES</h2>
        <div className="cards">
          <div className="card one">
            <p className="card-title">Beginner Package</p>
            <button>Get Package</button>
          </div>

          <div className="card two">
            <p className="card-title">Entry-level Package</p>
            <button>Get Package</button>
          </div>
          <div className="card three">
            <p className="card-title">Mid-level Package</p>
            <button>Get Package</button>
          </div>
          <div className="card four">
            <p className="card-title">Professional Package</p>
            <button>Get Package</button>
          </div>
        </div>
      
        <div className="review">
          <p>What our customers are saying..</p>
          <div></div>

        </div>
    </main>
  </> 
  )
}
