import profile from '../assets/profile.jpg';
import './Header.css';

export default function Header() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Kavindya_Amarasinghe_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header" id="home">
      <div className="intro">
        <h3>Hello, I'm</h3>
        <h1>Kavindya Amarasinghe</h1>
        <p>UI/UX Designer | Frontend Learner</p>
        <div className="header-buttons">
          <button onClick={downloadResume} className="download-btn">
            Download CV
          </button>
        </div>
      </div>

      <div className="header-img">
        <img 
          src={profile} 
          alt="Kavindya" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain' /* This prevents compression */
          }} 
        />
      </div>
    </header>
  );
}