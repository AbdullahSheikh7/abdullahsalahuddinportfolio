"use client"

import { PropsWithChildren, useEffect, useRef, useState } from "react"
import Navbar from "@/components/Navbar";
import { SnackbarProvider } from "notistack";
import TransitionContext from "@/contexts/TransitionContext";

const TransitionSVG = ({ d, height, width }: { d: string, height: number, width: number }) => {
  return (
    <svg className="transition-background" viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <clipPath id="myPathClip">
          <path d={d} />
        </clipPath>
      </defs>
    </svg>
  )
}

const TransitionContent = () => {
  return (
    <div className="transition-content">
      <h1>Loading...</h1>
    </div>
  )
}

const Transition = ({
  children,
}: PropsWithChildren) => {
  const [open, setOpen] = useState<boolean>(false);
  const transitionContainer = useRef<HTMLDivElement>(null)
  const change = 160

  const width = useRef<number>(0)
  const height = useRef<number>(0)

  const [d, setD] = useState<string>(`M 0 ${height.current} L 0 ${height.current} Q ${width.current/2} ${height.current} ${width.current} ${height.current} L ${width.current} ${height.current} Q ${width.current/2} ${height.current} 0 ${height.current} Z`)

  const play = () => {
    setD(`M 0 0 L 0 ${height.current} Q ${width.current/2} ${height.current+change} ${width.current} ${height.current} L ${width.current} 0 Q ${width.current/2} ${-change} 0 0 Z`)
    setOpen(true)
  }

  const exit = () => {
    setD(`M 0 0 L 0 0 Q ${width.current/2} 0 ${width.current} 0 L ${width.current} 0 Q ${width.current/2} 0 0 0 Z`)
    setOpen(false)
    setTimeout(() => {
      setD(`M 0 ${height.current} L 0 ${height.current} Q ${width.current/2} ${height.current} ${width.current} ${height.current} L ${width.current} ${height.current} Q ${width.current/2} ${height.current} 0 ${height.current} Z`)
    }, 500);
  }

  const changeWidthHeight = () => {
    if (transitionContainer.current) width.current = transitionContainer.current?.clientWidth
    if (transitionContainer.current) height.current = transitionContainer.current?.clientHeight
  }

  useEffect(() => {
    changeWidthHeight()
    setD(`M 0 ${height.current} L 0 ${height.current} Q ${width.current/2} ${height.current} ${width.current} ${height.current} L ${width.current} ${height.current} Q ${width.current/2} ${height.current} 0 ${height.current} Z`)
  }, [])

  return (
    <>
      <SnackbarProvider>
        <TransitionContext.Provider value={{ play, exit }}>
          <header>
            <Navbar />
          </header>
          <div onResize={changeWidthHeight} className={`transition-container ${open ? "open" : ""}`} ref={transitionContainer}>
            <TransitionSVG d={d} width={width.current} height={height.current} />
            <TransitionContent />
          </div>
          {children}
        </TransitionContext.Provider>
      </SnackbarProvider>
    </>
  )
}

export default Transition