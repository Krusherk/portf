import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import MotionBackground from './components/MotionBackground'

function App() {
    return (
        <>
            <MotionBackground />
            <Navigation />
            <main>
                <Hero />
                <Services />
                <Projects />
                <Skills />
                <About />
                <Contact />
            </main>
        </>
    )
}

export default App

