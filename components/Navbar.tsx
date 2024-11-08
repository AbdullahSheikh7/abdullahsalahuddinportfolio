"use client"

import "@/scss/navbar.scss"
import { IoMdMenu } from "react-icons/io";
import Link from "@/components/Link"
import { MouseEventHandler, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  useEffect(() => {
    const noMenu = (e: MouseEvent) => {
      if (!(e.target as HTMLElement)?.closest("#show-menu")) setMenu(false)
    }
    document.addEventListener("click", noMenu);
    return () => {
      document.removeEventListener("click", noMenu);
    }
  }, []);

  const [menu, setMenu] = useState<boolean>(false)

  const menuHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    setMenu(!menu)
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to={"/"}><div className="logo">Abdullah.</div></Link>
          <div className={`right ${menu ? "open" : "close"}`}>
            <ul>
              <li><Link to={"/#about"}>About</Link></li>
              <li><Link to={"/#skills"}>Skills</Link></li>
              <li><Link to={"/#work"}>Work</Link></li>
              <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
            <button className="btn btn-filled" id="download-cv">
              Download CV
            </button>
          </div>
          <button className="btn btn-transparent" id="show-menu" onClick={menuHandler}>
            {menu ? <RxCross2 style={{ pointerEvents: "none" }} /> : <IoMdMenu style={{ pointerEvents: "none" }} />}
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar