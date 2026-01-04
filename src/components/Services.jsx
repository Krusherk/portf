import { motion } from 'framer-motion'
import { Code2, Server, Lightbulb, ArrowRight } from 'lucide-react'
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation'
import './Services.css'

const services = [
    {
        icon: Code2,
        title: 'Frontend Development',
        description: 'Building responsive, performant interfaces with React, Next.js, and modern CSS. Focused on accessibility and user experience.',
        features: ['React & Next.js', 'TypeScript', 'Performance Optimization', 'Responsive Design']
    },
    {
        icon: Server,
        title: 'Backend Development',
        description: 'Designing robust APIs and server architectures. Node.js, Python, databases, and cloud infrastructure.',
        features: ['REST & GraphQL APIs', 'Database Design', 'Cloud Architecture', 'Security']
    },
    {
        icon: Lightbulb,
        title: 'Technical Strategy',
        description: 'Helping teams make better technical decisions. Architecture reviews, code quality, and developer experience.',
        features: ['System Design', 'Code Reviews', 'Team Mentoring', 'Best Practices']
    }
]

function Services() {
    const { ref, controls } = useScrollAnimation()

    return (
        <section id="services" className="section services">
            <div className="container">
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.div className="section__header" variants={fadeInUp}>
                        <span className="section__label">What I Do</span>
                        <h2 className="section__title">
                            Services designed for
                            <br />
                            <span className="section__title-gradient">modern products</span>
                        </h2>
                    </motion.div>

                    <motion.div className="services__grid" variants={staggerContainer}>
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card"
                                variants={fadeInUp}
                                whileHover={{ y: -4 }}
                            >
                                <div className="service-card__icon">
                                    <service.icon size={28} strokeWidth={1.5} />
                                </div>

                                <h3 className="service-card__title">{service.title}</h3>
                                <p className="service-card__description">{service.description}</p>

                                <ul className="service-card__features">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="service-card__feature">
                                            <span className="service-card__feature-dot" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#contact" className="service-card__link">
                                    Discuss project
                                    <ArrowRight size={16} />
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Services
