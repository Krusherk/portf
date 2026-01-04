import { motion } from 'framer-motion'
import './MotionBackground.css'

function MotionBackground() {
    return (
        <div className="motion-bg">
            {/* Large gradient orbs */}
            <motion.div
                className="motion-bg__orb motion-bg__orb--1"
                animate={{
                    x: [0, 150, -100, 0],
                    y: [0, -100, 80, 0],
                    scale: [1, 1.3, 0.9, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="motion-bg__orb motion-bg__orb--2"
                animate={{
                    x: [0, -180, 120, 0],
                    y: [0, 120, -80, 0],
                    scale: [1, 0.7, 1.2, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="motion-bg__orb motion-bg__orb--3"
                animate={{
                    x: [0, 80, -150, 0],
                    y: [0, -150, 60, 0],
                    scale: [1, 1.4, 0.8, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Animated gradient mesh */}
            <div className="motion-bg__mesh" />

            {/* Subtle grid */}
            <div className="motion-bg__grid" />

            {/* Floating particles */}
            <div className="motion-bg__particles">
                {[...Array(30)].map((_, i) => (
                    <motion.span
                        key={i}
                        className="motion-bg__particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${2 + Math.random() * 4}px`,
                            height: `${2 + Math.random() * 4}px`,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Noise overlay */}
            <div className="motion-bg__noise" />

            {/* Vignette */}
            <div className="motion-bg__vignette" />
        </div>
    )
}

export default MotionBackground
