import "@/scss/hero.scss"
import { GoDotFill } from "react-icons/go";
import { IoRocketOutline } from "react-icons/io5";
import { FiFacebook, FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section id="home" className="bg">
        <div className="container">
          <div className="introduction">
            <div className="about">
              <h1>Hi, I&apos;m Abdullah 👋</h1>
              <p>I&apos;m a full stack developer &#40;React.js & Next.js&#41; with a focus on creating &#40;and ocassionally designing&#41; exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
            </div>
            <div className="qualities">
              <span style={{ display: "flex" }}><IoRocketOutline style={{ padding: "0 15px" }} /><p>Focused on delivering high-quality, impactful projects</p></span>
              <span style={{ display: "flex" }}><GoDotFill style={{ padding: "0 15px", color: "green" }} /><p>Available for new projects</p></span>
            </div>
            <div className="social-icons">
              <a href="https://facebook.com/abdullah.sheikh.97" target="_blank" rel="noopener noreferrer"><span><FiFacebook /></span></a>
              <a href="https://instagram.com/abdullah.sheikh.26" target="_blank" rel="noopener noreferrer"><span><FiInstagram /></span></a>
              <a href="https://github.com/AbdullahSheikh7" target="_blank" rel="noopener noreferrer"><span><FiGithub /></span></a>
              <a href="https://linkedin.com/in/abdullahsalahuddin" target="_blank" rel="noopener noreferrer"><span><FiLinkedin /></span></a>
            </div>
          </div>
          <div className="profile-photo">
            <Image src="/img/abdullah.png" className="me" alt="Abdullah Salahuddin" width={300} height={300} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero