import {
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Github,
  Image as ImageIcon,
} from "lucide-react";

import {
  projects,
} from "../data/portfolioData";

export default function Projects() {

  return (
    <section
      id="projects"
      className="case-studies container"
    >

      <div className="case-heading">

        <div>

          <span className="section-kicker">
            03 / FLAGSHIP WORK
          </span>

          <h2>
            Three projects.
            <br />
            Enough depth to judge
            the engineering.
          </h2>

        </div>

        <p>
          Instead of listing every project
          I have touched, these case studies
          focus on the problem, architecture,
          decisions and evidence behind three
          representative builds.
        </p>

      </div>

      <div className="case-list">

        {projects.map(
          (project, index) => (

            <article
              key={project.id}
              id={
                `project-${project.id}`
              }
              className="case-study"
            >

              <div className="case-number">

                <span>
                  {project.number}
                </span>

                <small>
                  {project.category}
                </small>

              </div>

              <div className="case-content">

                <header>

                  <div>

                    <span className="case-subtitle">
                      {project.subtitle}
                    </span>

                    <h3>
                      {project.title}
                    </h3>

                  </div>

                  <div className="case-links">

                    {project.github ? (

                      <a
                        href={
                          project.github
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github
                          size={15}
                        />
                        GitHub
                      </a>

                    ) : (

                      <span className="link-placeholder">
                        GitHub link to add
                      </span>

                    )}

                    {project.demo ? (

                      <a
                        href={
                          project.demo
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink
                          size={15}
                        />
                        Demo
                      </a>

                    ) : (

                      <span className="link-placeholder">
                        Demo link to add
                      </span>

                    )}

                  </div>

                </header>

                <div className="case-tech">

                  {project.technologies.map(
                    (technology) => (

                      <span
                        key={
                          technology
                        }
                      >
                        {technology}
                      </span>

                    )
                  )}

                </div>

                <div className="case-hero-grid">

                  <div className="case-screenshot">

                    {project.screenshot ? (

                      <img
                        src={
                          project.screenshot
                        }
                        alt={
                          `${project.title} screenshot`
                        }
                      />

                    ) : (

                      <>

                        <ImageIcon
                          size={30}
                        />

                        <strong>
                          Add real product
                          screenshot / GIF
                        </strong>

                        <small>
                          Evidence beats
                          decorative mockups.
                        </small>

                      </>

                    )}

                  </div>

                  <div className="problem-block">

                    <span>
                      THE PROBLEM
                    </span>

                    <p>
                      {project.problem}
                    </p>

                    <span>
                      MY ROLE
                    </span>

                    <p>
                      {project.role}
                    </p>

                  </div>

                </div>

                <div className="architecture-section">

                  <span className="case-label">
                    SYSTEM FLOW
                  </span>

                  <div className="architecture-flow">

                    {project.architecture.map(
                      (step, stepIndex) => (

                        <div
                          key={step}
                          className="architecture-step"
                        >

                          <span>
                            {step}
                          </span>

                          {stepIndex <
                            project
                              .architecture
                              .length -
                              1 && (

                            <ArrowRight
                              size={14}
                            />

                          )}

                        </div>

                      )
                    )}

                  </div>

                </div>

                <div className="decision-grid">

                  {project.decisions.map(
                    (
                      decision,
                      decisionIndex
                    ) => (

                      <article
                        key={
                          decision.title
                        }
                      >

                        <span>
                          DECISION{" "}
                          {String(
                            decisionIndex +
                              1
                          ).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <h4>
                          {
                            decision.title
                          }
                        </h4>

                        <p>
                          {
                            decision.text
                          }
                        </p>

                      </article>

                    )
                  )}

                </div>

                <div className="case-bottom">

                  <div className="iteration-card">

                    <div>

                      <AlertTriangle
                        size={17}
                      />

                      <span>
                        WHAT BROKE /
                        WHAT I ITERATED
                      </span>

                    </div>

                    <p>
                      {
                        project
                          .iteration
                          .text
                      }
                    </p>

                    {!project
                      .iteration
                      .verified && (

                      <small>
                        VERIFY BEFORE
                        PUBLISHING
                      </small>

                    )}

                  </div>

                  <div className="evidence-card">

                    <span>
                      OUTCOME / EVIDENCE
                    </span>

                    <strong>
                      {project.metric}
                    </strong>

                    <h4>
                      {
                        project.metricLabel
                      }
                    </h4>

                    <p>
                      {
                        project.measurement
                      }
                    </p>

                  </div>

                </div>

              </div>

            </article>

          )
        )}

      </div>

    </section>
  );
}