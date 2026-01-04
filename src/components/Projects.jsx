import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation'
import './Projects.css'

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'Full-stack marketplace with real-time inventory, payment processing, and admin dashboard.',
        role: 'Lead Developer',
        outcome: '50% faster checkout, 3x conversion improvement',
        tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        links: {
            live: '#',
            github: '#'
        }
    },
    {
        title: 'Developer Tools CLI',
        description: 'Command-line toolkit for automating development workflows and deployment pipelines.',
        role: 'Creator & Maintainer',
        outcome: '2k+ downloads, used by 15+ teams',
        tech: ['Node.js', 'TypeScript', 'Docker'],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        links: {
            github: '#'
        }
    },
    {
        title: 'Real-time Dashboard',
        description: 'Analytics platform with live data visualization and customizable widgets.',
        role: 'Frontend Architect',
        outcome: 'Sub-100ms render times, 99.9% uptime',
        tech: ['React', 'WebSockets', 'D3.js', 'Redis'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        links: {
            live: '#'
        }
    }
]

function Projects() {
    const { ref, controls } = useScrollAnimation()

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.div className="section__header" variants={fadeInUp}>
                        <span className="section__label">Selected Work</span>
                        <h2 className="section__title">
                            Projects that
                            <br />
                            <span className="section__title-gradient">speak for themselves</span>
                        </h2>
                    </motion.div>

                    <motion.div className="projects__grid" variants={staggerContainer}>
                        {projects.map((project, index) => (
                            <motion.article
                                key={index}
                                className="project-card"
                                variants={fadeInUp}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="project-card__image">
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                    <div className="project-card__overlay">
                                        <div className="project-card__links">
                                            {project.links.github && (
                                                <a href={project.links.github} className="project-card__link" aria-label="View source">
                                                    <Github size={20} />
                                                </a>
                                            )}
                                            {project.links.live && (
                                                <a href={project.links.live} className="project-card__link" aria-label="View live">
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="project-card__content">
                                    <div className="project-card__header">
                                        <h3 className="project-card__title">{project.title}</h3>
                                        <ArrowUpRight size={20} className="project-card__arrow" />
                                    </div>

                                    <p className="project-card__description">{project.description}</p>

                                    <div className="project-card__meta">
                                        <div className="project-card__stat">
                                            <span className="project-card__stat-label">Role</span>
                                            <span className="project-card__stat-value">{project.role}</span>
                                        </div>
                                        <div className="project-card__stat">
                                            <span className="project-card__stat-label">Impact</span>
                                            <span className="project-card__stat-value">{project.outcome}</span>
                                        </div>
                                    </div>

                                    <div className="project-card__tech">
                                        {project.tech.map((item, i) => (
                                            <span key={i} className="project-card__tag">{item}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
