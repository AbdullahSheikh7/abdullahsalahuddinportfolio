import ContextValue from "@/types/ContextValue";
import { createContext } from "react";

const TransitionContext = createContext<ContextValue | null>(null)

export default TransitionContext
