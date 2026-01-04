import { useEffect, useRef } from 'react'
import { useInView, useAnimation } from 'framer-motion'

export function useScrollAnimation(threshold = 0.2) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: threshold })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        }
    }, [isInView, controls])

    return { ref, controls, isInView }
}

export const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
}

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
}
