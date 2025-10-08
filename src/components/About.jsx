import profile from '../assets/profile.jpg';


export default function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-inner">
        <img src={profile} alt="Profile" className="about-avatar" />
        <div className="about-text">
          <p>
            I'm a UI/UX designer who loves crafting modern, user-friendly websites. 
            I use Figma for design and I'm learning to bring my ideas to life with React.
          </p>
        </div>
      </div>
    </section>
  );
}
