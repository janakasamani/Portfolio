import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import projects from "./content/projects";
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skill from "./components/Skill";
import skills from "./content/skills";
import './components/skills.css';
import './App.css';

function App() {
  const aboutMeControls = useAnimation();
  const skillsControls = useAnimation();
  const projectsControls = useAnimation();
  const starControls = useAnimation();

  const [aboutMeRef, aboutMeInView] = useInView({ triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true });
  const [starRef, starInVew] = useInView({triggerOnce: true});

  useEffect(() => {
    if (aboutMeInView) {
      aboutMeControls.start("visible");
    }
    if (skillsInView) {
      skillsControls.start("visible");
    }
    if (projectsInView) {
      projectsControls.start("visible");
    }
    if (starInVew){
      starControls.start("visible");
    }
  }, [aboutMeControls, aboutMeInView, skillsControls, skillsInView, projectsControls, projectsInView, starControls, starInVew]);

  const aboutMeVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" }
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const starVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1, 
      rotate: 10 
    },
    visible: {
      opacity: 1,
      scale: [1.25],
      translateX: ['0vw', '0vw', '0vw', '0vw', '0vw', '100vw'],
      translateY: ['0vh', '0vh', '0vh', '0vh', '0vh', '-100vh'],
      transition: {
        duration: 5,
        ease: 'linear',
        times: [0, 0.05, 0.1, 0.15, 0.2, 1]
      }
    }
  };
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <section id='about'>
      <div className="about-me">
        <motion.div
          initial="hidden"
          ref={aboutMeRef}
          animate={aboutMeControls}
          variants={aboutMeVariants}
        >
          <h1 className='about-text'>About me</h1>
          <div className="about-content">
          <div className="about-description">

            <motion.p className="hero-desc" variants={containerVariants}>
            Hey there! 👋 I'm Jana, a passionate Software Developer driven by a love for coding. 💻 Constantly immersed in the tech world, I'm dedicated to refining my skills. I'm on a journey to master full-stack development, seeking to create innovative, clean code every step of the way. 🌌  Beyond the tech sphere, I find joy in music, losing myself in melodies, and diving into captivating books. Let's connect and explore the fascinating universe of technology together! 🚀
            </motion.p>
          </div>
          <div className="woman-prog">
          <img src={require('./assets/aboutmepic2.png')} />
          </div>
          </div>
        </motion.div>
        </div>
      </section>
      <section id="skills">
      <div className="skills" >
      <h1 className='about-text'>My Skills</h1>
        <motion.div
          className="skill-map"
          initial="hidden"
          ref={skillsRef}  
          animate={skillsControls}
          variants={containerVariants}
        >
        
          {skills.map((skill, index) => (
            <motion.div key={index} variants={skillVariants}>
              <Skill skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      </section>
      <section id="projects">
      <div className="projects" ref={projectsRef}>
      <h1 className='about-text'>My Projects</h1>
        <motion.div
          className="project-map"
          initial="hidden"
          animate={projectsRef}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <div key={index}>    
              <ProjectCard
                name={project.name}
                img={project.img}
                description={project.description}
                source={project.sourceCode}
                preview={project.preview}
              />
            </div>
          ))}
        </motion.div>
        </div>
      </section>
      <section id="contact">
      
        <h1 className='about-text'>Contact Me</h1>
        <ContactForm />
      
      </section>
      {/* <div className="star-container">
      <motion.div
          initial="hidden"
          ref={starRef}
          animate={starControls}
          variants={starVariants}
        >
          <span >
          ✨
          </span> 
        </motion.div>
        </div> */}
    </div>
    
  );
}

export default App;
