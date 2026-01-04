import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation'
import './Skills.css'

const skillCategories = [
    {
        title: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'CSS/Sass', 'Framer Motion', 'Responsive Design']
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
    },
    {
        title: 'Tools & DevOps',
        skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Vercel', 'Linux']
    },
    {
        title: 'Concepts',
        skills: ['System Design', 'Testing', 'Performance', 'Accessibility', 'Agile', 'Code Review']
    }
]

function Skills() {
    const { ref, controls } = useScrollAnimation()

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.span className="section__label" variants={fadeInUp}>
                        Technical Stack
                    </motion.span>
                    <motion.h2 className="section__title" variants={fadeInUp}>
                        Skills
                    </motion.h2>

                    <motion.div className="skills__grid" variants={staggerContainer}>
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                className="skill-category"
                                variants={fadeInUp}
                            >
                                <h3 className="skill-category__title">{category.title}</h3>
                                <ul className="skill-category__list">
                                    {category.skills.map((skill, i) => (
                                        <li key={i} className="skill-category__item">{skill}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
