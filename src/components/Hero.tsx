import profilePhoto from '../assets/profile_ovisiomario.webp'
import './Hero.css'

// Scroll function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

interface HeroProps {
  isProductManagerView: boolean;
  toggleView: () => void;
}

const Hero: React.FC<HeroProps> = ({ isProductManagerView, toggleView }) => {
  return (
    <>

    
    <section id="hero" className="hero section">

      
      <div className="hero-container">
        <div className="hero-content">
                                <div className="hero-image-container">
                        <div className="hero-image">
                          <img
                            src={profilePhoto}
                            alt="Mario - Professional Services"
                            className="profile-photo"
                          />
                          {/* Jira Ticket - Only in PM Mode */}
                          <div className="jira-ticket">
                          <div className="ticket-header">
                            <span className="ticket-id">MVP-001</span>
                            <span className="ticket-status">Done</span>
                          </div>
                          <div className="ticket-content">
                            <h4 className="ticket-title">Build MVP Landing Page with React</h4>
                            <div className="ticket-meta">
                              <div className="assignee">Assigned to: Mario</div>
                              <div className="priority">Priority: High</div>
                            </div>
                            <div className="ticket-description">
                              Create a portfolio landing page showcasing PM methodology and wireframe thinking. Include toggle functionality to demonstrate product logic.
                            </div>
                          </div>
                        </div>
                        </div>
                        <div className="psychology-tag" data-number="3">
                          <span className="psychology-label">Visual</span>
                        </div>
                      </div>
                            <div className="hero-text">
            <div className="title-container">
              <h1 className="hero-title">
                Too many ideas, <span className="highlight">no clear direction?</span>
              </h1>
              <div className="psychology-tag" data-number="1">
                <span className="psychology-label">Hook</span>
              </div>
            </div>
            <div className="subtitle-container">
              <p className="hero-subtitle">
                I turn messy ideas into clear roadmaps and guide teams to ship high-quality products.
              </p>
              <div className="psychology-tag" data-number="2">
                <span className="psychology-label">Service</span>
              </div>
            </div>
            
            
            {/* Social Proof - Most Recent Work */}
            <div className="social-proof-container">
              <div className="social-proof">
                <div className="proof-header">
                  <div className="proof-label">MOST RECENT WORK</div>
                </div>
              <div className="companies-grid">
                <div className="company-box" onClick={() => scrollToSection('portfolio')} data-project="comudel">
                  <div className="company-placeholder">COMUDEL</div>
                  <span className="project-note">Product Manager</span>
                  <div className="click-hint">Click to view case study</div>
                </div>
                <div className="company-box" onClick={() => scrollToSection('portfolio')} data-project="angels-way">
                  <div className="company-placeholder">ANGELS WAY</div>
                  <span className="project-note">Co-Founder & PM</span>
                  <div className="click-hint">Click to view case study</div>
                </div>
                <div className="company-box" onClick={() => scrollToSection('portfolio')} data-project="carta-empresario">
                  <div className="company-placeholder">CARTA DE EMPRESÁRIO</div>
                  <span className="project-note">Side Project</span>
                  <div className="click-hint">Click to view case study</div>
                </div>
              </div>
              <div className="proof-annotation">
                // TODO: Replace with actual company logos
              </div>
              </div>
              <div className="psychology-tag" data-number="4">
                <span className="psychology-label">Social Proof</span>
              </div>
            </div>

            {/* WhatsApp CTA Button - Separate Section */}
            <div className="cta-section">
              <div className="cta-container">
                <a 
                  href="https://wa.me/351960012111" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-cta"
                >
                  💬 Let's Chat
                </a>
                <div className="psychology-tag" data-number="5">
                  <span className="psychology-label">CTA</span>
                </div>
              </div>
            </div>
            

            
                                    {/* Simple dev comment */}
                        <div className="dev-comment-simple">
                          // TODO: Add detailed case studies below
                        </div>
                      </div>
                    </div>

                    {/* Above the Fold Line - Only in PM Mode */}
                    <div className="above-fold-line">
                      <div className="fold-annotation fold-annotation-above">
                        <span className="fold-label">ABOVE THE FOLD</span>
                        <span className="fold-description">Critical content visible without scrolling - Hook, Service, Visual & Social Proof all captured</span>
                      </div>
                      <div className="fold-line"></div>
                      <div className="fold-annotation fold-annotation-below">
                        <span className="fold-label">BELOW THE FOLD</span>
                        <span className="fold-description">Secondary content requiring scroll - Methodology, Responsibilities & Portfolio details</span>
                      </div>
                    </div>

                  </div>
                </section>
    

    

    </>
  )
}

export default Hero
