/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Image from "next/image";
import founder from "../public/happy-founder.png";

const About = () => {
  return (
    <>
      <Head>
        <title>CareerShiftng | About</title>
      </Head>
      <section className="about">
        <div className="about-image">
          <Image
            src="/about2.jpg"
            layout="fill"
            alt="about-tom-image"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="about-content">
          <h2>Yes, you found us</h2>
          <p>
            {" "}
            Careershiftng consulting is a network of trusted technical
            consultants who offer best-in-class human resources, technical
            writing, career mentorship and business consulting services. The
            company was incorporated in January 2022 and has grown to achieve
            outstanding client satisfaction ratings and positive reviews for
            over 1000 jobs completed
          </p>
          <h2>We have a story</h2>
          <p>
            Careershiftng was initially created on the premise of assisting
            young graduates to easily navigate through complex job-hunting
            requirements and career decisions after school. Based on popular
            demands, the company extended its services to senior-level
            professionals across all career fields and global business entities
            using a network of professional consultants and business partners
            who have stood the test of time in building successful careers and
            businesses in Nigeria and across continents.
          </p>
          <h2>Our Founder</h2>
          <div className="about-founder-image">
            <Image
              src={founder}
              fill={true}
              alt="ifeoma, founder"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <h3>ELENDU LILIAN (ACA, MBA)</h3>
          <h4 className="subtitle">
            Founder & Lead, Business consulting and Human resources
          </h4>
          <p className="founder-details">
            Lilian is an experienced chartered accountant who has achieved giant
            strides in business consulting, finance and human capital management
            across the public sector, ICT, telecommunications and FMCG industry.
            She started her career as a lead consultant for finance and human
            resources services to becoming an assistant manager in a government
            agency and currently serve as the lead, finance operations &
            business intelligence with one of the leading FMCG companies in
            Nigeria. A graduate of the university of Abuja with distinctions and
            masters in business administration from Nexford University,
            Washington DC. She developed skills and ventured into business
            consulting and people management where she has achieved great
            milestones connecting and networking with great minds.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
