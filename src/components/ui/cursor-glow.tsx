'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const hideCursor = () => setIsVisible(false)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseleave', hideCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseleave', hideCursor)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="absolute rounded-full"
          style={{
            left: cursorXSpring,
            top: cursorYSpring,
            x: '-50%',
            y: '-50%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(168,85,247,0.1) 35%, rgba(59,130,246,0.08) 55%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </motion.div>

      {/* Secondary smaller glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="absolute rounded-full mix-blend-screen"
          style={{
            left: cursorXSpring,
            top: cursorYSpring,
            x: '-50%',
            y: '-50%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, rgba(168,85,247,0.15) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      {/* Animated background particles */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-500"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="absolute rounded-full"
          style={{
            left: cursorXSpring,
            top: cursorYSpring,
            x: '-50%',
            y: '-50%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(6,182,212,0.03) 0%, rgba(168,85,247,0.02) 35%, transparent 60%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Custom cursor dot */}
      <motion.div
        className="pointer-events-none fixed z-[100] transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          left: cursorXSpring,
          top: cursorYSpring,
          x: '-50%',
          y: '-50%',
        }}
      >
        <div className="relative">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-400/50"
            style={{
              width: '32px',
              height: '32px',
              marginLeft: '-16px',
              marginTop: '-16px',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Inner dot */}
          <motion.div
            className="absolute rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400"
            style={{
              width: '8px',
              height: '8px',
              marginLeft: '-4px',
              marginTop: '-4px',
              boxShadow: '0 0 20px rgba(6,182,212,0.6), 0 0 40px rgba(168,85,247,0.4)',
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>

      {/* Global cursor style */}
      <style>{`
        * {
          cursor: none !important;
        }
        a, button, [role="button"] {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
