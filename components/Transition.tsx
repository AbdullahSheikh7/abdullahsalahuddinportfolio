"use client"

import { PropsWithChildren, useEffect, useRef, useState } from "react"
import Navbar from "@/components/Navbar";
import TransitionContext from "@/contexts/TransitionContext"
import ContextValue from "@/types/ContextValue"
import { SnackbarProvider } from "notistack";

const TransitionSVG = ({ setContextValue }: { setContextValue: React.Dispatch<React.SetStateAction<ContextValue>> }) => {
  const [open, setOpen] = useState<boolean>(false);
  const transitionContainer = useRef<HTMLDivElement>(null)
  const change = 160

  const width = useRef<number>(0)
  const height = useRef<number>(0)

  const play = () => {
    const path = transitionContainer.current?.querySelector("path")
    if (path) {
      path.setAttribute("d", `M 0 0 L 0 ${height.current} Q ${width.current/2} ${height.current+change} ${width.current} ${height.current} L ${width.current} 0 Q ${width.current/2} ${-change} 0 0 Z`)
      setOpen(true)
    }
  }

  const exit = () => {
    const path = transitionContainer.current?.querySelector("path")
    if (path) {
      path.setAttribute("d", `M 0 0 L 0 0 Q ${width.current/2} 0 ${width.current} 0 L ${width.current} 0 Q ${width.current/2} 0 0 0 Z`)
      setOpen(false)
      setTimeout(() => {
        path.setAttribute("d", `M 0 ${height.current} L 0 ${height.current} Q ${width.current/2} ${height.current} ${width.current} ${height.current} L ${width.current} ${height.current} Q ${width.current/2} ${height.current} 0 ${height.current} Z`)
      }, 500);
    }
  }

  useEffect(() => {
    if (transitionContainer.current) width.current = transitionContainer.current?.clientWidth
    if (transitionContainer.current) height.current = transitionContainer.current?.clientHeight
    return () => {
      setContextValue({ play, exit })
    }
  }, [])

  return (
    <>
      <div className={`transition-container ${open ? "open" : ""}`} ref={transitionContainer}>
        <svg className="transition-background" viewBox={`0 0 ${width.current} ${height.current}`}>
          <defs>
            <clipPath id="myPathClip">
              <path d={`M 0 ${height.current} L 0 ${height.current} Q ${width.current/2} ${height.current} ${width.current} ${height.current} L ${width.current} ${height.current} Q ${width.current/2} ${height.current} 0 ${height.current} Z`} />
            </clipPath>
          </defs>
        </svg>
        <div className="transition-content">
          <h1>Loading...</h1>
        </div>
      </div>
    </>
  )
}

const TransitionDiv = ({
  children,
}: PropsWithChildren) => {
  const [contextValue, setContextValue] = useState<ContextValue>({ play: () => {}, exit: () => {} })

  return (
    <>
    <SnackbarProvider>
      <TransitionContext.Provider value={contextValue}>
        <header>
          <Navbar />
        </header>
        <TransitionSVG setContextValue={setContextValue} />
        {children}
      </TransitionContext.Provider>
</SnackbarProvider>
    </>
  )
}

export default TransitionDiv