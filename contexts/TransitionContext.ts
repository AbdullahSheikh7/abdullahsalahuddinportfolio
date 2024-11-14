"use client"

import ContextValue from "@/types/ContextValue";
import { createContext } from "react";

const play = () => {}
const exit = () => {}

const TransitionContext = createContext<ContextValue>({ play, exit })

export default TransitionContext
