import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Kavindya Amarasinghe</h3>
          <p>UI/UX Designer & Frontend Developer</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="footer-section">
          <h4>Connect With Me</h4>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="GitHub">GitHub</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            {/* Twitter removed */}
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Kavindya Amarasinghe. All rights reserved.</p>
      </div>
    </footer>
  );
}