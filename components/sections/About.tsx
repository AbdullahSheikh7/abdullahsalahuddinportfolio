import "@/scss/about.scss"
import Image from "next/image"

const About = () => {
  return (
    <>
      <section id="about" className="bg">
        <div className="container">
          <p className="section-title">About me</p>
          <div className="content">
            <div className="photo">
              <Image src="/img/abdullah.png" width={300} height={300} className="me" alt="" />
            </div>

            <div className="about-me">
              <h2>Curious about me? Here you have it</h2>
              <p>I&apos;m a passionate, self-proclaimed designer who specializes in full stack development &#2204;React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
              <p>I began my journey as a web developer in 2023, and since then, I&apos;ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, after one year of starting my web development journey, I&apos;m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, React.js, Tailwindcss, Supabase and much more.</p>
              <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
              <p>You can follow me on Facebook and Instagram where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
              <p>Finally, some quick bits about me.</p>
              <span className="quick-abouts">
                <p>&#x2022;Full stack developer</p>
                <p>&#x2022;Full time freelancer</p>
                <p>&#x2022;Avid learner</p>
                <p>&#x2022;Aspiring indie hacker</p>
              </span>
              <p>One last thing, I&apos;m available for freelance work, so feel free to reach out and say hello! I promise I don&apos;t bite</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About