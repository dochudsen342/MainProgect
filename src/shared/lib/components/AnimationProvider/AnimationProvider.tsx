import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { deflate } from 'zlib'

interface AnimationContextProps {
  Gesture?: GestureType
  Spring?: SpringType
  isLoaded?: boolean
}

type SpringType = typeof import('@react-spring/web')
type GestureType = typeof import('@use-gesture/react')

const AnimationContext = createContext<AnimationContextProps>({})
const getAnimationModule = async () => {
  return Promise.all([import('@react-spring/web'), import('@use-gesture/react')])
}

export const useAnimationLibs = () => {
  return useContext(AnimationContext) as Required<AnimationContextProps>
}

const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const SpringRef = useRef<SpringType>(undefined)
  const GestureRef = useRef<GestureType>(undefined)
  const [isLoaded, setIsLoaded] = useState(false)

  const defaulfProps = useMemo(
    () => ({ Gesture: GestureRef.current, Spring: SpringRef.current, isLoaded }),
    [isLoaded]
  )

  useEffect(() => {
    getAnimationModule().then(([Spring, Gesture]) => {
      SpringRef.current = Spring
      GestureRef.current = Gesture
      setIsLoaded(true)
    })
  }, [])
  return <AnimationContext.Provider value={defaulfProps}>{children}</AnimationContext.Provider>
}

export default AnimationProvider
