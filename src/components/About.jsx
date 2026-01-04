import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation'
import './About.css'

function About() {
    const { ref, controls } = useScrollAnimation()

    return (
        <section id="about" className="section about">
            <div className="container">
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={controls}
                    className="about__content"
                >
                    <motion.span className="section__label" variants={fadeInUp}>
                        Background
                    </motion.span>
                    <motion.h2 className="section__title" variants={fadeInUp}>
                        About
                    </motion.h2>

                    <motion.div className="about__text" variants={fadeInUp}>
                        <p>
                            I'm a software engineer who believes that great software is built with intention.
                            Every line of code should serve a purpose. Every interface should respect the user's time.
                        </p>
                        <p>
                            My approach combines technical depth with design thinking. I don't just build features—I
                            solve problems. Whether it's architecting a system for scale or crafting a pixel-perfect
                            interface, I focus on what matters: clarity, performance, and craft.
                        </p>
                        <p>
                            I enjoy working on products that make a real impact. Complex challenges excite me.
                            I thrive in environments where I can learn, contribute, and push the boundaries of
                            what's possible.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
