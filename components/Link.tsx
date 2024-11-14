import TransitionContext from "@/contexts/TransitionContext"
import { usePathname, useRouter } from "next/navigation"
import { PropsWithChildren, useContext, useEffect } from "react"

const Link = ({ to, children }: { to:string } & PropsWithChildren) => {
  const transition = useContext(TransitionContext)

  const play = transition?.play
  const exit = transition?.exit
  const router = useRouter()

  const currentPath = usePathname();

  useEffect(() => {
    if (exit) exit()
  }, [currentPath]);

  const handleClick = () => {
    const url = to.match(/#.*$/);
    if (url && currentPath === to.replace(url[0], "")) {
      router.push(url[0])
    } else if (currentPath === to) {
      return
    } else {
      if (play) play()
      setTimeout(() => {
        router.push(to)
      }, 500);
    }
  }
  return (
    <>
      <a onClick={handleClick} style={{ cursor: "pointer" }}>{children}</a>
    </>
  )
}

export default Link