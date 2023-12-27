import Typewriter from "typewriter-effect";
import socials from "../content/socials";
import "./Hero.css";
function Hero() {
    return ( 
    <div className="container">
      <div className="pfp">
        <img src={require('../assets/women2.jpeg')} />
      </div>
      <div className="hero-typewriter">
      <h2> Who Am I?</h2>
        
        <Typewriter
          options={{
            strings: [
              "An Aspiring Developer",
              "An Enthusiastic Frontend Developer",
              "A full stack",
            ],
            autoStart: true,
            loop: true,
          }}
          className="typewriter"
        />
      </div>
      {/* <HeroHeading /> */}
      <div className="button-effect">
        {/* <button className="glowing-btn">
          <span className="glowing-txt">
            <span className="faulty-letter">IAM</span>
          </span>
        </button>
        <br />
        <button className="glowing-btn">
          <span className="glowing-txt">
            <span className="faulty-letter">R</span>ANDIL
            <span className="faulty-letter">T</span>HARUSHA
          </span>
        </button> */}
        {/* <div className="hero-text">
          <p className="hero-desc">
          Hey there! 👋 I'm Jana, a passionate Software Developer. 💻 By day, I'm a tech enthusiast exploring the wonders of coding, and by night, I transform into an aspiring full-stack developer. 🌌 My journey spans from crafting code to delving into the realms of IoT, cybersecurity, AI, and ML. When not in the digital world, you'll find me navigating the strategic landscape of League of Legends for some competitive fun. Let's connect and embark on an exciting adventure through the vast universe of technology! 🚀 
          </p>
        </div> */}
        <br />
        <br />
        Find me on:
        <div className="hero-socials">
          {socials.map((social, index) => (
            <a key={index} href={social.url}>
              <img src={`/socials/${social.icon}`} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
     );
}

export default Hero;