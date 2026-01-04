import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            {/* Animated gradient blob */}
            <div className="hero__blob" />

            <div className="hero__container container">
                <motion.div
                    className="hero__content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Two-line title */}
                    <h1 className="hero__title">
                        <motion.span
                            className="hero__title-line"
                            initial={{ opacity: 0, y: 80, rotateX: -90 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            Hi, I'm Qawiyy
                        </motion.span>
                        <motion.span
                            className="hero__title-line hero__title-line--gradient"
                            initial={{ opacity: 0, y: 80, rotateX: -90 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.35,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            Backend Developer & Motion Artist
                        </motion.span>
                    </h1>

                    <motion.p
                        className="hero__subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        I craft digital experiences that blend
                        <span className="hero__highlight"> exceptional design </span>
                        with
                        <span className="hero__highlight"> robust engineering</span>.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <a href="#projects" className="hero__btn hero__btn--primary">
                            View Work
                            <span className="hero__btn-arrow">→</span>
                        </a>
                        <a href="#contact" className="hero__btn hero__btn--secondary">
                            Get in Touch
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.a
                    href="#services"
                    className="hero__scroll"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    aria-label="Scroll to services"
                >
                    <span className="hero__scroll-text">Scroll</span>
                    <motion.span
                        className="hero__scroll-line"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                    />
                </motion.a>
            </div>

            {/* Floating elements */}
            <motion.div
                className="hero__float hero__float--1"
                animate={{
                    y: [-20, 20, -20],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="hero__float hero__float--2"
                animate={{
                    y: [20, -20, 20],
                    rotate: [0, -5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
        </section>
    )
}

export default Hero
