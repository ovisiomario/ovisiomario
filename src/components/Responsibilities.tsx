import './Responsibilities.css'

interface ResponsibilitiesProps {
  isProductManagerView: boolean;
}

const Responsibilities: React.FC<ResponsibilitiesProps> = ({ isProductManagerView }) => {
  return (
    <section id="responsibilities" className="responsibilities section">
      <div className="responsibilities-container">
        <div className="section-header">
          <h2 className="section-title">My Responsibilities</h2>
          <div className="wireframe-note">TEAM LEADERSHIP - v1.0</div>
        </div>

        {/* Leadership Overview Stats */}
        <div className="leadership-overview">
          <div className="leadership-stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Engineers Managed</span>
          </div>
          <div className="leadership-stat">
            <span className="stat-number">2+</span>
            <span className="stat-label">Designers Led</span>
          </div>
          <div className="leadership-stat">
            <span className="stat-number">3</span>
            <span className="stat-label">Products Delivered</span>
          </div>
        </div>

        {/* Responsibilities Grid */}
        <div className="responsibilities-grid">
          <div className="responsibility-card" data-icon="📋">
            <div className="card-content">
              <h3 className="responsibility-title">Backlog Management</h3>
              <p className="responsibility-description">
                Manage and prioritize backlog in Jira
              </p>
            </div>
          </div>

          <div className="responsibility-card" data-icon="🎯">
            <div className="card-content">
              <h3 className="responsibility-title">Task Coordination</h3>
              <p className="responsibility-description">
                Assign and coordinate tasks across engineering & design
              </p>
            </div>
          </div>

          <div className="responsibility-card" data-icon="✅">
            <div className="card-content">
              <h3 className="responsibility-title">Stakeholder Validation</h3>
              <p className="responsibility-description">
                Validate mockups and wireframes with stakeholders before build
              </p>
            </div>
          </div>

          <div className="responsibility-card" data-icon="🗺️">
            <div className="card-content">
              <h3 className="responsibility-title">Flow Modeling</h3>
              <p className="responsibility-description">
                Model user flows and page states ahead of design work
              </p>
            </div>
          </div>

          <div className="responsibility-card" data-icon="📝">
            <div className="card-content">
              <h3 className="responsibility-title">Requirements Writing</h3>
              <p className="responsibility-description">
                Write clear requirements and user stories for dev team execution
              </p>
            </div>
          </div>

          <div className="responsibility-card" data-icon="🔄">
            <div className="card-content">
              <h3 className="responsibility-title">Delivery Management</h3>
              <p className="responsibility-description">
                Drive iterations, testing, and bug resolution until delivery
              </p>
            </div>
          </div>
        </div>





        <div className="responsibilities-footer">
          <div className="wireframe-note">END OF RESPONSIBILITIES - v1.0</div>
        </div>
      </div>
    </section>
  )
}

export default Responsibilities
