import "@/scss/skills.scss"
import Image from "next/image"

const Skills = () => {

  return (
    <>
      <section id="skills" className="bg">
        <div className="container">
          <p className="section-title">Skills</p>
          <div className="content">
            <p className="section-description">The skills, tools and technologies I&apos;m really good at:</p>
            <div className="technologies">
                <div>
                  <Image height={100} width={100} quality={80} src="/img/skills/js.png" alt="Javascript" title="Javascript" />
                  <p>Javascript</p>
                </div>
                <div>
                  <Image height={100} width={100} quality={80} src="/img/skills/ts.png" alt="Typescript" title="Typescript" />
                  <p>Typescript</p>
                </div>
                <div>
                  <Image height={100} width={100} quality={80} src="/img/skills/react.webp" alt="React.js" title="React.js" />
                  <p>React.js</p>
                </div>
                <div>
                  <Image height={100} width={100} quality={80} src="/img/skills/next.jpg" alt="Next.js" title="Next.js" />
                  <p>Next.js</p>
                </div>
                <div>
                  <Image height={100} width={100} quality={80} src="/img/skills/docker.png" alt="Docker" title="Docker" />
                  <p>Docker</p>
                </div>
              <div>
                <Image height={100} width={100} quality={80} src="/img/skills/sass.png" alt="Scss/Sass" title="Scss/Sass" />
                <p>Scss/Sass</p>
              </div>
              <div>
                <Image height={100} width={100} quality={80} src="/img/skills/mongo.jpg" alt="MongoDB" title="MongoDB" />
                <p>MongoDB</p>
              </div>
              <div>
                <Image height={100} width={100} quality={80} src="/img/skills/postgre.png" alt="PostgreSQL" title="PostgreSQL" />
                <p>PostgreSQL</p>
              </div>
              <div>
                <Image height={100} width={100} quality={80} src="/img/skills/express.png" alt="Express.js" title="Express.js" />
                <p>Express.js</p>
              </div>
              <div>
                <Image height={100} width={100} quality={80} src="/img/skills/socketio.png" alt="Socket.io" title="Socket.io" />
                <p>Socket.io</p>
              </div>
              <div>
                <Image height={100} width={100} quality={80} src="/img/skills/tailwind.svg" alt="Tailwind CSS" title="Tailwind CSS" />
                <p>Tailwind CSS</p>
              </div>
              <div>
                <Image height={100} width={100} quality={80} src="/img/skills/git.png" alt="Git" title="Git" />
                <p>Git</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills