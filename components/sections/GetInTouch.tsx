import "@/scss/getInTouch.scss"
import { BiCopy, BiPhone } from "react-icons/bi"
import { MdOutlineEmail } from "react-icons/md"

const GetInTouch = () => {
  return (
    <>
      <section id="get-in-touch" className="bg">
        <div className="container">
          <p className="section-title">Get in Touch</p>
          <div className="content">
            <p className="section-description">What&apos;s next? Feel free to reach out to me if you&apos;re looking for a developer, have a query, or simply want to connect</p>
            <div><MdOutlineEmail /><h2>abdullahcoder26@gmail.com</h2><button className="btn btn-transparent" onClick={() => navigator.clipboard.writeText("abdullahcoder26@gmail.com")}><BiCopy /></button></div>
            <div><BiPhone /><h2>+92 321 3887757</h2><button className="btn btn-transparent" onClick={() => navigator.clipboard.writeText("+923213887757")}><BiCopy /></button></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GetInTouch