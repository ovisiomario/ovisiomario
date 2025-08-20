import { useState } from 'react'
import './Portfolio.css'

interface PortfolioProps {
  isProductManagerView: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ isProductManagerView: _isProductManagerView }) => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }
  return (
    <section id="portfolio" className="portfolio section">

      
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">Case Studies</h2>
          <div className="wireframe-note">PORTFOLIO SECTION - v0.3</div>
        </div>
        
        <div className="case-studies-grid">
          <div className="case-study" data-project="comudel">
            <div className="case-study-header" onClick={() => toggleProject('comudel')}>
              <h3>COMUDEL - Product Manager</h3>
              <div className="header-right">
                <div className="status-badge">JAN 2023 - MAR 2025</div>
                <div className={`expand-icon ${expandedProject === 'comudel' ? 'expanded' : ''}`}>
                  {expandedProject === 'comudel' ? '−' : '+'}
                </div>
              </div>
            </div>
            <div className="case-study-content">
              <div className="wireframe-box">
                <p><strong>Context:</strong> Led product strategy for AI-powered business automation platform, managing cross-functional team and defining LLM features for Portuguese legal compliance</p>
                {expandedProject === 'comudel' && (
                  <div className="expanded-details">
                    <div className="detail-section">
                      <h4>Market Research & Strategy</h4>
                      <ul>
                        <li>Led market research to identify inefficiencies in small business operations and define product opportunity</li>
                        <li>Created product strategy for AI-powered business automation platform based on user and legal research</li>
                        <li>Defined and prioritized requirements in Jira, structured user stories, and mapped MVP scope to deadlines</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Team Leadership & Execution</h4>
                      <ul>
                        <li>Managed a cross-functional team of 10 engineers and 2 designers through agile sprints and product cycles</li>
                        <li>Collaborated with AI engineers to define LLM-powered features trained on Portuguese legal data</li>
                        <li>Conducted internal usability testing with prototypes to validate UX flows and improve user-agent interaction</li>
                        <li>Balanced scope and resources to deliver within timeline and budget while maintaining quality and compliance</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className="tech-stack">
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Notion</span>
                <span className="tech-tag">JIRA</span>
              </div>
              <div className="metrics-highlight">
                <span>📊 Managed 12 People | Built First Prototype | Full Product Lifecycle</span>
              </div>
              <div className="project-links">
                <a href="https://www.comudel.com/" target="_blank" rel="noopener noreferrer" className="project-link">
                  🌐 Visit Live Platform
                </a>
              </div>
            </div>
          </div>
          
          <div className="case-study" data-project="angels-way">
            <div className="case-study-header" onClick={() => toggleProject('angels-way')}>
              <h3>ANGELS WAY - Co-Founder & Product Manager</h3>
              <div className="header-right">
                <div className="status-badge">JAN 2023 - APR 2025</div>
                <div className={`expand-icon ${expandedProject === 'angels-way' ? 'expanded' : ''}`}>
                  {expandedProject === 'angels-way' ? '−' : '+'}
                </div>
              </div>
            </div>
            <div className="case-study-content">
              <div className="wireframe-box">
                <p><strong>Context:</strong> Co-founded and built decentralized investment platform, raising €1.2M and converting 450+ paying users with 800-subscriber newsletter</p>
                {expandedProject === 'angels-way' && (
                  <div className="expanded-details">
                    <div className="detail-section">
                      <h4>Product Discovery & Strategy</h4>
                      <ul>
                        <li>Conducted interviews and discovery with early-stage investors to uncover needs and pain points</li>
                        <li>Built product roadmap and defined full feature set for decentralized investment platform</li>
                        <li>Led product design sprint to ideate and scope core user onboarding and fund participation flow</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Execution & Growth Results</h4>
                      <ul>
                        <li>Managed 2 engineers from ideation to launch, adapting scope based on feedback and resource constraints</li>
                        <li>Created a public bug board and usability loop with live fixes, improving transparency and trust</li>
                        <li>Launched newsletter (800 subscribers, 67% open rate) to engage and grow a high-conversion community</li>
                        <li><strong>Raised €1.2M with a user-first product that converted 450+ paying users</strong></li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className="tech-stack">
                <span className="tech-tag">Notion</span>
                <span className="tech-tag">Airtable</span>
                <span className="tech-tag">Slack</span>
              </div>
              <div className="metrics-highlight">
                <span>📊 €1.2M Raised | 450+ Users | 67% Open Rate</span>
              </div>
              <div className="project-links">
                <a href="http://angelsway.pt/" target="_blank" rel="noopener noreferrer" className="project-link">
                  🌐 Visit AngelsWay.pt
                </a>
                <a href="https://inv.angelsway.pt/" target="_blank" rel="noopener noreferrer" className="project-link">
                  💰 Investment Platform
                </a>
              </div>
            </div>
          </div>
          
          <div className="case-study" data-project="carta-empresario">
            <div className="case-study-header" onClick={() => toggleProject('carta-empresario')}>
              <h3>CARTA DE EMPRESÁRIO - Side Project</h3>
              <div className="header-right">
                <div className="status-badge">2024</div>
                <div className={`expand-icon ${expandedProject === 'carta-empresario' ? 'expanded' : ''}`}>
                  {expandedProject === 'carta-empresario' ? '−' : '+'}
                </div>
              </div>
            </div>
            <div className="case-study-content">
              <div className="wireframe-box">
                <p><strong>Context:</strong> Designed and validated entrepreneurial self-assessment tool using lean product validation, tested with 200+ users and built with AI-assisted development</p>
                {expandedProject === 'carta-empresario' && (
                  <div className="expanded-details">
                    <div className="detail-section">
                      <h4>Product Validation & Design</h4>
                      <ul>
                        <li>Designed and validated a self-assessment tool for entrepreneurs through surveys and testing (200+ users)</li>
                        <li>Created low-fidelity prototypes and ran usability testing to refine UX and onboarding</li>
                        <li>Used generative AI to rapidly iterate on frontend mockups and improve content delivery</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Development & Launch</h4>
                      <ul>
                        <li>Collaborated with a senior engineer to build and release MVP, applying lean product validation techniques</li>
                        <li>Leveraged AI tools for rapid prototyping and frontend development</li>
                        <li>Managed project through Git version control and iterative development cycles</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Git</span>
                <span className="tech-tag">AI Tools</span>
              </div>
              <div className="metrics-highlight">
                <span>📊 200+ User Tests | MVP Launch | Lean Validation</span>
              </div>
              <div className="project-links">
                <a href="https://cartaempresario.pt/" target="_blank" rel="noopener noreferrer" className="project-link">
                  🌐 Try Assessment Tool
                </a>
              </div>
            </div>
          </div>
        </div>
        


        <div className="portfolio-footer">
          <div className="dev-comment-inline">
            // TODO: Add detailed case study pages with full methodology
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
