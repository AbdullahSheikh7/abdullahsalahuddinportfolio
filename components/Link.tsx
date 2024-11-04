import TransitionContext from "@/contexts/TransitionContext"
import { useRouter } from "next/navigation"
import { PropsWithChildren, useContext } from "react"

const Link = ({ to, children }: { to:string } & PropsWithChildren) => {
  const transition = useContext(TransitionContext)

  const play = transition?.play
  const exit = transition?.exit
  const router = useRouter()

  const handleClick = () => {
    if (play) play()
    setTimeout(() => {
      router.push(to)
    }, 500);
    setTimeout(() => {
      if (exit) exit()
    }, 1000);
  }
  return (
    <>
      <a onClick={handleClick} style={{ cursor: "pointer" }}>{children}</a>
    </>
  )
}

export default Link