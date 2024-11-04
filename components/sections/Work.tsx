import "@/scss/work.scss"
import Image from 'next/image'
import { FaExternalLinkAlt } from "react-icons/fa";

const Work = () => {
  return (
    <section id="work" className="bg">
      <div className="container">
        <p className="section-title">Work</p>
        <div className="content">
          <p className="section-description">Some of the noteworthy project I have built:</p>
          <div className="projects">
            <div className="project-container">
              <div className="project-thumbnail">
                <Image src={"/img/work/digitalwork.png"} alt='Digitalwork' style={{ objectFit: "cover" }} fill={true} sizes="100%" />
              </div>
              <div className="project-description">
                <h2 className="title">Digitalwork</h2>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus dolore unde amet reprehenderit eligendi distinctio? Velit tempore inventore totam tempora officiis atque eligendi illum fuga ipsa laborum. A, rem.</p>
                <div className="techs-used">
                  <span className="tech-name">HTML</span>
                  <span className="tech-name">SASS</span>
                  <span className="tech-name">JS</span>
                  <span className="tech-name">GSAP</span>
                  <span className="tech-name">CSS Animations</span>
                  <span className="tech-name">Git</span>
                </div>
                <FaExternalLinkAlt />
              </div>
            </div>

            <div className="project-container">
              <div className="project-thumbnail">
                <Image src={"/img/work/passman.png"} alt='Digitalwork' style={{ objectFit: "cover" }} fill={true} sizes="100%" />
              </div>
              <div className="project-description">
                <h2 className="title">Passman (Password Manager)</h2>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus dolore unde amet reprehenderit eligendi distinctio? Velit tempore inventore totam tempora officiis atque eligendi illum fuga ipsa laborum. A, rem.</p>
                <div className="techs-used">
                  <span className="tech-name">React</span>
                  <span className="tech-name">Express</span>
                  <span className="tech-name">MongoDB</span>
                  <span className="tech-name">Lottie Animation</span>
                  <span className="tech-name">Tailwind CSS</span>
                  <span className="tech-name">Git</span>
                </div>
                <a href="http://passman-frontend.vercel.app" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
              </div>
            </div>

            <div className="project-container">
              <div className="project-thumbnail">
                <Image src={"/img/work/book-store.png"} alt='Digitalwork' style={{ objectFit: "cover" }} fill={true} sizes="100%" />
              </div>
              <div className="project-description">
                <h2 className="title">Book store</h2>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus dolore unde amet reprehenderit eligendi distinctio? Velit tempore inventore totam tempora officiis atque eligendi illum fuga ipsa laborum. A, rem.</p>
                <div className="techs-used">
                  <span className="tech-name">HTML</span>
                  <span className="tech-name">SASS</span>
                  <span className="tech-name">JS</span>
                  <span className="tech-name">GSAP</span>
                  <span className="tech-name">CSS Animations</span>
                </div>
                <a href="http://mern-book-store-frontend-abdullah.vercel.app" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work