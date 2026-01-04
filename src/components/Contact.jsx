import { motion } from 'framer-motion'
import { Mail, Github, Twitter, FileText, ArrowUpRight, Copy } from 'lucide-react'
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation'
import { useState } from 'react'
import './Contact.css'

const contactLinks = [
    {
        label: 'Email',
        value: 'hello@example.com',
        href: 'mailto:hello@example.com',
        icon: Mail,
        copyable: true
    },
    {
        label: 'GitHub',
        value: 'github.com/username',
        href: 'https://github.com',
        icon: Github
    },
    {
        label: 'X (Twitter)',
        value: '@username',
        href: 'https://x.com',
        icon: Twitter
    },
    {
        label: 'Blog',
        value: 'Read my writing',
        href: '#',
        icon: FileText
    }
]

function Contact() {
    const { ref, controls } = useScrollAnimation()
    const [copied, setCopied] = useState(false)

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={controls}
                    className="contact__content"
                >
                    <motion.div className="contact__header" variants={fadeInUp}>
                        <span className="section__label">Get in Touch</span>
                        <h2 className="contact__title">
                            Let's build something
                            <br />
                            <span className="contact__title-gradient">extraordinary together</span>
                        </h2>
                        <p className="contact__intro">
                            Have a project in mind? I'd love to hear about it.
                            Let's discuss how we can work together.
                        </p>
                    </motion.div>

                    <motion.div className="contact__grid" variants={staggerContainer}>
                        {/* Main CTA */}
                        <motion.a
                            href="mailto:hello@example.com"
                            className="contact__cta"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="contact__cta-content">
                                <span className="contact__cta-label">Start a project</span>
                                <span className="contact__cta-email">hello@example.com</span>
                            </div>
                            <ArrowUpRight size={24} className="contact__cta-arrow" />
                        </motion.a>

                        {/* Social links */}
                        <motion.div className="contact__links" variants={staggerContainer}>
                            {contactLinks.slice(1).map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    className="contact__link"
                                    variants={fadeInUp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 4 }}
                                >
                                    <div className="contact__link-icon">
                                        <link.icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <div className="contact__link-text">
                                        <span className="contact__link-label">{link.label}</span>
                                        <span className="contact__link-value">{link.value}</span>
                                    </div>
                                    <ArrowUpRight size={16} className="contact__link-arrow" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <footer className="footer">
                <div className="container">
                    <div className="footer__content">
                        <p className="footer__text">
                            © {new Date().getFullYear()} — Crafted with precision
                        </p>
                        <p className="footer__text">
                            Built with React + Framer Motion
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Contact
