import './Methodology.css'

interface MethodologyProps {
  isProductManagerView: boolean;
}

const Methodology: React.FC<MethodologyProps> = ({ isProductManagerView: _isProductManagerView }) => {
  return (
    <section id="methodology" className="methodology section">
      <div className="methodology-container">
        <div className="section-header">
          <h2 className="section-title">My Methodology</h2>
          <div className="wireframe-note">PROCESS FRAMEWORK - v2.0</div>
        </div>

        {/* PM Mode Post-it Note */}
        <div className="pm-postit-note">
          <div className="postit-content">
            <div className="postit-pin">📌</div>
            <p className="postit-text">
              First thing below the fold is to make concrete the value you promise above the fold - Show my methodology.
            </p>
          </div>
        </div>
        
        <div className="methodology-grid">
          {/* Ideation Phase */}
          <div className="methodology-step">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3 className="step-title">Ideation</h3>
              <p className="step-description">
                Generate and validate product concepts through user research, market analysis, and stakeholder alignment.
              </p>
              <div className="step-tools">
                <span className="tool-tag">User Research</span>
                <span className="tool-tag">Market Analysis</span>
                <span className="tool-tag">Concept Validation</span>
              </div>
            </div>
            <div className="step-annotation">
              // Start with the why
            </div>
          </div>

          {/* Wireframes Phase */}
          <div className="methodology-step">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3 className="step-title">Wireframes</h3>
              <p className="step-description">
                Create low-fidelity mockups to validate core user flows and information architecture before design investment.
              </p>
              <div className="step-tools">
                <span className="tool-tag">User Flows</span>
                <span className="tool-tag">Information Architecture</span>
                <span className="tool-tag">Rapid Prototyping</span>
              </div>
            </div>
            <div className="step-annotation">
              // Fail fast, learn faster
            </div>
          </div>

          {/* Design Phase */}
          <div className="methodology-step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3 className="step-title">Design</h3>
              <p className="step-description">
                Transform validated wireframes into high-fidelity designs with clear visual hierarchy and user experience principles.
              </p>
              <div className="step-tools">
                <span className="tool-tag">UI/UX Design</span>
                <span className="tool-tag">Design Systems</span>
                <span className="tool-tag">Visual Design</span>
              </div>
            </div>
            <div className="step-annotation">
              // Design with purpose
            </div>
          </div>

          {/* Tech Delivery Phase */}
          <div className="methodology-step">
            <div className="step-number">04</div>
            <div className="step-content">
              <h3 className="step-title">Tech Delivery</h3>
              <p className="step-description">
                Execute development with clear specifications, coordinated sprints, and quality standards.
              </p>
              <div className="step-tools">
                <span className="tool-tag">Technical Specs</span>
                <span className="tool-tag">Sprint Planning</span>
                <span className="tool-tag">Quality Assurance</span>
              </div>
            </div>
            <div className="step-annotation">
              // Ship quality products
            </div>
          </div>

          {/* Testing Phase */}
          <div className="methodology-step">
            <div className="step-number">05</div>
            <div className="step-content">
              <h3 className="step-title">Testing</h3>
              <p className="step-description">
                Implement comprehensive testing strategies including usability testing, A/B experiments, and performance validation.
              </p>
              <div className="step-tools">
                <span className="tool-tag">A/B Testing</span>
                <span className="tool-tag">Usability Testing</span>
                <span className="tool-tag">Performance Metrics</span>
              </div>
            </div>
            <div className="step-annotation">
              // Validate everything
            </div>
          </div>

          {/* Iteration Phase */}
          <div className="methodology-step">
            <div className="step-number">06</div>
            <div className="step-content">
              <h3 className="step-title">Iteration</h3>
              <p className="step-description">
                Analyze results, gather feedback, and continuously improve the product based on data-driven insights and user behavior.
              </p>
              <div className="step-tools">
                <span className="tool-tag">Data Analysis</span>
                <span className="tool-tag">User Feedback</span>
                <span className="tool-tag">Continuous Improvement</span>
              </div>
            </div>
            <div className="step-annotation">
              // Never stop improving
            </div>
          </div>
        </div>







        <div className="methodology-footer">
          <div className="wireframe-note">END OF METHODOLOGY - v2.0</div>
        </div>
      </div>
    </section>
  )
}

export default Methodology
