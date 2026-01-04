import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navigation.css'

const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            // Detect active section
            const sections = navLinks.map(link => link.href.slice(1))
            for (const section of sections.reverse()) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 150) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div className="nav__container container">
                <a href="#" className="nav__logo">
                    Portfolio
                </a>

                <ul className="nav__links">
                    {navLinks.map(({ label, href }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className={`nav__link ${activeSection === href.slice(1) ? 'nav__link--active' : ''}`}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    )
}

export default Navigation
